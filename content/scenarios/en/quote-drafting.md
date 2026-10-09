---
title: "Quote drafting with AI, approved by the salesperson"
metaTitle: "AI Quote Drafting with Sales Approval"
description: "AI reads the request, matches items to your catalog and drafts the quote. Prices are calculated by code and every quote is approved by your salesperson."
translationKey: "scenario-quote-drafting"
type: "scenario"
author: "ceyhun-tekkaya"
datePublished: "2026-10-09"
dateModified: "2026-10-09"
summary: "AI-assisted quote drafting reads a customer request, matches the items to your catalog, has prices calculated by your pricing rules and prepares a draft. The salesperson corrects and approves every quote before it is sent."
relatedServices: ["ai-automation"]
order: 2
card:
  today: "Each quote is rebuilt from old quotes, the price list and memory."
  withAi: "Items are matched to the catalog, prices are calculated by code and a draft goes to the salesperson."
  measure: "Draft time, correction rate and time until the customer receives the quote."
cta:
  title: "Bring your last 20 quotes."
  lead: "We review them with you and tell you in the first call whether this approach could work for your catalog."
faq:
  - q: "What is AI quote drafting?"
    a: "It is a system that reads a quote request, matches the requested items to your catalog, applies your pricing rules and prepares a draft quote. A salesperson reviews, corrects and approves it before it is sent."
  - q: "Does the AI decide the price?"
    a: "No. Prices, discounts and totals are calculated by rules in code or taken from your ERP. The language model only reads the request, matches items and writes the text."
  - q: "How long does a pilot take?"
    a: "A pilot usually starts with one product group, using recent quotes as a test set, and is measured every week. Typical duration and fee are listed on the pricing page."
  - q: "What are the risks?"
    a: "Items that are not in the catalog, vague requests and inconsistent product descriptions cause wrong matches. Those items are flagged for the salesperson, and the correction rate is tracked."
  - q: "What does it cost?"
    a: "Cost depends on catalog size, the pricing rules, data cleanup and the CRM or ERP integration. The pricing page explains the assessment and pilot offers."
relatedCases: []
draft: false
---

## Today

A request arrives by email or phone. The salesperson searches old quotes, opens the price list, tries to remember which discount applies to this customer and builds the quote in Excel or Word. The result depends on who prepares it. Quotes take long, prices are inconsistent, and the company relies on one or two experienced people.

## With AI

1. **The request is read.** Email text, attachments or a form are turned into a list of requested items and quantities.
2. **Items are matched to your catalog.** Vector search finds the closest catalog entries, including different names for the same product.
3. **Prices are calculated by code.** Your price list, customer-specific discounts and minimums are applied by a pricing service, never by the language model.
4. **A draft is written.** Descriptions, terms and the cover note are drafted from your templates and past quotes.
5. **The salesperson approves.** Uncertain matches and items not found in the catalog are highlighted. The salesperson corrects and approves the quote.
6. **Corrections are kept.** Every correction is added to the test set.

## Technology

Vector search over the catalog and past quotes, a pricing service written in code, a language model for reading requests and drafting text, and an integration with your CRM or ERP. The model can run on your own servers with an open model, so customer data stays inside the company, or in your cloud account. See [data security and KVKK](/data-security).

## What we measure

The first version prepares most of the draft, not the whole quote. In a pilot we measure:

- time to produce a draft, before and after;
- the share of lines the salesperson corrects;
- time until the customer receives the quote;
- pricing errors found after sending.

The baseline and the target are written down before the pilot starts.

## Limits

- Items not in the catalog go to a person.
- In the first weeks the correction rate can be high; it is measured, not hidden.
- Inconsistent catalog descriptions reduce match quality. Cleaning them is sometimes part of the pilot.

## The pilot

We start with one product group. A test set is built from recent quotes, the system runs alongside your current process and results are reported every week. Typical duration and fee: [[TODO-023]].

## Our experience with this scenario

[[TODO-040]]

## Next step

The [AI readiness assessment](/ai-readiness-assessment) checks whether quote drafting is the right first process. Cost drivers are explained on [pricing and timelines](/pricing).
