---
title: "Order, delivery note and invoice matching that shows only the exceptions"
metaTitle: "AI Order, Delivery and Invoice Matching"
description: "Orders, delivery notes and invoices are extracted and matched by rules. Your accounting team reviews only the records that don't match. How it works."
translationKey: "scenario-order-matching"
type: "scenario"
author: "ceyhun-tekkaya"
datePublished: "2026-10-09"
dateModified: "2026-10-09"
summary: "Order matching extracts the data from orders, delivery notes and invoices and matches them with deterministic rules. Differences are classified, and your accounting team reviews only the records that don't match."
relatedServices: ["ai-automation", "custom-software"]
order: 3
card:
  today: "Accounting compares orders, delivery notes and invoices line by line."
  withAi: "Documents are matched by rules, differences are classified and only exceptions go to a person."
  measure: "Records reviewed by hand, exception rate and month-end closing time."
cta:
  title: "Show us one month of mismatches."
  lead: "We look at where your documents disagree and tell you in the first call how much of the matching could be automated safely."
faq:
  - q: "What is three-way matching?"
    a: "It is checking that the order, the delivery note and the invoice agree on items, quantities and prices before an invoice is approved."
  - q: "Where does AI help, and where doesn't it?"
    a: "AI helps read documents that arrive in different formats and classify why records differ. The matching itself is done by deterministic rules in code, so the result is predictable and explainable."
  - q: "How long does a pilot take?"
    a: "A pilot starts with one supplier group or one document flow and is measured against the current manual effort. Typical duration and fee are listed on the pricing page."
  - q: "What are the risks?"
    a: "Inconsistent key fields, such as order numbers written differently on each document, are the main risk. Part of the pilot is defining reliable matching keys."
  - q: "What does it cost?"
    a: "Cost depends on document volume, the number of formats and the ERP integration. See the pricing page for the assessment and pilot offers."
relatedCases: []
draft: false
---

## Today

At the end of every week or month, someone in accounting puts the order, the delivery note and the invoice side by side and checks items, quantities and prices. Most records match. The few that don't are the ones that matter, but finding them means reading everything.

## With AI

1. **Documents are collected.** Orders from your system, delivery notes and invoices from email, e-invoice files or scans.
2. **Data is extracted.** Structured files are read directly; PDFs and scans are read with OCR and a language model.
3. **Records are matched by rules.** Code matches documents on order number, supplier, items, quantities and prices, with tolerances you define.
4. **Differences are classified.** For records that don't match, the system suggests a reason: missing delivery, price difference, partial shipment, duplicate invoice.
5. **People review the exceptions.** Accounting sees only the records that don't match, with the documents and the suggested reason side by side.
6. **Decisions are recorded.** Every resolution is kept, which improves the classification over time.

## Technology

Data extraction for unstructured documents, deterministic matching rules written in code, a classifier for differences, and an integration with your ERP and e-invoice data. This scenario usually builds on clean data from existing systems; when that data is missing, it starts as a [custom software](/custom-software) project.

## What we measure

In a pilot we measure:

- the number of records reviewed by hand, before and after;
- the share of records matched automatically and later found to be wrong;
- the time needed to close the period;
- the share of differences classified correctly.

The baseline and the target are written down before the pilot starts.

## Limits

- If order numbers and product codes are inconsistent across documents, matching rules have to be defined first.
- The system flags and explains differences. Deciding whether to pay remains with your team.
- Matching tolerances are a business decision, made by you.

## The pilot

We start with one document flow or supplier group, run matching in parallel with your current process and compare the results every week. Typical duration and fee: [[TODO-023]].

## Our experience with this scenario

[[TODO-041]]

## Next step

Start with the [AI readiness assessment](/ai-readiness-assessment), or see [pricing and timelines](/pricing).
