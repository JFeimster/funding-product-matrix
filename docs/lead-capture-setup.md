# Lead Capture Setup

The Funding Product Matrix landing page uses a first-party Vercel serverless endpoint:

`POST /api/resource-lead`

The browser never receives HubSpot credentials.

## Current behavior

1. Visitor enters an email address.
2. The page submits the email and UTM/referrer context to `/api/resource-lead`.
3. The endpoint searches HubSpot contacts by email.
4. If the contact exists, it is reused.
5. If the contact does not exist, a new HubSpot contact is created.
6. The resource library unlocks only after the server returns success.
7. Resource clicks are sent back as lightweight `resource_opened` events. They can be written into a HubSpot contact property when an optional property mapping is configured.

No marketing-subscription status is changed by this endpoint.

## Required Vercel environment variable

Create a HubSpot private app with the minimum contact read/write scopes required by your portal, then add:

`HUBSPOT_PRIVATE_APP_TOKEN`

to the Vercel project environment.

Do not put the token in `script.js`, `index.html`, GitHub Actions variables exposed to the client, or any `NEXT_PUBLIC_*` / `VITE_*` variable.

## Optional attribution fields

The endpoint can write source metadata into existing HubSpot CONTACT properties if you provide their internal property names:

- `HUBSPOT_RESOURCE_PROPERTY`
- `HUBSPOT_UTM_SOURCE_PROPERTY`
- `HUBSPOT_UTM_MEDIUM_PROPERTY`
- `HUBSPOT_UTM_CAMPAIGN_PROPERTY`
- `HUBSPOT_UTM_CONTENT_PROPERTY`
- `HUBSPOT_REFERRER_PROPERTY`

If these are blank, the endpoint only creates or finds the contact by email.

## Health check

`GET /api/health`

returns whether the server sees the HubSpot token without revealing it.

## Deployment control

The repository's `vercel.json` controls Git-triggered deployments separately from the API implementation. Do not put secrets in `vercel.json`.
