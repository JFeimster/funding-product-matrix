# Borrower Intake Prompt

A copy/paste-ready AI prompt for funding brokers who need to turn messy borrower notes, intake forms, call transcripts, and document snippets into a clean borrower profile for internal review.

This prompt is designed to help organize intake information. It does **not** determine eligibility, approve borrowers, recommend final lenders, quote terms, or replace broker judgment.

## Who This Is For

This file is for:

- New business funding brokers
- Existing loan brokers
- Funding agency owners
- ISOs
- Referral partners
- Broker VAs and processors
- Consultants adding business funding offers
- Operators building AI-assisted intake, CRM, and document workflows

## How to Use This Prompt

Use this prompt after a borrower submits an intake form, completes a discovery call, sends a funding request, or provides partial business information.

Best workflow:

1. Collect borrower intake details.
2. Paste the borrower information into the prompt.
3. Let AI create a structured intake summary.
4. Review every section manually.
5. Fill in missing fields before submission prep.
6. Use broker judgment before communicating funding options, lender fit, or next steps.

Use the output inside your CRM, deal notes, processor handoff, or document checklist.

## Broker Automation Doctrine

Use AI this way:

> Automate the admin.  
> Assist the analysis.  
> Human-review the money talk.  
> Audit everything.

For borrower intake, AI should help clean up information and surface questions. It should not act like an underwriter wearing a cheap Halloween costume.

## Intake Fields to Collect

Use this checklist before running the prompt.

| Field | Collected? | Notes |
|---|---:|---|
| Business name | ☐ | Legal or DBA name if available |
| Owner/contact name | ☐ | Primary borrower contact |
| Industry | ☐ | Be specific when possible |
| Entity type | ☐ | LLC, corporation, sole proprietor, partnership, etc. |
| Time in business | ☐ | Years/months operating |
| Monthly revenue | ☐ | Recent average, if known |
| Average deposits | ☐ | Monthly deposit volume or transaction pattern |
| Funding amount requested | ☐ | Amount borrower wants |
| Use of funds | ☐ | Working capital, inventory, payroll, expansion, equipment, etc. |
| Desired timing | ☐ | Same week, 30 days, flexible, urgent, etc. |
| Existing debt/advances | ☐ | Loans, MCAs, credit lines, advances, liens, etc. |
| Credit range | ☐ | Self-reported range only unless verified |
| Bank statement status | ☐ | Received, pending, incomplete, not requested |
| Tax return status | ☐ | Received, pending, unavailable, not required yet |
| Collateral, if any | ☐ | Equipment, property, receivables, vehicles, inventory, etc. |
| Referral source | ☐ | Partner, ad, organic search, client referral, event, etc. |

## Forbidden Outputs

When using AI for borrower intake, the output must not include:

- “Approved”
- “Guaranteed approval”
- “You qualify”
- “Everyone qualifies”
- “No documents needed”
- Final lender recommendation
- Final underwriting decision
- Final product recommendation without broker review
- Quoted rates, terms, payments, or repayment schedules unless provided by a verified lender offer
- Legal, tax, accounting, or underwriting advice
- Claims that funding is certain, instant, or risk-free

## Primary Prompt

Copy and paste this prompt into your AI tool.

```text
You are assisting a business funding broker with borrower intake organization.

Your job is to summarize the borrower information into a clear internal intake summary for broker review.

Important rules:
- Do not approve or decline the borrower.
- Do not say funding is guaranteed.
- Do not recommend a final lender.
- Do not quote rates, terms, payments, or fees.
- Do not invent numbers, documents, facts, or borrower details.
- Do not provide legal, tax, accounting, or underwriting advice.
- Use careful language such as “may,” “could,” “appears,” “needs review,” “eligibility varies,” “lender review required,” and “human review required.”
- Flag missing information clearly.
- Identify possible red flags without making a final decision.
- Keep the output useful for CRM notes, broker review, and next-action planning.

Use this output structure:

1. Borrower Snapshot
2. Funding Request Summary
3. Strengths
4. Missing Information
5. Questions for Broker Review
6. Potential Red Flags
7. Suggested Next Action

Borrower intake information:
[PASTE BORROWER NOTES, FORM DATA, CALL TRANSCRIPT, OR EMAIL SUMMARY HERE]
```

## Short Version Prompt

Use this when you need a fast CRM-ready intake summary.

```text
Summarize the borrower intake below for internal funding broker review.

Rules:
- Do not say approved, guaranteed, or qualified.
- Do not recommend a final lender.
- Do not quote terms.
- Do not invent missing information.
- Use cautious language and flag gaps.

Output:
- Borrower snapshot
- Funding request summary
- Strengths
- Missing information
- Broker review questions
- Potential red flags
- Suggested next action

Borrower intake:
[PASTE INFORMATION HERE]
```

## Detailed Version Prompt

Use this for fuller intake reviews, processor handoffs, or CRM cleanup.

```text
You are an AI assistant helping a business funding broker organize borrower intake information for internal review.

Your role is operational support only. You are not an underwriter, lender, attorney, accountant, tax advisor, or compliance officer.

Create a structured borrower intake summary using only the information provided. If a detail is missing, label it as missing. Do not infer, assume, or invent information.

Strict rules:
- Do not make approval or denial decisions.
- Do not say the borrower qualifies.
- Do not say funding is guaranteed.
- Do not recommend a final lender or final product.
- Do not quote rates, repayment terms, factor rates, APRs, payments, fees, or funding amounts unless the user provided a verified source.
- Do not give legal, tax, accounting, lending, or underwriting advice.
- Do not use aggressive or deceptive borrower-facing language.
- Keep all sensitive borrower data summarized only as needed for broker review.
- Flag any sensitive information that should not be copied into unsecured tools or public notes.

Review the borrower intake information and produce the following sections:

## Borrower Snapshot
- Business name:
- Owner/contact name:
- Industry:
- Entity type:
- Time in business:
- Monthly revenue:
- Average deposits:
- Funding requested:
- Use of funds:
- Desired timing:
- Existing debt/advances:
- Credit range:
- Bank statement status:
- Tax return status:
- Collateral:
- Referral source:

## Funding Request Summary
Summarize what the borrower is requesting and why.

## Strengths
List any positive indicators based only on the provided information.

## Missing Information
List missing data needed before a broker can properly assess the file.

## Questions for Broker Review
Create practical follow-up questions the broker should ask before submission prep.

## Potential Red Flags
Identify possible issues that may require human review. Use cautious language and avoid final decisions.

## Suggested Next Action
Recommend the next operational step, such as request bank statements, confirm revenue, clarify existing debt, schedule review call, update CRM stage, or create document checklist.

Borrower intake information:
[PASTE BORROWER NOTES, INTAKE FORM, EMAIL, CALL TRANSCRIPT, OR CRM DATA HERE]
```

## Recommended Output Format

Use this structure when saving the AI output inside your CRM.

```text
Borrower Snapshot:
[Clean summary of business, owner, industry, revenue, time in business, requested amount, and use of funds.]

Funding Request Summary:
[Plain-English summary of what the borrower wants and why.]

Strengths:
- [Strength 1]
- [Strength 2]
- [Strength 3]

Missing Information:
- [Missing item 1]
- [Missing item 2]
- [Missing item 3]

Questions for Broker Review:
- [Question 1]
- [Question 2]
- [Question 3]

Potential Red Flags:
- [Possible issue 1]
- [Possible issue 2]
- [Possible issue 3]

Suggested Next Action:
[Next CRM action, document request, review step, or borrower follow-up.]
```

## Example Borrower Input

```text
Business: Queen City Mobile Detail LLC
Owner: Marcus Reed
Industry: Mobile auto detailing
Entity: LLC
Time in business: 2 years and 4 months
Monthly revenue: around $42,000 average over the last 3 months
Average deposits: not sure, says most payments come through Stripe and business checking
Funding requested: $35,000
Use of funds: second van, supplies, payroll cushion, ads
Desired timing: within 2 weeks
Existing debt: one equipment loan with about $11,500 left, plus a small business credit card balance around $4,800
Credit range: owner says around 660 to 680
Bank statements: has 4 months ready
Tax returns: 2024 return filed, can provide if needed
Collateral: current van and equipment, not sure of value
Referral source: referred by bookkeeping partner
Notes: owner says business is growing but cash flow gets tight when several fleet clients pay late. Wants to avoid missing payroll during expansion.
```

## Example AI Output

```text
Borrower Snapshot:
Queen City Mobile Detail LLC is a mobile auto detailing business owned by Marcus Reed. The business has been operating for approximately 2 years and 4 months. The borrower reports average monthly revenue of about $42,000 over the last 3 months. The requested funding amount is $35,000. The stated use of funds is to purchase a second van, buy supplies, create payroll cushion, and increase advertising.

Funding Request Summary:
The borrower is seeking $35,000 within roughly 2 weeks to support expansion and stabilize short-term cash flow. The stated need appears connected to growth, delayed customer payments, payroll timing, and added operating capacity.

Strengths:
- Business has more than 2 years of operating history.
- Borrower reports consistent recent monthly revenue around $42,000.
- Borrower has 4 months of bank statements available.
- Use of funds is tied to business operations and expansion.
- Referral came from a bookkeeping partner, which may support follow-up and documentation.

Missing Information:
- Average monthly deposit volume has not been confirmed.
- Bank statement details need review, including deposit consistency, negative days, ending balances, and existing repayment activity.
- Equipment loan payment amount is not listed.
- Business credit card minimum payment or utilization is not listed.
- Collateral value is unknown.
- Tax return has not been reviewed.

Questions for Broker Review:
- Are the reported revenues visible in business bank statements?
- How many negative days appear in the most recent 3 to 4 months of statements?
- What are the monthly payments on the equipment loan and business credit card?
- Are there any existing merchant cash advances or daily/weekly repayment obligations?
- Are fleet client payments recurring, contracted, or irregular?
- Is the second van already identified, and what is the estimated purchase cost?

Potential Red Flags:
- Cash flow may be tight due to delayed fleet client payments.
- Existing equipment debt and credit card balances should be reviewed before any funding option is discussed.
- Average deposits are not yet confirmed.
- Expansion funding combined with payroll cushion may require careful review of repayment capacity.

Suggested Next Action:
Move the CRM stage to Docs Requested or Docs Partially Received, depending on whether the bank statements have been uploaded. Request the 4 most recent business bank statements, confirm existing debt payments, ask whether any advances exist, and schedule a broker review before discussing lender fit or possible funding options.
```

## CRM Copy/Paste Version

Use this shorter format for deal notes.

```text
AI Intake Summary:
[Borrower/business name] is requesting [amount] for [use of funds]. Business operates in [industry] and reports [time in business] with approximately [monthly revenue] in monthly revenue. Documents received: [list]. Missing documents: [list].

Key strengths: [list].
Key concerns: [list].
Broker review needed: [questions].
Next action: [specific next step].

Compliance note: Intake summary is for internal review only. No approval, final lender recommendation, or terms have been provided.
```

## Intake Quality Scorecard

Use this mini-scorecard to decide whether the intake is ready for broker review.

| Category | 0 = Missing | 1 = Partial | 2 = Clear |
|---|---:|---:|---:|
| Business identity | ☐ | ☐ | ☐ |
| Owner/contact info | ☐ | ☐ | ☐ |
| Industry and entity type | ☐ | ☐ | ☐ |
| Time in business | ☐ | ☐ | ☐ |
| Monthly revenue | ☐ | ☐ | ☐ |
| Deposit visibility | ☐ | ☐ | ☐ |
| Funding amount | ☐ | ☐ | ☐ |
| Use of funds | ☐ | ☐ | ☐ |
| Existing debt/advances | ☐ | ☐ | ☐ |
| Document status | ☐ | ☐ | ☐ |
| Credit range | ☐ | ☐ | ☐ |
| Desired timing | ☐ | ☐ | ☐ |

### Score Interpretation

| Score | Status | Recommended Action |
|---:|---|---|
| 0–8 | Intake is messy | Request missing basics before review |
| 9–16 | Intake is workable | Broker can review, but gaps remain |
| 17–24 | Intake is strong | Prepare document checklist and next-action plan |

## Broker Safety Note

Borrower intake may include sensitive borrower data, business financial details, personal identifiers, tax information, bank information, and debt details.

Before using AI with borrower information:

- Avoid pasting full Social Security numbers, bank account numbers, tax IDs, login credentials, or unredacted documents into unsecured tools.
- Use secure systems approved by your organization when handling borrower files.
- Review all AI summaries before saving them to a CRM or sending them to a borrower, lender, partner, or processor.
- Do not let AI make approval decisions, quote terms, or replace lender review.
- Keep borrower-facing communication clear, careful, and truthful.
- When in doubt, escalate to a human reviewer.

AI can support intake organization. It cannot replace underwriting, compliance review, lender criteria, legal advice, tax advice, or broker judgment.

## Bottom CTA

Want to build or automate your funding agency?

Join the #1 B2B Funding Platform:  
https://tally.so/r/mOe658

Explore the Moonshine Capital Partner Program:  
https://www.distilledfunding.com/partners
