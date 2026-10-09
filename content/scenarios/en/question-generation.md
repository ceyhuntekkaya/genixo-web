---
title: "Question generation from teaching material, approved by teachers"
metaTitle: "AI Question Generation for Education"
description: "AI drafts questions from your course material and the teacher edits and approves each one. How question generation works, its limits and what we measure."
translationKey: "scenario-question-generation"
type: "scenario"
author: "ceyhun-tekkaya"
datePublished: "2026-10-09"
dateModified: "2026-10-09"
summary: "AI question generation drafts exam and practice questions from your course material, linked to the passage they come from. A teacher edits and approves every question before students see it."
relatedServices: ["ai-automation", "product-studio"]
order: 6
card:
  today: "Teachers write question banks by hand for every course and level."
  withAi: "Questions are drafted from course material, and the teacher edits and approves each one."
  measure: "Share approved without edits, preparation time per question set and error reports."
cta:
  title: "Bring one unit of course material."
  lead: "We look at the format, the question types you need and your review process, and tell you in the first call what a pilot could produce."
faq:
  - q: "What is AI question generation?"
    a: "It is a system that reads course material, such as PDFs, slides or texts, and drafts questions linked to the passage they are based on. A teacher reviews, edits and approves each question."
  - q: "Can students use the questions without a teacher's review?"
    a: "We don't recommend it. Generated questions can be ambiguous or wrong, so every question goes through teacher approval before it is published."
  - q: "Which question types are supported?"
    a: "Multiple choice, true or false, short answer and open-ended questions are common. The types and difficulty levels are defined with your teachers during the pilot."
  - q: "How long does a pilot take?"
    a: "A pilot starts with one course or unit and is measured against the time teachers spend today. Typical duration and fee are listed on the pricing page."
  - q: "What does it cost?"
    a: "Cost depends on material formats, question types, languages and the platform the questions go to. See the pricing page."
relatedCases: []
draft: false
---

## Today

Teachers and content teams write questions by hand for every unit, level and exam. Building a large question bank takes weeks, and keeping it consistent across authors is hard.

## With AI

1. **Material is uploaded.** PDFs, slides or texts for one unit.
2. **Content is prepared.** Text is extracted and split into passages; the learning objectives are attached where available.
3. **Questions are drafted.** A language model drafts questions of the requested type and level, each linked to its source passage.
4. **The teacher reviews.** Each question is shown next to its source. The teacher edits, approves or rejects it.
5. **Approved questions are published.** They go to your question bank or learning platform.
6. **Edits are kept.** Teacher edits are used to improve prompts and checks.

## Technology

Document extraction, a language model for drafting, retrieval to link each question to its source, and a review screen for teachers. Formulas and tables in PDFs need special handling; for that content, a “suggest and edit” flow works better than full generation.

## What we measure

In a pilot we measure:

- the share of questions approved without edits;
- the share rejected, and why;
- teacher time per approved question, before and after;
- errors reported after publication.

The baseline and the target are written down before the pilot starts.

## Limits

- Formulas, diagrams and tables in PDFs are the hardest part.
- Questions can be technically correct but pedagogically weak. The teacher decides.
- Difficulty levels need calibration with real student results over time.

## The pilot

We start with one course or unit and one question type, measure approval rates every week and adjust with your teachers. Typical duration and fee: [[TODO-023]].

## Our experience with this scenario

[[TODO-044]]

## Next step

Start with the [AI readiness assessment](/ai-readiness-assessment), or see the [product studio](/product-studio) if the questions are part of a learning product.
