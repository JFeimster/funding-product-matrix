# Deal Summary Prompt

## Short Description

The **Deal Summary Prompt** helps funding brokers turn messy borrower intake notes, bank statement observations, document status, and funding requests into a cleaner internal summary for broker review, lender-fit discussion, and submission prep.

This prompt does **not** make approval decisions, quote terms, replace underwriting, or decide where a deal should go. It helps organize the file so a human broker can think faster and miss less.

**Broker automation doctrine:**

> Automate the admin.  
> Assist the analysis.  
> Human-review the money talk.  
> Audit everything.

---

## Who This Is For

This file is built for:

- New business funding brokers
- Existing loan brokers
- Funding agency owners
- ISOs
- Broker VAs and processors
- Referral partners
- Consultants adding business funding offers
- Operators building CRM, document collection, and AI-assisted broker workflows

Use this when you need a clean internal snapshot before deciding the next action on a borrower file.

---

## How to Use This Prompt

Use this prompt after basic intake information and supporting documents have been collected. The better the source data, the better the output.

Recommended workflow:

1. Collect borrower intake details.
2. Review documents received and missing.
3. Add bank statement notes or cash flow observations if available.
4. Paste the borrower data into the prompt.
5. Generate the deal summary.
6. Review every section manually.
7. Correct missing, outdated, or unclear information.
8. Use the final summary for internal broker review, processor handoff, CRM notes, or lender submission prep.

Do **not** send AI-generated summaries directly to lenders, borrowers, or referral partners without human review. The robot can organize the mess. It does not get to drive the money truck.

---

## Primary Prompt

Copy and paste the prompt below into your AI tool.

```text
You are assisting a business funding broker with an internal deal summary.

Your job is to organize the borrower information into a clear, structured summary for broker review. You are not making a final funding decision. You are not underwriting the file. You are not guaranteeing approval. You are not quoting rates, terms, payments, or lender decisions.

Use only the information provided. Do not invent numbers, missing details, lender names, approval odds, terms, fees, or underwriting conclusions.

Create an internal deal summary using this structure:

1. Executive Deal Summary
2. Business Profile
3. Funding Request
4. Cash Flow Notes
5. Strengths
6. Concerns
7. Missing Documents
8. Questions for Broker Review
9. Suggested Lender-Fit Considerations
10. Human Review Checklist
11. Suggested Next Action

Important rules:
- Do not say the borrower is approved.
- Do not say funding is guaranteed.
- Do not recommend one final lender.
- Do not quote terms, rates, payments, payback amounts, or approval amounts.
- Do not provide legal, tax, accounting, or underwriting advice.
- Flag unclear information instead of guessing.
- Mark missing information clearly.
- Use cautious language such as "may support," "could be relevant," "requires review," "eligibility varies," and "lender review required."

Borrower / deal information:
[PASTE BORROWER DETAILS, DOCUMENT NOTES, BANK STATEMENT NOTES, AND FUNDING REQUEST HERE]
```

---

## Short Prompt

Use this version when you already have clean borrower notes and just need a fast internal summary.

```text
Create an internal business funding deal summary from the information below.

Use only the provided information. Do not invent numbers, quote terms, make approval decisions, guarantee funding, or recommend a final lender. Flag missing or unclear information.

Output sections:
- Executive Deal Summary
- Business Profile
- Funding Request
- Cash Flow Notes
- Strengths
- Concerns
- Missing Documents
- Questions for Broker Review
- Suggested Lender-Fit Considerations
- Human Review Checklist
- Suggested Next Action

Deal information:
[PASTE NOTES HERE]
```

---

## Detailed Prompt

Use this version for higher-stakes files, processor handoffs, or when the intake data is messy.

```text
You are helping a funding broker prepare an internal deal summary for human review.

Your role:
- Organize the file.
- Summarize what is known.
- Identify missing information.
- Highlight strengths and concerns.
- Suggest lender-fit considerations for broker review.
- Prepare a human review checklist.

Your limits:
- You are not an underwriter.
- You are not making a final approval decision.
- You are not guaranteeing eligibility.
- You are not quoting terms, rates, repayment amounts, payment schedules, fees, or approval amounts.
- You are not giving legal, tax, accounting, or lending advice.
- You are not submitting the file to any lender.

Use cautious, compliance-sensitive language.

When information is missing, say "Not provided." When information is unclear, say "Needs broker review." When a concern exists, explain why it may matter but do not make a final decision.

Create a structured internal deal summary using this format:

## Executive Deal Summary
Write a concise 4–6 sentence summary of the business, funding request, current file status, and major review items.

## Business Profile
Include business name, owner/contact, industry, entity type if known, time in business, monthly revenue, average deposits if known, and referral source if provided.

## Funding Request
Summarize amount requested, use of funds, desired timing, urgency, and any product interest mentioned.

## Cash Flow Notes
Summarize bank statement observations, deposit trends, revenue consistency, negative days, average daily balance if known, existing debt or advances, and any cash flow items requiring broker review.

## Strengths
List borrower or file factors that may support review, using cautious language.

## Concerns
List potential issues, inconsistencies, missing information, repayment capacity questions, document gaps, or risk notes that need human review.

## Missing Documents
List documents still needed. Separate critical missing documents from nice-to-have documents.

## Questions for Broker Review
List specific questions the broker should answer before lender submission prep.

## Suggested Lender-Fit Considerations
Do not recommend a final lender. Instead, list general considerations a broker may review, such as revenue consistency, time in business, document completeness, existing debt, collateral availability, urgency, and product fit.

## Human Review Checklist
Create a checklist the broker should complete before any borrower-facing or lender-facing communication.

## Suggested Next Action
Recommend one next operational step, such as request missing documents, schedule review call, update CRM stage, prepare submission package for broker review, or move to nurture.

Deal information:
[PASTE ALL AVAILABLE BORROWER AND FILE DETAILS HERE]
```

---

## Required Data Inputs

Use the table below as the preferred source data checklist before running the prompt.

| Data Input | Description | Status |
|---|---|---|
| Borrower / business overview | Basic summary of the company and ownership/contact details | ☐ Collected |
| Industry | Business category or NAICS-style description if known | ☐ Collected |
| Time in business | How long the business has been operating | ☐ Collected |
| Monthly revenue | Current or average monthly revenue | ☐ Collected |
| Bank statement notes | Summary of statements reviewed | ☐ Collected |
| Deposit trends | Consistency, seasonality, growth, decline, or volatility | ☐ Collected |
| Negative days | Number or pattern of negative balance days, if known | ☐ Collected |
| Average daily balance | ADB, if calculated or provided | ☐ Collected |
| Existing debt / advances | Open loans, MCAs, advances, lines, or payment obligations | ☐ Collected |
| Funding request | Amount requested and desired product type, if known | ☐ Collected |
| Use of funds | Working capital, payroll, inventory, equipment, marketing, expansion, etc. | ☐ Collected |
| Credit notes | Credit range, known issues, freezes, utilization, or inquiry concerns | ☐ Collected |
| Collateral notes | Real estate, equipment, vehicles, receivables, or other collateral | ☐ Collected |
| Documents received | Bank statements, ID, voided check, application, tax returns, debt schedule, etc. | ☐ Collected |
| Missing documents | Any required items not yet received | ☐ Collected |
| Referral source | Referral partner, ad source, organic lead, client referral, etc. | ☐ Collected |
| CRM stage | Current pipeline stage and next action date | ☐ Collected |

---

## Output Structure

Use this output format for every internal deal summary.

### 1. Executive Deal Summary

A short summary of the file in plain English.

Include:

- Business type
- Funding request
- Current file status
- Major strengths
- Major concerns
- Next action

### 2. Business Profile

Include:

- Business name
- Owner/contact name
- Industry
- Entity type
- Time in business
- Monthly revenue
- Average deposits
- Referral source

### 3. Funding Request

Include:

- Funding amount requested
- Use of funds
- Desired timing
- Product interest
- Urgency level
- Notes requiring review

### 4. Cash Flow Notes

Include:

- Revenue consistency
- Deposit trends
- Negative balance days
- Average daily balance, if known
- Existing debt or advances
- Bank statement gaps
- Items requiring human review

### 5. Strengths

Examples:

- Consistent monthly revenue may support review.
- Time in business appears sufficient for some funding programs, subject to lender criteria.
- Use of funds is specific and business-related.
- Documents are mostly complete.
- Referral source is known.

### 6. Concerns

Examples:

- Missing bank statements.
- Existing advances may affect repayment capacity.
- Revenue appears inconsistent.
- Negative days require review.
- Credit range is unclear.
- Use of funds needs clarification.
- Borrower expectations may need resetting.

### 7. Missing Documents

Separate into:

| Critical Missing Items | Optional / Follow-Up Items |
|---|---|
| Bank statements | Tax returns, if needed |
| Application | Debt schedule |
| Driver’s license | Collateral documentation |
| Voided check | Proof of ownership |

### 8. Questions for Broker Review

Examples:

- Does the borrower have any current advances or daily/weekly payments?
- Are all bank statements complete and readable?
- Is the funding request aligned with observed revenue?
- Is the use of funds specific enough?
- Does urgency require same-day review or standard processing?
- Should the borrower be moved to nurture instead of submission prep?

### 9. Suggested Lender-Fit Considerations

This section should not name a final lender or make a final recommendation.

Review considerations may include:

- Time in business
- Monthly revenue level
- Deposit consistency
- Existing debt load
- Negative days
- Industry restrictions
- Collateral availability
- Document completeness
- Funding urgency
- Credit profile
- Desired product type

### 10. Human Review Checklist

Before any external communication or lender submission, confirm:

- [ ] Borrower information is accurate.
- [ ] Monthly revenue was not guessed or inflated.
- [ ] Bank statement observations were reviewed by a human.
- [ ] Missing documents are clearly listed.
- [ ] Existing debt or advances were reviewed.
- [ ] No approval language was used.
- [ ] No guaranteed terms were quoted.
- [ ] No final lender decision was made by AI.
- [ ] CRM stage and next action were updated.
- [ ] Sensitive borrower data was handled securely.

---

## Strict Instructions for AI Output

Every prompt in this file should include these rules:

- Do **not** make a final approval decision.
- Do **not** invent numbers.
- Do **not** quote terms.
- Do **not** submit without broker review.
- Do **not** say the borrower is approved.
- Do **not** say funding is guaranteed.
- Do **not** recommend one final lender.
- Do **not** give legal, tax, accounting, or underwriting advice.
- Do **not** create fake risk scores unless the broker provides a scoring framework.
- Do **not** use borrower-facing language unless instructed.
- Do **not** include sensitive borrower data in tools or systems that are not approved for that data.

---

## Example Input

```text
Business name: MetroLine Commercial Cleaning LLC
Owner/contact: Dana Williams
Industry: Commercial cleaning and janitorial services
Entity type: LLC
Time in business: 3 years
Monthly revenue: Approximately $82,000 average over the last 3 months
Average deposits: Not calculated
Funding requested: $75,000
Use of funds: Payroll bridge, new cleaning equipment, and supplies for two new commercial contracts
Desired timing: Within 7–10 business days if possible
Existing debt/advances: One existing working capital advance with daily payments; balance unknown
Credit range: Owner estimates mid-600s
Bank statement status: 3 months received
Tax return status: Not provided
Collateral: Cleaning equipment and company vehicle, details not provided
Documents received: Application, 3 months bank statements, driver’s license
Missing documents: Voided check, debt schedule, current advance payoff information, collateral details
Bank statement notes: Revenue appears steady, deposits from multiple commercial clients, several low-balance days, no full negative month observed from initial notes
Referral source: Bookkeeper referral
CRM stage: Docs Partially Received
Risk notes: Existing daily payment advance needs review before submission prep
```

---

## Example AI Output

```text
## Executive Deal Summary
MetroLine Commercial Cleaning LLC is a 3-year-old commercial cleaning business requesting $75,000 for payroll support, equipment, and supplies tied to two new commercial contracts. The file has a clear business use of funds and three months of bank statements have been received. Revenue appears to average approximately $82,000 per month based on the provided notes, but average deposits and average daily balance were not calculated. The main review items are the existing daily payment advance, missing payoff information, several low-balance days, and incomplete document package. Suggested next action: request the missing debt schedule, payoff details, voided check, and collateral notes before lender submission prep.

## Business Profile
- Business name: MetroLine Commercial Cleaning LLC
- Owner/contact: Dana Williams
- Industry: Commercial cleaning and janitorial services
- Entity type: LLC
- Time in business: 3 years
- Monthly revenue: Approximately $82,000 average over the last 3 months, based on provided notes
- Average deposits: Not provided
- Referral source: Bookkeeper referral

## Funding Request
- Amount requested: $75,000
- Use of funds: Payroll bridge, new cleaning equipment, and supplies for two new commercial contracts
- Desired timing: 7–10 business days if possible
- Product interest: Not provided
- Urgency: Moderate
- Review note: The requested amount should be reviewed against cash flow, existing debt, and lender criteria. Eligibility varies and lender review is required.

## Cash Flow Notes
- Revenue appears steady based on the provided notes.
- Deposits appear to come from multiple commercial clients.
- Several low-balance days were noted.
- No full negative month was observed in the initial notes provided.
- Average daily balance was not provided.
- Existing daily payment advance requires broker review before submission prep.

## Strengths
- Time in business may support review for certain funding options, subject to lender criteria.
- Monthly revenue appears meaningful based on the provided notes.
- Use of funds is specific and business-related.
- Three months of bank statements have been received.
- Referral source is known.

## Concerns
- Existing daily payment advance may affect repayment capacity.
- Current advance balance and payoff information are missing.
- Several low-balance days require review.
- Average deposits and average daily balance were not calculated.
- Voided check and debt schedule are missing.
- Collateral details were mentioned but not documented.

## Missing Documents
### Critical Missing Items
- Voided check
- Debt schedule
- Current advance payoff information
- Collateral details, if collateral will be considered

### Optional / Follow-Up Items
- Tax returns, if required for the applicable funding path
- Contract documentation for the two new commercial contracts, if relevant

## Questions for Broker Review
- What is the current balance and payment schedule on the existing advance?
- How many negative days appear across the full bank statement review?
- What is the average daily balance?
- Are the two new commercial contracts signed and active?
- Is the requested amount aligned with revenue and repayment capacity?
- Should the borrower be considered for a shorter-term working capital product, equipment-related option, or another product path after review?

## Suggested Lender-Fit Considerations
Broker may review lender-fit based on time in business, revenue consistency, existing daily payment obligations, negative days, document completeness, business use of funds, and urgency. No final lender recommendation should be made without broker review and applicable lender criteria.

## Human Review Checklist
- [ ] Confirm monthly revenue calculation.
- [ ] Review full bank statements manually.
- [ ] Calculate average daily balance if needed.
- [ ] Verify existing advance balance and payment frequency.
- [ ] Request missing documents.
- [ ] Confirm use of funds.
- [ ] Update CRM stage and next follow-up date.
- [ ] Remove any unsupported approval or term language.

## Suggested Next Action
Keep the file in Docs Partially Received. Request the voided check, debt schedule, current advance payoff details, and collateral information before moving the file to File Complete or submission prep.
```

---

## Broker Review Quality Scorecard

Use this scorecard before relying on an AI-generated deal summary.

| Review Item | Pass / Fail | Notes |
|---|---:|---|
| Uses only provided data | ☐ Pass / ☐ Fail | No invented numbers or assumptions |
| No approval language | ☐ Pass / ☐ Fail | No “approved,” “guaranteed,” or “qualified” claims |
| Missing documents clearly listed | ☐ Pass / ☐ Fail | Critical items separated from optional items |
| Concerns are specific | ☐ Pass / ☐ Fail | No vague “risky deal” language |
| Lender-fit section is cautious | ☐ Pass / ☐ Fail | No final lender recommendation |
| Human review checklist included | ☐ Pass / ☐ Fail | Broker must review before next step |
| CRM next action is clear | ☐ Pass / ☐ Fail | Stage and follow-up date can be updated |
| Sensitive data handled properly | ☐ Pass / ☐ Fail | No unnecessary private information included |

---

## Suggested CRM Note Format

Use this format when pasting a summarized version into your CRM.

```text
Deal Summary Reviewed: [DATE]
Borrower: [BUSINESS NAME]
Funding Request: [AMOUNT REQUESTED]
Use of Funds: [USE OF FUNDS]
Current Stage: [CRM STAGE]
Documents Received: [LIST]
Missing Documents: [LIST]
Strengths: [SHORT SUMMARY]
Concerns: [SHORT SUMMARY]
Human Review Needed: [YES/NO]
Next Action: [ACTION]
Next Follow-Up Date: [DATE]
Owner: [BROKER/PROCESSOR NAME]
```

---

## Suggested Next Actions by File Status

| File Status | Suggested Next Action | Automation Support | Human Review Required |
|---|---|---|---|
| Intake incomplete | Request missing intake fields | Send intake completion reminder | Yes |
| Docs partially received | Send missing document checklist | Trigger doc reminder sequence | Yes |
| Bank statements received | Generate statement summary draft | Create internal notes | Yes |
| File complete | Generate deal summary draft | Notify broker | Yes |
| Submission prep | Prepare internal package checklist | Create task list | Yes |
| Offers received | Summarize offer details for broker review | Create comparison draft | Yes |
| Not ready | Move to nurture and set reminder | Trigger nurture sequence | Yes |

---

## What This Prompt Can and Cannot Do

### This Prompt Can Help With

- Organizing borrower information
- Summarizing deal notes
- Identifying missing documents
- Flagging questions for broker review
- Creating CRM notes
- Preparing internal handoffs
- Improving consistency across broker files

### This Prompt Cannot Do

- Approve or decline a borrower
- Guarantee funding
- Quote rates or terms
- Replace underwriting
- Replace broker judgment
- Replace lender review
- Replace legal, accounting, tax, or compliance advice
- Decide final lender placement without human review

AI can clean the kitchen. It should not sign the checkbook.

---

## Broker Safety Note

Business funding workflows involve sensitive borrower data, financial records, lender communication, and compliance-sensitive claims. Do not paste unnecessary personally identifiable information, complete bank credentials, Social Security numbers, tax IDs, account numbers, or private borrower documents into AI tools unless your systems, permissions, and data handling policies allow it.

AI-generated summaries should be treated as drafts. A qualified human broker, processor, or responsible team member should review every deal summary before borrower communication, lender submission, offer discussion, or CRM status change. Approval is not guaranteed, eligibility varies, terms may change, and lender review is required.

---

## Bottom CTA

Want to build or automate your funding agency?

**Join the #1 B2B Funding Platform:**  
https://tally.so/r/mOe658

Secondary reference:

**Explore the Moonshine Capital Partner Program:**  
https://www.distilledfunding.com/partners
