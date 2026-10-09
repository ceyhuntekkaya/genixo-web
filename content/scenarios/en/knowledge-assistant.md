---
title: "A company knowledge assistant that cites its sources and says “I don't know”"
metaTitle: "Company Knowledge Assistant with RAG"
description: "A knowledge assistant answers staff questions from your documents, cites the source and respects permissions. How RAG works, its limits, what we measure."
translationKey: "scenario-knowledge-assistant"
type: "scenario"
author: "ceyhun-tekkaya"
datePublished: "2026-10-09"
dateModified: "2026-10-09"
summary: "A company knowledge assistant answers employees' questions using only your documents, shows the source of every answer and filters results by each user's permissions. When the documents don't contain the answer, it says so."
relatedServices: ["ai-automation"]
order: 5
card:
  today: "New staff ask senior colleagues where things are and how things work."
  withAi: "Answers come from your documents, with sources, filtered by each user's permissions."
  measure: "Answer accuracy on a test set, the share of “I don't know” answers and questions to senior staff."
cta:
  title: "Pick the 30 questions your team asks most."
  lead: "We check whether your documents can answer them and tell you in the first call what an assistant could and couldn't do."
faq:
  - q: "What is a company knowledge assistant?"
    a: "It is a chat tool that answers employees' questions using your own documents, such as procedures, product information and policies, and shows which document each answer came from."
  - q: "What is RAG?"
    a: "Retrieval-augmented generation. The system first searches your documents for relevant passages, then a language model writes an answer based only on those passages, with references."
  - q: "Can it answer questions about things not in our documents?"
    a: "It shouldn't, and we design it not to. When the documents don't contain the answer, the assistant says it doesn't know instead of guessing."
  - q: "How long does a pilot take?"
    a: "A pilot starts with one document collection and one team, with a test set of real questions and correct answers. Typical duration and fee are listed on the pricing page."
  - q: "What does it cost?"
    a: "Cost depends on the volume and format of documents, permission rules and where the model runs. See the pricing page."
sources:
  - title: "Brynjolfsson, Li & Raymond, Generative AI at Work (NBER Working Paper 31161; Quarterly Journal of Economics, 2025)"
    url: "https://www.nber.org/papers/w31161"
relatedCases: []
draft: false
---

## Today

Procedures, product sheets and policies are spread across shared folders, email threads and people's heads. New employees ask the same experienced colleagues the same questions. Answers depend on who you ask, and outdated documents are still in circulation.

## With AI

1. **Documents are collected.** From shared drives, document systems or wikis you choose.
2. **Documents are prepared.** Text is extracted, split into passages and indexed for search. Outdated versions are marked or excluded.
3. **Permissions are applied.** Each user only gets answers from documents they are allowed to see.
4. **A question is asked.** The system finds the most relevant passages.
5. **An answer is written from those passages only.** The answer shows its sources so the user can check them.
6. **“I don't know” is a valid answer.** When the passages don't contain the answer, the assistant says so.
7. **Feedback is kept.** Wrong or missing answers go into the test set and point to documents that need updating.

## Technology

Document extraction and indexing, vector search, document-level permission checks and a language model that answers from retrieved passages. The model can run on your own servers with an open model, in your cloud account or through an API provider. See [data security and KVKK](/data-security).

## Why it matters most for new staff

In a study of 5,179 customer support agents, access to a generative AI assistant increased the number of issues resolved per hour by 14% on average, and by 34% for novice and low-skilled workers, with minimal effect on experienced ones (Brynjolfsson, Li and Raymond). That study measured support work, not internal knowledge assistants, but it points to where such tools tend to help most: people who don't yet know where things are.

## What we measure

In a pilot we measure:

- answer accuracy on a test set of real questions with correct answers;
- the share of answers with a correct source;
- how often the assistant correctly says it doesn't know;
- questions that still go to senior staff.

The baseline and the target are written down before the pilot starts.

## Limits

- Scanned PDFs and complex tables reduce quality.
- Outdated or contradictory documents produce wrong answers. Document cleanup is often part of the work.
- Calculations are not left to the model. If an answer needs a number, it comes from a system, not from generated text.
- Instructions hidden inside documents (prompt injection) are a known risk; the assistant has read-only access and limited tools.

## The pilot

We start with one document collection and one team, build a test set of real questions and report accuracy every week. Typical duration and fee: [[TODO-023]].

## Our experience with this scenario

[[TODO-043]]

## Next step

Start with the [AI readiness assessment](/ai-readiness-assessment), or see [pricing and timelines](/pricing).
