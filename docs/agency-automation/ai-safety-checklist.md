# AI Safety Checklist for Funding Brokers

AI can help funding brokers move faster, clean up messy workflows, summarize borrower information, organize CRM stages, draft follow-up, and reduce pipeline chaos.

It can also create problems fast if it invents terms, mishandles borrower data, makes approval promises, or sends lender-sensitive messages without human review.

This checklist helps funding brokers use AI responsibly inside borrower-facing and internal workflows.

## How to Use This Checklist

Use this file before adding AI to any funding agency workflow.

Recommended use cases:

- Reviewing borrower-facing AI messages
- Building CRM automations
- Creating chatbot boundaries
- Training broker VAs or processors
- Auditing prompt templates
- Reviewing marketing claims
- Checking document automation workflows
- Creating internal SOPs for AI-assisted funding operations

Simple rule:

> Automate the admin. Assist the analysis. Human-review the money talk. Audit everything.

Do not treat this checklist as legal, compliance, tax, accounting, lending, or underwriting advice. Funding eligibility varies, lender review is required, and human review should remain part of any sensitive borrower or lender workflow.

## Safety Scoring System

Use this scoring table to rate each AI workflow before launch.

| Score | Status | Meaning |
|---:|---|---|
| 0 | Unsafe | Workflow should not be used. High risk of misleading claims, data exposure, or unauthorized decisions. |
| 1 | Risky | Workflow needs major review before use. Guardrails are missing or unclear. |
| 2 | Partially controlled | Some rules exist, but review steps, data handling, or audit trails are incomplete. |
| 3 | Usable with review | Workflow may be used internally with human review and limited borrower-facing exposure. |
| 4 | Controlled | Workflow has clear boundaries, review steps, approved prompts, and audit tracking. |
| 5 | Controlled and audited | Workflow is documented, tested, reviewed, versioned, monitored, and periodically audited. |

Recommended launch threshold:

- Internal admin workflow: **3+**
- Borrower-facing workflow: **4+**
- Lender communication workflow: **4+**
- Any workflow involving offers, declines, approvals, terms, or eligibility: **human review required every time**

---

# Core AI Safety Checklist

## 1. Borrower Data Protection

Borrower data is not casual copy-paste fuel. Treat it like sensitive financial information because that is exactly what it is.

### Checklist

- [ ] Remove unnecessary personally identifiable information before using AI.
- [ ] Do not paste full Social Security numbers, full account numbers, tax IDs, passwords, or private login details into general-purpose AI tools.
- [ ] Use secure systems for bank statements, tax returns, IDs, voided checks, debt schedules, and lender documents.
- [ ] Limit access to borrower files based on role.
- [ ] Store borrower documents in approved systems only.
- [ ] Confirm whether your AI tool stores prompts, files, outputs, or training data.
- [ ] Avoid uploading borrower documents into tools without reviewing privacy, security, and retention settings.
- [ ] Use borrower consent where appropriate before collecting or sharing financial information.
- [ ] Do not share sensitive borrower data with referral partners unless authorized and necessary.
- [ ] Keep an audit trail of who accessed, edited, summarized, or transmitted borrower information.

### Minimum Standard

AI may support borrower profile summaries, document checklists, intake cleanup, and internal notes, but sensitive borrower data should only be processed inside approved, secure, and reviewed workflows.

---

## 2. Prompt Safety

Bad prompts create bad outputs. Bad outputs create confused borrowers, angry referral partners, and lender-side faceplants.

### Checklist

- [ ] Tell AI not to make approval decisions.
- [ ] Tell AI not to invent numbers, documents, terms, lender names, rates, fees, or timelines.
- [ ] Tell AI not to say “approved,” “guaranteed,” or “qualified” unless a verified lender decision supports it.
- [ ] Tell AI to flag missing information instead of guessing.
- [ ] Tell AI to use careful language such as “may help,” “eligibility varies,” and “lender review required.”
- [ ] Tell AI to separate facts from assumptions.
- [ ] Tell AI to produce questions for broker review.
- [ ] Tell AI to identify potential red flags without making final underwriting judgments.
- [ ] Use approved prompt templates for intake summaries, deal summaries, follow-up messages, and referral updates.
- [ ] Version-control prompts used in borrower-facing or lender-facing workflows.

### Safe Prompt Clause

Copy/paste this clause into broker AI prompts:

```text
Do not make approval decisions, guarantee funding, quote final terms, invent missing information, provide legal/tax/accounting advice, or recommend a final lender. If information is missing or unclear, flag it for broker review. Use careful language: eligibility varies, lender review required, terms may change, documentation may be required, and approval is not guaranteed.
```

---

## 3. Output Review

AI output is a draft. Not gospel. Not underwriting. Not “the lender said.”

### Checklist

- [ ] Review every borrower-facing message before automation goes live.
- [ ] Review all outputs involving funding options, product fit, risk notes, lender fit, or offer explanation.
- [ ] Compare AI summaries against source documents.
- [ ] Check that AI did not invent missing data.
- [ ] Check that AI did not imply approval, eligibility, or final terms.
- [ ] Check that risk notes are factual and not inflammatory.
- [ ] Check that borrower communication is clear, respectful, and specific.
- [ ] Check that lender communication is accurate, complete, and supported by documents.
- [ ] Keep a record of reviewed outputs where practical.
- [ ] Update prompts when repeated issues appear.

### AI Output Review Checklist

Use this before sending or saving AI-generated output.

| Review Item | Yes/No | Notes |
|---|---|---|
| Does the output avoid approval promises? |  |  |
| Does it avoid guaranteed funding language? |  |  |
| Does it avoid quoting unverified rates, terms, or fees? |  |  |
| Does it separate confirmed facts from assumptions? |  |  |
| Does it identify missing information? |  |  |
| Does it avoid legal, tax, accounting, or underwriting advice? |  |  |
| Does it protect sensitive borrower data? |  |  |
| Does it require human review where needed? |  |  |
| Does it match the CRM stage and next action? |  |  |
| Is it clear enough for a broker, processor, or borrower to understand? |  |  |

---

## 4. Marketing Claims

Marketing is where brokers accidentally step on rakes wearing tap shoes.

### Checklist

- [ ] Do not promise funding approval.
- [ ] Do not promise income for brokers, agents, affiliates, or referral partners.
- [ ] Do not imply every borrower qualifies.
- [ ] Do not claim “no documents needed” unless a specific verified product allows that and the claim is qualified.
- [ ] Do not claim “no credit matters ever.”
- [ ] Do not invent lender speed, approval rate, funding amount, or commission examples.
- [ ] Do not use fake testimonials, fake case studies, fake review ratings, or fake screenshots.
- [ ] Do not imply Moonshine Capital is a bank.
- [ ] Do not let AI generate unsupported urgency, scarcity, or income claims.
- [ ] Use careful phrasing and include lender review where relevant.

### Red Flag Phrases

Do not use these unless they are legally reviewed, factually supported, and contextually accurate. In most broker workflows, avoid them entirely.

| Red Flag Phrase | Why It Is Risky |
|---|---|
| guaranteed approval | Implies certainty before lender review. |
| everyone qualifies | Misleading because eligibility varies. |
| instant approval | May confuse pre-screening with actual approval. |
| no documents needed | Often inaccurate or product-specific. |
| no credit matters ever | Overbroad and potentially misleading. |
| make $10K your first week | Unsupported broker income claim. |
| AI closes deals for you | Overstates automation and minimizes human review. |

### Safer Alternatives

| Risky Claim | Safer Alternative |
|---|---|
| Guaranteed approval | Funding options may be available depending on lender review. |
| Everyone qualifies | Eligibility varies by business profile, documents, revenue, and lender requirements. |
| Instant approval | Fast pre-screening may be available; final approval requires lender review. |
| No documents needed | Documentation may be required depending on the product and lender. |
| No credit matters ever | Some options may place more weight on revenue and bank activity, but credit and other factors may still be reviewed. |
| Make $10K your first week | Broker income varies and is not guaranteed. |
| AI closes deals for you | AI may help organize follow-up and admin tasks, but human review and broker judgment remain required. |

---

## 5. Chatbot Boundaries

A funding chatbot should collect information, explain next steps, route leads, and reduce confusion.

It should not act like a licensed advisor, lender, underwriter, lawyer, accountant, or mystical oracle with a Stripe account.

### Chatbot Do/Don’t Table

| Chatbot Area | Do | Don’t |
|---|---|---|
| Lead intake | Collect basic borrower profile details. | Tell the borrower they are approved. |
| Document checklist | Explain what documents may be needed. | Say documents are never required. |
| Funding amount | Ask how much the borrower is seeking. | Recommend a final approved amount. |
| Use of funds | Ask what the capital is for. | Judge legality, tax treatment, or accounting treatment. |
| Timing | Ask desired funding timeline. | Promise same-day or instant funding unless verified and qualified. |
| Product education | Explain general funding categories. | Claim a specific lender will approve. |
| Eligibility | Say eligibility varies and review is required. | Say “you qualify” before verified review. |
| Next step | Route to broker, form, document upload, or call. | Submit sensitive info without consent or secure workflow. |
| Referral partner | Capture partner source and referral details. | Share borrower financial details without authorization. |
| Declines | Direct borrower to broker for review. | Give final decline explanations or legal advice. |

### Chatbot Boundary Statement

Use this in chatbot instructions:

```text
You are an intake and workflow assistant for a funding broker. You may collect basic business funding information, summarize borrower needs, explain general next steps, and route the borrower to human review. You may not approve funding, guarantee eligibility, quote final terms, provide legal/tax/accounting advice, or make lender decisions.
```

---

## 6. Document Automation

Document automation can save deals from dying in inbox purgatory. But document workflows need security, clarity, and human review.

### Checklist

- [ ] Use secure document upload methods.
- [ ] Avoid requesting sensitive documents through unsecured channels when possible.
- [ ] Keep document checklists specific to the funding request and product type.
- [ ] Confirm document receipt in the CRM.
- [ ] Track missing documents in a dedicated field.
- [ ] Do not let AI infer that a file is complete unless all required documents are verified.
- [ ] Do not let AI alter borrower documents.
- [ ] Use AI to summarize document status, not replace document review.
- [ ] Include human review before lender submission.
- [ ] Maintain a record of documents requested, received, reviewed, and submitted.

### Sensitive Data Handling Checklist

| Data Type | AI Use Allowed? | Safety Rule |
|---|---|---|
| Business name | Usually yes | Use only as needed. |
| Contact name | Usually yes | Avoid unnecessary exposure. |
| Email/phone | Limited | Use approved CRM and communication tools. |
| Bank statements | Restricted | Use secure, approved systems; human review required. |
| Tax returns | Restricted | Avoid general AI tools; use secure storage and professional review where needed. |
| Driver’s license | Restricted | Do not paste/upload into unapproved AI tools. |
| Voided check | Restricted | Protect account/routing information. |
| Debt schedule | Sensitive | Summarize carefully; do not invent payoff terms. |
| Credit notes | Sensitive | Avoid definitive credit-based claims. |
| Full SSN/EIN | Highly restricted | Do not paste into general-purpose AI tools. |
| Bank login credentials | Never | Do not request, store, or transmit. |

---

## 7. Lender Communication

AI can help prepare cleaner lender submission notes. It should not send half-baked fiction dressed up as broker confidence.

### Checklist

- [ ] Broker reviews all lender-facing summaries.
- [ ] Confirm all numbers against source documents before submission.
- [ ] Do not include unsupported claims about revenue, deposits, profitability, collateral, or repayment ability.
- [ ] Do not hide known material issues.
- [ ] Do not let AI choose the final lender without broker judgment.
- [ ] Use AI to draft lender-fit considerations, not final recommendations.
- [ ] Keep lender communication factual, concise, and document-supported.
- [ ] Track which lender received which version of the file.
- [ ] Update CRM with submission date, lender name, and status.
- [ ] Keep offer and decline communication under human review.

### Safe Lender Summary Language

```text
Based on the information currently available, this file may be worth reviewing for potential funding options. Eligibility, approval, terms, and documentation requirements depend on lender review. The broker should verify all figures and documents before submission.
```

---

## 8. CRM Automation

CRM automation should make the pipeline cleaner, not create a haunted spreadsheet with push notifications.

### Checklist

- [ ] Every lead has a stage.
- [ ] Every active file has a next action.
- [ ] Every follow-up has an owner.
- [ ] Every document request has a deadline or review date.
- [ ] CRM automations update fields, tasks, reminders, and notifications accurately.
- [ ] AI-generated CRM notes are labeled as AI-assisted or draft where appropriate.
- [ ] Automations do not move files to “submitted” without human review.
- [ ] Automations do not mark “file complete” unless required documents are verified.
- [ ] Lost, not-ready, and nurture stages are clearly separated.
- [ ] High-risk stages trigger human review.

### CRM Automation Risk Map

| CRM Action | Automation Risk | Rule |
|---|---|---|
| Create new lead | Low | Safe to automate with basic validation. |
| Assign lead source | Low | Safe to automate if source is captured accurately. |
| Send first confirmation | Medium | Use approved language; avoid approval claims. |
| Request documents | Medium | Use secure upload links and specific checklist. |
| Mark docs complete | High | Human review required. |
| Generate deal summary | Medium | AI can draft; broker reviews. |
| Submit to lender | High | Human review required before submission. |
| Explain offer | High | Broker review required. |
| Explain decline | High | Broker review required. |
| Move to funded | Medium | Confirm funding status first. |

---

## 9. Human Approval Rules

Some tasks can be automated. Some can be assisted. Some stay human because money, risk, and borrower trust are involved.

### Human Review Required

Human review should be required before:

- Sending lender-facing deal summaries
- Submitting a file to a lender
- Marking a file complete
- Explaining funding offers
- Explaining declines
- Discussing rates, fees, terms, repayment, or renewals
- Giving product-fit guidance
- Sending sensitive borrower updates to referral partners
- Publishing broker program income claims
- Sending borrower-facing messages after complaints, confusion, disputes, or sensitive issues
- Using AI-generated legal, tax, accounting, underwriting, or compliance language

### AI May Assist

AI may help draft or organize:

- Intake summaries
- Missing document reminders
- CRM notes
- Follow-up tasks
- Referral partner updates
- Borrower nurture emails
- Deal summary drafts
- Bank statement observation drafts
- Renewal reminders
- Internal checklists

### Safe Human Review Rule

If the message could change a borrower’s expectations about approval, terms, eligibility, timeline, or obligations, a human reviews it before it goes out.

---

## 10. Audit Trail

If you cannot reconstruct what happened, your automation is not an operating system. It is a confetti cannon with API keys.

### Checklist

- [ ] Store final approved prompt templates.
- [ ] Track prompt version changes.
- [ ] Track borrower-facing message versions.
- [ ] Track CRM automation triggers.
- [ ] Track who reviewed deal summaries.
- [ ] Track document requests and receipt dates.
- [ ] Track lender submissions and statuses.
- [ ] Track offer/decline communication.
- [ ] Track referral partner updates.
- [ ] Review failed automations weekly.
- [ ] Review AI output errors monthly.
- [ ] Maintain a simple change log for major workflow updates.

### Audit Log Fields

| Field | Purpose |
|---|---|
| Workflow name | Identifies the automation or AI process. |
| Trigger event | Shows what caused the workflow to run. |
| Borrower or deal ID | Connects the event to the correct file. |
| AI prompt version | Tracks which prompt produced the output. |
| Output reviewed by | Shows who approved or edited the output. |
| Date/time reviewed | Creates a review record. |
| Final action taken | Shows whether message was sent, file was updated, or task was created. |
| Error notes | Captures issues for future fixes. |
| Follow-up required | Keeps unresolved items visible. |

---

# AI Safety Workflow by Use Case

## Borrower Intake Summary

| Safety Area | Rule |
|---|---|
| AI role | Summarize borrower profile and missing information. |
| Human role | Confirm accuracy and decide next step. |
| Data risk | Medium. Avoid unnecessary sensitive data. |
| Required disclaimer | Eligibility varies; lender review required. |
| Do not allow | Approval language or final lender recommendation. |

## Missing Document Follow-Up

| Safety Area | Rule |
|---|---|
| AI role | Draft clear reminders. |
| Human role | Approve templates and exceptions. |
| Data risk | Medium. Use secure upload links. |
| Required disclaimer | Documentation may be required. |
| Do not allow | Fake urgency, shame, or approval promises. |

## Deal Summary Draft

| Safety Area | Rule |
|---|---|
| AI role | Organize facts, strengths, concerns, questions. |
| Human role | Verify numbers and lender-fit considerations. |
| Data risk | High. Financial data involved. |
| Required disclaimer | Broker/lender review required. |
| Do not allow | Final approval decision, invented figures, quoted terms. |

## Referral Partner Update

| Safety Area | Rule |
|---|---|
| AI role | Draft status updates and next-step requests. |
| Human role | Confirm what can be shared. |
| Data risk | Medium to high. Borrower consent matters. |
| Required disclaimer | File is under review; eligibility varies. |
| Do not allow | Sharing sensitive borrower data unnecessarily. |

## Chatbot Lead Capture

| Safety Area | Rule |
|---|---|
| AI role | Collect intake fields and route lead. |
| Human role | Review file before product-fit or lender discussion. |
| Data risk | Medium. Avoid collecting unnecessary sensitive info. |
| Required disclaimer | Not a guarantee of approval. |
| Do not allow | “You qualify,” “you are approved,” or final terms. |

---

# Red Flag Phrase Review Sheet

Before publishing, sending, or automating any AI-generated content, scan for these phrases.

| Red Flag | Replace With |
|---|---|
| guaranteed approval | approval is not guaranteed |
| everyone qualifies | eligibility varies |
| instant approval | fast review may be available |
| no documents needed | documentation may be required |
| no credit matters ever | credit and other factors may be reviewed depending on the product |
| make $10K your first week | broker income varies and is not guaranteed |
| AI closes deals for you | AI may support follow-up, organization, and admin workflows |
| lender will approve this | lender review is required |
| you are approved | your file may be reviewed for available options |
| best lender for you | potential lender-fit consideration |
| exact rate | estimated or available terms must be verified by the lender |
| no risk | review the terms carefully and consult qualified professionals where appropriate |

---

# Pre-Launch AI Workflow Checklist

Use this before turning on any AI automation.

| Question | Yes/No | Fix Needed |
|---|---|---|
| Does this workflow have a clear purpose? |  |  |
| Is the AI role limited and documented? |  |  |
| Is the human review point clear? |  |  |
| Are sensitive data rules documented? |  |  |
| Are forbidden claims blocked? |  |  |
| Is the prompt approved and saved? |  |  |
| Is the output format structured? |  |  |
| Does the workflow avoid lender decisions? |  |  |
| Does the workflow avoid approval promises? |  |  |
| Is there an audit trail? |  |  |
| Is there a failure-handling process? |  |  |
| Has the workflow been tested with sample borrower scenarios? |  |  |

---

# Weekly AI Safety Audit

Run this once per week if AI is active in your broker workflow.

## Review These Items

- [ ] AI-generated borrower messages
- [ ] AI-generated CRM notes
- [ ] AI-generated deal summaries
- [ ] Missing document reminders
- [ ] Referral partner updates
- [ ] Chatbot transcripts
- [ ] Failed automation runs
- [ ] Borrower confusion or complaint patterns
- [ ] Lender feedback on submissions
- [ ] Prompt changes
- [ ] Team usage issues

## Questions to Ask

1. Did AI produce any inaccurate, incomplete, or misleading output?
2. Did any borrower-facing message imply approval, certainty, or guaranteed terms?
3. Did any workflow expose unnecessary sensitive borrower data?
4. Did any automation skip a required human review point?
5. Did any CRM stage change incorrectly?
6. Did any document status update without verification?
7. Did any referral partner receive too much borrower information?
8. Does any prompt need to be tightened?
9. Does any template need compliance-sensitive language added?
10. Should any workflow be paused until fixed?

---

# Broker Safety Note

AI can support funding agency operations by organizing intake information, drafting follow-up, summarizing documents, creating CRM notes, and improving pipeline visibility.

AI should not approve borrowers, guarantee funding, quote final terms, replace lender review, replace broker judgment, provide legal/tax/accounting advice, or handle sensitive borrower data without proper safeguards.

Funding eligibility varies by lender, product, borrower profile, revenue, documentation, and other review factors. Terms may change. Documentation may be required. Human review is required for compliance-sensitive communication, lender submissions, offer discussions, decline explanations, and any workflow involving sensitive borrower data.

When in doubt, slow down and review. The goal is not to let the robot drive drunk. The goal is to give the broker a cleaner dashboard, better notes, fewer dropped balls, and fewer avoidable mistakes.

---

# Bottom CTA

Want to build or automate your funding agency?

Join the #1 B2B Funding Platform:  
https://tally.so/r/mOe658

Explore the Moonshine Capital Partner Program:  
https://www.distilledfunding.com/partners
