"use strict";

module.exports = async function health(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  return res.end(JSON.stringify({
    ok: true,
    service: "funding-product-matrix",
    lead_capture_configured: Boolean(process.env.HUBSPOT_PRIVATE_APP_TOKEN)
  }));
};
