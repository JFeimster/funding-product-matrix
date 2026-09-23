"use strict";

const crypto = require("crypto");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LOG_PREFIX = "FPM_LEAD_EVENT";

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

module.exports = async function resourceLead(req, res) {
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    return res.end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return json(res, 405, { ok: false, error: { code: "method_not_allowed", message: "Only POST is allowed." } });
  }

  const body = parseBody(req);
  const email = clean(body.email, 320).toLowerCase();
  const event = clean(body.event || "unlock", 80);
  const resource = clean(body.resource || "funding-product-matrix", 120);
  const source = clean(body.source || "funding-product-matrix", 120);
  const attribution = body.attribution && typeof body.attribution === "object" ? body.attribution : {};

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

  const leadEvent = {
    event_id: `fpm_${crypto.randomUUID()}`,
    timestamp: new Date().toISOString(),
    email,
    resource,
    event,
    source,
    utm_source: clean(attribution.utm_source, 255),
    utm_medium: clean(attribution.utm_medium, 255),
    utm_campaign: clean(attribution.utm_campaign, 255),
    utm_content: clean(attribution.utm_content, 255),
    referrer: clean(attribution.referrer, 1000)
  };

  console.log(LOG_PREFIX, JSON.stringify(leadEvent));

  return json(res, 201, {
    ok: true,
    data: {
      event_id: leadEvent.event_id,
      event,
      resource,
      source
    }
  });
};
