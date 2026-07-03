# Automate vs Keep Human Decision Matrix

A practical decision matrix for funding brokers, ISOs, referral partners, broker VAs, processors, and funding agency owners who want to use AI and automation without letting the machine cosplay as an underwriter.

This file helps you decide which broker tasks can be automated, which should be AI-assisted, and which must stay human-reviewed because money, borrower trust, lender communication, and compliance-sensitive workflows are involved.

## How to Use This Matrix

Use this file when building automations in your CRM, intake forms, email/SMS tools, n8n, Zapier, Make, or AI assistant workflows.

Work through the matrix before launching any broker automation. For each task, decide:

1. Can this be safely automated?
2. Should AI only assist with a draft, summary, or checklist?
3. Where is human review required?
4. What can go wrong if this workflow runs without supervision?
5. What audit trail should be saved in the CRM?

Use the core broker automation doctrine:

> **Automate the admin. Assist the analysis. Human-review the money talk. Audit everything.**

That doctrine keeps the system useful without turning your funding agency into a vending machine full of bad promises.

## Decision Labels

| Label | Meaning | Typical Use |
|---|---|---|
| Yes | Safe to automate when rules are clear | Notifications, reminders, task creation, CRM updates |
| Yes, with review | AI or automation can draft, summarize, classify, or prepare, but a human must review before action | Deal summaries, product-fit notes, borrower messages |
| Assist only | AI can support the broker, but should not trigger final communication or decisioning by itself | Lender-fit considerations, offer explanation drafts |
| No | Keep human only | Final funding decisions, legal documents, guarantees, underwriting conclusions |

## Risk Level Guide

| Risk Level | Meaning | Example |
|---|---|---|
| Low | Administrative risk; usually fixable | Create CRM task, send internal alert |
| Medium | Borrower-facing or file-quality risk | Missing document reminder, intake summary |
| High | Could affect borrower expectations, lender relationships, compliance, or financial decision-making | Offer explanation, lender-fit suggestion, decline explanation |
| Critical | Should not be automated without qualified human control | Final approval decision, legal document drafting, income claims |

## Broker Task Decision Matrix

| Broker task | Automate? | AI role | Human role | Risk level | Notes |
|---|---:|---|---|---|---|
| New lead notification | Yes | None or basic categorization | Confirm lead should be contacted | Low | Safe first automation. Trigger alerts by form submission, lead source, or funding request size. |
| Intake summary | Yes, with review | Summarize borrower profile, funding request, missing information, and possible red flags | Review facts, correct missing context, decide next action | Medium | AI should summarize, not qualify or approve. Save summary in CRM. |
| CRM tagging | Yes | Suggest tags based on source, industry, urgency, product interest, and document status | Review tag logic during audits | Low | Use consistent tags. Bad tags turn CRMs into haunted filing cabinets. |
| Missing document reminder | Yes, with review for sensitive cases | Draft reminder language and personalize document list | Approve escalation, sensitive requests, or final reminder before nurture | Medium | Safe when language is clear, calm, and does not promise approval. |
| Appointment scheduling | Yes | Suggest meeting type based on borrower status | Confirm unusual or VIP scheduling needs | Low | Use scheduling links and CRM reminders. Avoid double-booking and time-zone stupidity. |
| Call summary | Yes, with review | Summarize call notes, action items, borrower concerns, and promised follow-up | Confirm accuracy and add broker judgment | Medium | Never rely only on AI transcription for sensitive details. Review before lender submission. |
| Deal summary draft | Yes, with review | Draft internal deal summary, strengths, concerns, missing docs, and questions | Validate numbers, file status, lender-fit notes, and next action | High | This is one of the highest-value AI uses, but human review is mandatory. |
| Bank statement summary | Assist only | Summarize visible trends if data is provided: deposits, negative days, balances, recurring payments | Verify calculations, interpret cash flow, determine file readiness | High | Do not let AI invent numbers or replace underwriting review. Use source documents and calculations. |
| Product-fit suggestion | Assist only | Suggest possible funding categories to consider based on borrower profile | Decide whether the option is appropriate and compliant to discuss | High | AI may support triage. Broker judgment and lender criteria control the conversation. |
| Lender recommendation | Assist only | Provide lender-fit considerations and questions to review | Select lenders, confirm eligibility, manage submission strategy | High | Do not let AI make final lender recommendations without broker review. Lender requirements and terms may change. |
| Offer explanation | Assist only | Draft plain-English explanation of offer structure, conditions, next steps, and questions | Review terms, explain risks, avoid advising beyond role | High | Borrower-facing offer talk needs human review. No pressure tactics. No hidden landmines. |
| Decline explanation | Assist only | Draft neutral explanation focused on general readiness issues and next steps | Review lender feedback, avoid unsupported reasons, set nurture path | High | Be careful. Do not invent decline reasons or blame the borrower. |
| Legal document drafting | No | None, unless summarizing user-provided plain-language notes for attorney review | Qualified legal professional or approved document provider handles drafting | Critical | Do not use AI to draft legal documents for borrower signature without qualified review. |
| Final funding decision | No | None | Lender or authorized decision-maker determines final approval/decline | Critical | Brokers and AI should not pretend to be the lender. Approval is not guaranteed. |
| Earnings claim for broker program | No | Flag risky or unsupported claims | Human compliance/leadership review | Critical | Do not promise broker income. Avoid “make $10K your first week” nonsense. That is how trust gets lit on fire. |
| Referral partner follow-up | Yes, with review | Draft follow-up, status update, referral request, or re-engagement message | Review tone, accuracy, partner context, and privacy concerns | Medium | Great automation candidate if borrower details are protected. |
| Renewal reminder | Yes, with review | Trigger reminder based on funded date, renewal window, or nurture stage | Confirm borrower is appropriate to contact and message is accurate | Medium | Keep language exploratory. Do not imply guaranteed renewal or approval. |
| Borrower nurture sequence | Yes, with review | Draft educational messages, readiness tips, and document prep reminders | Approve message library and segment rules | Medium | Useful for Not Ready and Lost/Nurture stages. Avoid fake urgency and funding promises. |

## Safe to Automate First

Start here. These workflows create leverage without placing AI too close to underwriting, lender communication, or borrower expectation management.

### 1. New Lead Notification

**Automate:** Yes  
**Trigger:** Lead form submitted  
**Action:** Create CRM record, notify broker, assign owner, set first follow-up task  
**Human review:** Broker confirms whether to contact  
**Audit trail:** Lead source, timestamp, assigned owner, first task created

### 2. CRM Stage and Task Creation

**Automate:** Yes  
**Trigger:** New lead, missed call, submitted form, document uploaded, or stage change  
**Action:** Create next action, update CRM field, assign task  
**Human review:** Weekly CRM audit  
**Audit trail:** Stage changed from/to, automation source, task owner

### 3. Missing Document Reminders

**Automate:** Yes, with approved templates  
**Trigger:** Missing document field remains open after 24–48 hours  
**Action:** Send calm SMS/email reminder using the specific missing document list  
**Human review:** Required before final reminder or sensitive escalation  
**Audit trail:** Message sent, document requested, borrower response

### 4. Appointment Scheduling

**Automate:** Yes  
**Trigger:** Borrower reaches Connected, Pre-Screened, or Docs Requested stage  
**Action:** Send scheduling link or internal booking task  
**Human review:** Broker confirms meeting purpose and readiness  
**Audit trail:** Meeting type, scheduled date, borrower status

### 5. Renewal Reminder

**Automate:** Yes, with broker review  
**Trigger:** Funded file reaches renewal review window  
**Action:** Create broker task and optional borrower check-in draft  
**Human review:** Broker confirms borrower status and whether outreach is appropriate  
**Audit trail:** Funded date, renewal check date, last contact date

## Automate with Human Review

These workflows are high-value, but they need a human checkpoint before borrower-facing communication, lender submission, or strategic decisions.

### Intake Summary

AI can summarize borrower intake details into a clean borrower profile, but a broker should confirm:

- Business name and contact information are correct
- Time in business is clear
- Monthly revenue is sourced from borrower input or documents
- Funding request and use of funds make sense
- Missing information is clearly flagged
- No approval language appears

### Deal Summary Draft

AI can prepare an internal summary for review, including:

- Borrower/business overview
- Funding request
- Use of funds
- Monthly revenue notes
- Bank statement notes
- Existing debt/advance notes
- Strengths
- Concerns
- Missing documents
- Questions for broker review

A broker must review before the summary is sent to any lender, partner, or internal processor.

### Bank Statement Summary

AI can help identify patterns if clean data is provided, such as:

- Deposit consistency
- Negative days
- Average balance notes
- Large unusual deposits
- Returned items or overdraft indicators
- Potential debt payments

A human must validate numbers against actual statements. AI should not invent figures, estimate unsupported data, or present analysis as underwriting.

### Product-Fit Suggestion

AI may suggest categories to consider, such as working capital, equipment financing, business credit, term loan, or line of credit. It should not tell the borrower they qualify or that a specific lender will approve them.

Use AI for triage. Use broker judgment for strategy.

### Referral Partner Follow-Up

AI can draft partner messages, but human review matters because referral partner communication can accidentally reveal too much borrower information.

Before sending, confirm:

- The partner is authorized to receive the update
- Borrower-sensitive details are limited
- Status is accurate
- No approval or income promises are included

## Keep Human Only

Some work should not be automated because the downside is too high and the “efficiency” is a trap wearing a fake mustache.

### Final Funding Decision

Final approval, decline, pricing, underwriting, and funding terms belong to the lender or authorized decision-maker. AI can organize information. It cannot approve the file.

### Legal Document Drafting

Do not use AI to draft legal contracts, loan documents, authorization forms, personal guarantees, or compliance-sensitive agreements without qualified review. Use approved lender forms and consult qualified professionals where appropriate.

### Lender Recommendation Without Review

AI should not automatically pick a final lender, submit files, or tell a borrower which lender is best without broker review. Lender criteria, risk appetite, documentation rules, and pricing may change.

### Offer Explanation Without Review

A borrower deserves a clear, accurate explanation of offer structure, repayment, cost, obligations, and next steps. AI may draft plain-language notes, but a broker must verify terms and avoid giving advice outside their role.

### Decline Explanation Without Review

Decline explanations can create legal, reputational, and relationship risk if they are inaccurate. Do not let AI invent reasons. Use confirmed lender feedback and careful language.

### Broker Earnings Claims

Never automate claims like:

- “You will make $10K your first week”
- “Every referral pays”
- “This is guaranteed income”
- “AI closes deals for you”

Use compliant, careful language. Broker income varies based on activity, product fit, lender approval, borrower quality, and partner program terms.

## Task-by-Task Automation Rules

### Rule 1: If It Creates a Reminder, Usually Automate It

Examples:

- Follow up tomorrow
- Request bank statements
- Remind broker to call borrower
- Notify referral partner manager
- Check renewal eligibility window

These are admin tasks. Automate them.

### Rule 2: If It Summarizes Messy Information, AI Can Assist

Examples:

- Intake summary
- Call summary
- Bank statement note summary
- Deal summary draft
- Missing information list

These are analysis-support tasks. AI can assist, but a human must review.

### Rule 3: If It Talks About Money, Terms, Approval, Declines, or Legal Rights, Human Review Is Required

Examples:

- Offer explanation
- Decline explanation
- Lender recommendation
- Product-fit guidance
- Legal documents
- Final funding decision

These are compliance-sensitive and trust-sensitive workflows. Keep the human in the loop.

### Rule 4: If the Output Could Change Borrower Behavior, Review It First

If a message might cause the borrower to:

- Upload sensitive documents
- Stop pursuing other options
- Expect approval
- Accept an offer
- Pay a fee
- Share private financial information
- Believe they are guaranteed funding

Then a human should review the output before it goes out.

## Quick Decision Checklist

Before automating a broker workflow, ask:

- [ ] Is this task administrative?
- [ ] Does the automation use approved templates?
- [ ] Does the workflow avoid approval promises?
- [ ] Does the workflow avoid quoting terms?
- [ ] Does the workflow avoid final lender recommendations?
- [ ] Is borrower-sensitive data protected?
- [ ] Is human review required before borrower-facing money talk?
- [ ] Is the automation logged in the CRM?
- [ ] Can the broker override the automation?
- [ ] Is there a failure path if the automation breaks?

If you cannot answer yes to most of these, slow down. Fast chaos is still chaos — it just wears sneakers.

## Recommended CRM Audit Fields

Use these fields to keep automation accountable:

| Field | Purpose |
|---|---|
| Automation source | Shows which workflow created or updated the record |
| Last automation run | Confirms when the workflow last fired |
| Human review required | Flags records needing broker judgment |
| Human reviewer | Identifies who reviewed the output |
| Review date | Tracks when review happened |
| AI summary status | Draft, reviewed, revised, approved for internal use |
| Borrower-facing message approved | Confirms outbound message was reviewed if needed |
| Compliance-sensitive communication | Flags money, terms, approval, decline, or legal-adjacent messaging |
| Sensitive borrower data present | Flags files with private documents or financial data |
| Automation error notes | Captures broken triggers, bad data, or misfires |

## Suggested Automation Governance Rhythm

### Daily

- Review new leads created by automation
- Check failed tasks or missing owner assignments
- Review borrower-facing drafts before sending
- Confirm urgent borrower files have a next action

### Weekly

- Audit CRM stages and stuck files
- Review AI summaries for accuracy
- Check missing document automation performance
- Confirm no unapproved claims are being sent
- Review referral partner communication logs

### Monthly

- Update templates
- Review compliance-sensitive phrases
- Clean duplicate CRM records
- Retire broken automations
- Update lender-fit notes based on current partner guidance
- Review whether automation is improving file movement or just creating prettier clutter

## Broker Safety Note

AI and automation can support broker operations, intake organization, document follow-up, CRM hygiene, and internal review workflows. They should not make final funding decisions, guarantee approvals, quote final terms, provide legal/tax/accounting advice, or replace lender review.

Funding eligibility varies by borrower profile, lender criteria, documentation, revenue, credit, cash flow, existing obligations, and current program rules. Terms may change. Human review is required for compliance-sensitive communication, lender submissions, offer explanations, decline explanations, and anything involving sensitive borrower data.

When in doubt, automate the task reminder — not the judgment.

## Bottom CTA

Want to build or automate your funding agency?

**Join the #1 B2B Funding Platform:**  
https://tally.so/r/mOe658

You can also explore the Moonshine Capital Partner Program here:  
https://www.distilledfunding.com/partners
