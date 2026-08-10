---
layout: default
title: Model Documents with AI
permalink: /developers/ai-modeling
---

# Model investigation data with AI

You do not need to be an ontologist to use CAC Ontology.

The recommended path for AI-assisted modeling is the **[CASE/UCO SDK](https://github.com/vulnmaster/CASE-UCO-SDK)** and its **MCP server**. An LLM-powered agent can discover ontology classes, apply modeling recipes, validate graphs, and propose ontology extensions — covering cyber-domain investigation data and adjacent domains.

If you can read an information resource (press release, report, policy memo, tool export, etc.), you can translate it into:

- a connected graph in Turtle (`.ttl`) or CASE/UCO JSON-LD
- investigator-focused queries in SPARQL (`.rq`)
- and artifacts that show how the translation was done (provenance + evidence pointers)

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
3. Ask the agent to route investigation content, apply a recipe, and validate the resulting graph.
4. Review the graph for provenance, evidence pointers, and SHACL conformance before sharing.

## The plain-language idea

CAC Ontology is a way to write the language we already use in investigations as a graph:

- **Namespaces**: topic-specific vocabularies (a "subdomain of language")
- **Classes**: concepts (things you can talk about)
- **Properties**: attributes and relationships (how concepts are described and connected)
- **SHACL**: business rules (checks that your graph follows the intended "grammar")

CAC Ontology extends the Linux Foundation Cyber Domain Ontology ecosystem (UCO + CASE **1.5.0**), which helps different tools and organizations exchange investigation information in a semantically consistent way:

- Cyber Domain Ontology: https://cyberdomainontology.org/

## What you get out (the deliverables)

When you run the workflow on a source document, you should end up with a small set of outputs that are easy to share and easy to audit:

- **Source metadata**: where the document came from (URL or file path), collection time, collector identity
- **Hashes**: cryptographic hashes so you can prove which exact source was used
- **Normalized text**: a stable plain-text version used for extraction
- **A minimal "skeleton" graph**: UUID-only nodes for the source + collection/provenance scaffolding
- **Example knowledge graph (`.ttl` / JSON-LD)**: the modeled entities, actions, evidence, and relationships
- **SPARQL analytics (`.rq`)**: explainable queries that run against the example graph
- **Validation results**: SHACL conformance and concept-coverage checks

The goal is that someone else can look at your graph and understand:

- what was modeled
- what source evidence supports it
- how confident the extraction was

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

- Prefer the CASE/UCO SDK MCP server for discovery, recipes, and validation.
- Start with one public document, produce one example graph + SPARQL suite.
- Validate before sharing.
- If the document reveals missing concepts, use the SDK change-proposal workflow or open a GitHub Issue/PR.

## Links

- CASE/UCO SDK: https://github.com/vulnmaster/CASE-UCO-SDK
- CAC Ontology v3.1.0 release: https://github.com/Project-VIC-International/CAC-Ontology/releases/tag/v3.1.0
- Repository agent guide (supporting material): https://github.com/Project-VIC-International/CAC-Ontology/blob/main/agent.md
- Examples (canonical): https://github.com/Project-VIC-International/CAC-Ontology/tree/main/examples_knowledge_graphs
- SPARQL suites (canonical): https://github.com/Project-VIC-International/CAC-Ontology/tree/main/example_SPARQL_queries
- Validation tooling: https://github.com/Project-VIC-International/CAC-Ontology/tree/main/testing
