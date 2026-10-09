---
title: "Invoice and document processing, approved by your accountant"
metaTitle: "AI Invoice and Document Processing"
description: "AI reads invoices and delivery notes, extracts the fields and opens a draft ERP record. Uncertain fields go to your team. How it works and what we measure."
translationKey: "scenario-document-processing"
type: "scenario"
author: "ceyhun-tekkaya"
datePublished: "2026-10-09"
dateModified: "2026-10-09"
summary: "AI document processing reads invoices and delivery notes, extracts the fields your ERP needs and prepares a draft record. Fields the system is unsure about go to a person, and nothing is posted until your team approves it."
relatedServices: ["ai-automation"]
order: 1
card:
  today: "Invoices and delivery notes are typed into the ERP by hand."
  withAi: "Fields are extracted, uncertain ones go to a person, and a draft record is opened."
  measure: "Time per document, correction rate and the share sent to manual review."
cta:
  title: "Bring a month of invoices."
  lead: "We look at your document types, scan quality and ERP together, and tell you in the first call whether a pilot makes sense."
faq:
  - q: "What is AI document processing?"
    a: "It is a system that reads documents such as invoices, delivery notes or forms, extracts the fields you need and prepares a draft record. A person checks the fields the system is unsure about before the record is posted."
  - q: "How does it work with our ERP?"
    a: "Extracted fields are mapped to your ERP's structure and sent as a draft through its API or an import file. Nothing is posted without approval."
  - q: "How long does a pilot take?"
    a: "A pilot covers one or two document types and is measured against a baseline taken before it starts. Typical duration and fee are listed on the pricing page."
  - q: "What are the risks?"
    a: "Poor scans, handwritten notes and unusual layouts lower extraction quality. That is why fields below a confidence threshold always go to a person, and the error rate is measured every week."
  - q: "What does it cost?"
    a: "Cost depends on the number of document types, volume, scan quality and the ERP integration. The pricing page explains the assessment and pilot offers."
relatedCases: []
draft: false
---

## Today

Documents arrive by email, as PDFs, as photos from the field or on paper. Someone opens each one, finds the supplier, date, amounts and line items, and types them into the ERP. Errors are found later, usually at month end, when amounts don't reconcile. When volume rises, the backlog grows with it.

## With AI

1. **The document arrives.** From a shared mailbox, a folder or a scan.
2. **Text is read.** OCR turns scans and photos into text; digital PDFs are read directly.
3. **Fields are extracted.** A language model identifies the fields you defined, such as supplier, tax number, date, line items and totals, and gives each one a confidence score.
4. **Rules check the result.** Code verifies that line totals add up, that the tax number format is valid and that the supplier exists in your records. The model doesn't do the arithmetic.
5. **A person reviews.** Fields below the confidence threshold, and documents that fail a rule, are shown to your team with the original next to them.
6. **A draft record is opened.** Approved data is sent to the ERP as a draft.
7. **Corrections are kept.** Every correction is added to the test set, so future changes are checked against real mistakes.

## Technology

OCR for scanned documents, a language model for field extraction, rule checks written in code, and an integration with your ERP. The model can run on your own servers with an open model served through Ollama, in your cloud account, or through an API provider. Where it runs depends on your data rules; see [data security and KVKK](/data-security).

## What we measure

We don't publish expected savings. In a pilot we measure, on your documents:

- time spent per document, before and after;
- the share of fields corrected by a person;
- the share of documents sent entirely to manual review;
- errors found after posting.

The baseline and the target are written down before the pilot starts.

## Limits

- Poor scans, handwriting and stamps over text reduce quality. Those documents go to a person.
- New suppliers with unusual layouts may need review until enough examples exist.
- The system prepares records; it does not decide whether an invoice should be paid.

## The pilot

A pilot starts with one or two document types. We build a test set from your recent documents with the correct values, run the system on new documents in parallel with your current process and report the numbers every week. Typical duration and fee: [[TODO-023]].

## Our experience with this scenario

[[TODO-039]]

## Next step

The [AI readiness assessment](/ai-readiness-assessment) tells you whether document processing is the right place to start. For cost drivers, see [pricing and timelines](/pricing).
