"use strict";

const HUBSPOT_BASE = "https://api.hubapi.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  return res.end(JSON.stringify(body));
}

function clean(value, max = 500) {
  return String(value == null ? "" : value).trim().slice(0, max);
}

function parseBody(req) {
  if (!req.body) return {};
  if (typeof req.body === "object") return req.body;
  try { return JSON.parse(req.body); }
  catch { return {}; }
}

async function hubspot(path, token, options = {}) {
  const response = await fetch(HUBSPOT_BASE + path, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data?.message || `HubSpot request failed (${response.status}).`);
    error.status = response.status;
    throw error;
  }
  return data;
}

function mappedProperties(body) {
  const props = {};
  const attribution = body.attribution && typeof body.attribution === "object" ? body.attribution : {};

  const mappings = [
    ["HUBSPOT_RESOURCE_PROPERTY", clean(body.resource, 255)],
    ["HUBSPOT_UTM_SOURCE_PROPERTY", clean(attribution.utm_source, 255)],
    ["HUBSPOT_UTM_MEDIUM_PROPERTY", clean(attribution.utm_medium, 255)],
    ["HUBSPOT_UTM_CAMPAIGN_PROPERTY", clean(attribution.utm_campaign, 255)],
    ["HUBSPOT_UTM_CONTENT_PROPERTY", clean(attribution.utm_content, 255)],
    ["HUBSPOT_REFERRER_PROPERTY", clean(attribution.referrer, 500)]
  ];

  for (const [envName, value] of mappings) {
    const propertyName = clean(process.env[envName], 120);
    if (propertyName && value) props[propertyName] = value;
  }

  return props;
}

async function findContactByEmail(email, token) {
  const data = await hubspot("/crm/v3/objects/contacts/search", token, {
    method: "POST",
    body: JSON.stringify({
      filterGroups: [{
        filters: [{ propertyName: "email", operator: "EQ", value: email }]
      }],
      properties: ["email"],
      limit: 1
    })
  });

  return data?.results?.[0] || null;
}

async function createContact(email, extraProperties, token) {
  return hubspot("/crm/v3/objects/contacts", token, {
    method: "POST",
    body: JSON.stringify({ properties: { email, ...extraProperties } })
  });
}

async function updateContact(contactId, extraProperties, token) {
  if (!Object.keys(extraProperties).length) return { id: contactId };
  return hubspot(`/crm/v3/objects/contacts/${encodeURIComponent(contactId)}`, token, {
    method: "PATCH",
    body: JSON.stringify({ properties: extraProperties })
  });
}

module.exports = async function resourceLead(req, res) {
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    return res.end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return json(res, 405, { ok: false, error: { code: "method_not_allowed", message: "Only POST is allowed." } });
  }

  const token = clean(process.env.HUBSPOT_PRIVATE_APP_TOKEN, 5000);
  if (!token) {
    return json(res, 503, {
      ok: false,
      error: {
        code: "lead_capture_not_configured",
        message: "Resource access is temporarily unavailable."
      }
    });
  }

  const body = parseBody(req);
  const email = clean(body.email, 320).toLowerCase();
  const event = clean(body.event || "unlock", 80);
  const source = clean(body.source || "funding-product-matrix", 120);

  // Lightweight honeypot support if the front end adds one later.
  if (clean(body.website, 200)) {
    return json(res, 200, { ok: true });
  }

  if (!EMAIL_RE.test(email)) {
    return json(res, 400, {
      ok: false,
      error: { code: "invalid_email", message: "Enter a valid email address." }
    });
  }

  if (source !== "funding-product-matrix") {
    return json(res, 400, {
      ok: false,
      error: { code: "invalid_source", message: "Unsupported resource source." }
    });
  }

  try {
    const extraProperties = mappedProperties(body);
    let contact = await findContactByEmail(email, token);
    let created = false;

    if (contact) {
      contact = await updateContact(contact.id, extraProperties, token);
    } else {
      contact = await createContact(email, extraProperties, token);
      created = true;
    }

    return json(res, created ? 201 : 200, {
      ok: true,
      data: {
        event,
        source,
        contact_created: created
      }
    });
  } catch (error) {
    console.error("resource-lead hubspot error", {
      status: error?.status || 500,
      message: error?.message || "unknown"
    });

    return json(res, 502, {
      ok: false,
      error: {
        code: "lead_capture_failed",
        message: "We could not save your resource access. Please try again."
      }
    });
  }
};
