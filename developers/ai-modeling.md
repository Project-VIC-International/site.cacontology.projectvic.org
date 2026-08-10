---
layout: default
title: Model with AI
permalink: /developers/ai-modeling
---

# Model investigation data with AI

You do not need to be an ontologist to use CAC Ontology.

The recommended path for AI-assisted modeling is the **[CASE/UCO SDK](https://github.com/vulnmaster/CASE-UCO-SDK)** and its **MCP server**. An LLM-powered agent can discover ontology classes, apply modeling recipes, validate graphs, and propose ontology extensions — covering cyber-domain investigation data and adjacent domains.

If you can read an information resource (press release, report, policy memo, court filing, tool export, etc.), you can translate it into a validated CASE/UCO/CAC graph with provenance that other people can audit and reuse.

## CASE/UCO SDK (recommended)

Repository: https://github.com/vulnmaster/CASE-UCO-SDK

The SDK helps teams model crimes against children investigation data into validated graphs quickly. It includes:

- **Language bindings** for **Python**, **C#**, **Java**, and **Rust**
- An **MCP server** for LLM-assisted ontology discovery, investigation routing, modeling recipes, document processing, SHACL + concept-coverage validation, extension design, and change proposals
- **Dozens of modeling recipes** for forensic workflows and investigation patterns
- Bindings and support for **CASE**, **UCO**, **CAC Ontology**, and **SOLVE-IT**

CAC Ontology v3.1.0 directs AI-assisted modeling through this MCP-first workflow.

### Getting started with the MCP server

1. Clone or install the [CASE/UCO SDK](https://github.com/vulnmaster/CASE-UCO-SDK).
2. Configure the MCP server in your AI coding assistant (Cursor, Claude Code, and similar tools).
3. For binary sources, run `process_document_file`; then route with `route_investigation_content` / `route_cac_content`, build the investigation graph from recipes, and call `validate_graph`.
4. Review provenance, evidence pointers, and validation results before sharing.

## The plain-language idea

CAC Ontology is a way to write the language we already use in investigations as a graph:

- **Namespaces**: topic-specific vocabularies (a "subdomain of language")
- **Classes**: concepts (things you can talk about)
- **Properties**: attributes and relationships (how concepts are described and connected)
- **SHACL**: business rules (checks that your graph follows the intended "grammar")

CAC Ontology extends the Linux Foundation Cyber Domain Ontology ecosystem (UCO + CASE **1.5.0**), which helps different tools and organizations exchange investigation information in a semantically consistent way:

- Cyber Domain Ontology: https://cyberdomainontology.org/

## What you get out (the deliverables)

The CASE/UCO SDK MCP workflow is **graph-first**. For a source document, the usual outputs are:

1. **Bounded source graph (JSON-LD)** from `process_document_file`
   - Source file as a CASE/UCO observable with **hashes** and collection/extraction **provenance** (`InvestigativeAction`, related facets)
   - Extracted text and span annotations written beside the graph (for example `extracted-content.json` / `annotations.jsonld`)
   - High-confidence extracted entities mapped to core CASE/UCO types for human review
2. **Investigation / domain graph (JSON-LD or Turtle)** built by the agent from recipes and routing guidance
   - Modeled entities, actions, evidence, relationships, and CAC concepts where applicable
   - Evidence pointers and provenance so claims stay explainable
   - Optionally a **reproducible SDK builder** (Python/C#/Java/Rust) that regenerates the graph
3. **Validation report** from `validate_graph`
   - CASE/UCO **SHACL** conformance plus closed-world **concept-coverage** checks (and CAC/extension profiles when selected)
4. **Run summary** for handoff
   - Inputs and trust status, matched recipes/extensions, ontology versions, validation/critic status, unresolved gaps, and human-review items

What is **not** a default SDK deliverable anymore:

- A separate UUID-only “skeleton” file — provenance scaffolding lives **inside** the JSON-LD graph produced by document processing and graph build
- A mandatory SPARQL analytics suite (`.rq`) for every document — SPARQL still appears for **competency checks**, change proposals, and optional CAC Ontology example suites when you contribute to the ontology repository

When the task is consequential, also run the SDK **critic review** loop before treating the graph as final.

The goal is that someone else can look at your graph and understand:

- what was modeled
- what source evidence supports it
- whether it validated against CASE/UCO (and CAC when used)

## How provenance stays connected (why this matters)

In CAC Ontology, modeled claims should be explainable. That means the graph should retain enough provenance to answer:

- What source said this?
- Which step produced this triple?
- Who/what performed the extraction?

Use UCO/CASE patterns (for example, `Action` + `ProvenanceRecord`) so that:

- graphs are fully connected (no isolated nodes)
- assertions have evidence pointers and confidence
- results can be validated with SHACL

## Practical ways to start

- Prefer the CASE/UCO SDK MCP server for discovery, recipes, document processing, and validation.
- Start with one public document: `process_document_file` → route → build investigation graph → `validate_graph`.
- Do not share until validation conforms (or unresolved warnings are explicitly accepted).
- If the document reveals missing concepts, use the SDK change-proposal / extension workflow or open a GitHub Issue/PR.
- When contributing an example back to CAC Ontology, you may also add a focused SPARQL analytics suite — that is optional, not required for every SDK modeling run.

## Links

- CASE/UCO SDK: https://github.com/vulnmaster/CASE-UCO-SDK
- CAC Ontology v3.1.0 release: https://github.com/Project-VIC-International/CAC-Ontology/releases/tag/v3.1.0
- Repository agent guide (supporting material): https://github.com/Project-VIC-International/CAC-Ontology/blob/main/agent.md
- Examples (canonical): https://github.com/Project-VIC-International/CAC-Ontology/tree/main/examples_knowledge_graphs
- SPARQL suites (canonical): https://github.com/Project-VIC-International/CAC-Ontology/tree/main/example_SPARQL_queries
- Validation tooling: https://github.com/Project-VIC-International/CAC-Ontology/tree/main/testing
