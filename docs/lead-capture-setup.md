# Lead Capture Setup

The Funding Product Matrix landing page uses:

`POST /api/resource-lead`

## Flow

1. Visitor enters an email address in the landing-page resource card.
2. The browser posts email + resource + UTM/referrer data to `/api/resource-lead`.
3. The endpoint creates a unique Event ID and emits a structured `FPM_LEAD_EVENT` runtime event.
4. The resource library unlocks immediately after a successful response.
5. An hourly automation reads new Vercel events, deduplicates by Event ID, and appends them to the canonical Google Sheet.

## Canonical Lead Ledger

**Funding Product Matrix Leads**

https://docs.google.com/spreadsheets/d/1a_adQz2LHCA-iUrcTQhH9uCCHbHBkBFA_ryuKUhh_Tw/edit

Columns:

- Timestamp
- Event ID
- Email
- Resource
- Event
- UTM Source
- UTM Medium
- UTM Campaign
- UTM Content
- Referrer
- Follow-Up Status
- Notes

## Sync

The automation scans the prior two hours of production Vercel logs each hour and appends only Event IDs that are not already present in the Leads tab.

## Health Check

`GET /api/health`

returns the current lead-capture mode.
