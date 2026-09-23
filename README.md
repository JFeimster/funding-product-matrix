<img width="1672" height="941" alt="Image" src="https://github.com/user-attachments/assets/d6cd8df3-6d4c-4b91-a437-d654814aec9f" />

# Funding Product Matrix for Brokers

A practical broker-routing resource from **Moonshine Capital / DistilledFunding** for comparing common business funding product categories by borrower fit, use of funds, readiness, red flags, documents, repayment structure, urgency, and next-best action.

> **Route better deals. Stop funding by vibes.**

## Live Sites

- **Vercel:** https://funding-product-matrix.vercel.app/
- **GitHub Pages:** https://jfeimster.github.io/funding-product-matrix/
- **Repository:** https://github.com/JFeimster/funding-product-matrix

## Published Content

- **Full article:** https://www.distilledfunding.com/post/funding-product-matrix
- **YouTube walkthrough:** https://youtu.be/d3llRn13oQ4
- **Interactive Notion version:** https://feimster.notion.site/funding-product-matrix
- **Google Docs lead magnet:** https://docs.google.com/document/d/1bBvlhatB9RevTQ5OSc5iqoBUldJhl8ZBgYAkPntXCfg/copy

## Downloadable Assets

| Asset | Format | Repository file |
| --- | --- | --- |
| Full broker lead magnet | Markdown | [docs/funding-product-matrix-for-brokers.md](docs/funding-product-matrix-for-brokers.md) |
| Funding product matrix data | CSV | [docs/funding-product-matrix-for-brokers.csv](docs/funding-product-matrix-for-brokers.csv) |
| Formatted spreadsheet | XLSX | [docs/funding-product-matrix-for-brokers.xlsx](docs/funding-product-matrix-for-brokers.xlsx) |
| One-page lead magnet | PDF | [docs/funding-product-matrix-for-brokers-one-page.pdf](docs/funding-product-matrix-for-brokers-one-page.pdf) |

The CSV is the simplest option for importing the matrix into **Google Sheets, Notion, Airtable, or a CRM**. The XLSX version is formatted for spreadsheet use. The Markdown version is optimized for GitHub, Notion, and documentation workflows.

## What the Matrix Covers

The matrix helps brokers compare:

- Merchant Cash Advance / MCA
- Business Line of Credit / LOC
- Equipment Financing
- Accounts Receivable / Invoice Financing
- Credit Builder Offers
- Term Loans
- SBA-style / Longer-Term Financing
- Inventory Financing
- Revenue-Based Financing

The full lead magnet also includes:

- Product fit scoring
- Human-review triggers
- Borrower intake questions
- Product-specific red flags
- Product routing cheat sheet
- CRM / Notion / Airtable field structure
- Broker conversation scripts
- Compliance-safe language
- Next-best-action guidance

## Who It Is For

Designed for:

- Funding brokers
- Referral partners
- ISOs
- Funding agency operators
- Consultants
- Broker VAs
- Business funding teams

## Suggested Workflow

1. Identify the borrower’s actual use of funds.
2. Review revenue, cash-flow pressure, urgency, and existing obligations.
3. Check document readiness.
4. Compare at least two plausible product categories.
5. Assign a **1–5 product-fit score**.
6. Escalate ambiguous or higher-risk files for human review.
7. Route the borrower toward the best initial product category rather than defaulting to the fastest or most familiar offer.

The scoring model is a **routing aid, not an approval score**.

## Repository Structure

```text
funding-product-matrix/
├── index.html
├── styles.css
├── script.js
├── vercel.json
├── .env.example
├── api/
│   ├── resource-lead.js
│   └── health.js
├── README.md
└── docs/
    ├── funding-product-matrix-for-brokers.md
    ├── funding-product-matrix-for-brokers.csv
    ├── funding-product-matrix-for-brokers.xlsx
    ├── funding-product-matrix-for-brokers-one-page.pdf
    └── lead-capture-setup.md
```

## Static Site

The front end is intentionally lightweight:

- Plain HTML
- Plain CSS
- Small optional JavaScript enhancement
- No React
- No Tailwind
- No external runtime dependencies
- Works without JavaScript

### Local Preview

Open `index.html` directly in a browser.

### Vercel

The repository can deploy as a static Vercel project with no build step.

Production URL:

https://funding-product-matrix.vercel.app/

#### Deployment Control

Automatic Git deployments are **locked off by default** in `vercel.json`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": null,
  "installCommand": "",
  "git": {
    "deploymentEnabled": {
      "*": false,
      "main": false
    }
  }
}
```

This prevents automatic Preview deployments and also prevents automatic Production deployment from `main`.

When you intentionally want the next push to `main` to deploy to Production, temporarily change:

```json
"main": false
```

to:

```json
"main": true
```

Keep `"*": false` unchanged so non-production branches remain blocked from automatic Preview deployments. After the intended Production deployment, switch `main` back to `false`.

### GitHub Pages

The same static site is also available through GitHub Pages:

https://jfeimster.github.io/funding-product-matrix/

## Lead Capture

The landing page posts resource-access events to `/api/resource-lead`. Each event receives a unique Event ID and is emitted to Vercel runtime logs. An hourly automation deduplicates and appends those events to the canonical Google Sheet:

https://docs.google.com/spreadsheets/d/1a_adQz2LHCA-iUrcTQhH9uCCHbHBkBFA_ryuKUhh_Tw/edit

Setup details: [docs/lead-capture-setup.md](docs/lead-capture-setup.md)

The YouTube and article cards use their direct published URLs:

- YouTube: https://youtu.be/d3llRn13oQ4
- Article: https://www.distilledfunding.com/post/funding-product-matrix

## DistilledFunding Redirect Targets

The static page is designed to work with branded DistilledFunding redirect URLs such as:

- `https://www.distilledfunding.com/go/funding-matrix-pdf`
- `https://www.distilledfunding.com/go/funding-matrix-csv`
- `https://www.distilledfunding.com/go/funding-matrix-notion`
- `https://www.distilledfunding.com/go/funding-matrix-video`
- `https://www.distilledfunding.com/go/funding-matrix-article`
- `https://www.distilledfunding.com/go/start-funding-agency`
- `https://www.distilledfunding.com/go/funding-options`
- `https://www.distilledfunding.com/go/broker-automation`

## Compliance Note

This project is an educational and broker workflow resource. It does **not** guarantee funding approval, pricing, repayment terms, lender eligibility, credit outcomes, or funding timelines. Eligibility and terms vary by lender/provider and borrower profile.

Funding, underwriting, lending, tax, legal, accounting, and compliance decisions should remain with qualified professionals and the appropriate providers.

---

**Moonshine Capital / DistilledFunding**

**Route better deals. Stop funding by vibes.**
