---
layout: default
title: Model Documents with AI
permalink: /developers/ai-modeling
---

# Model documents with AI (agent prompt)

You do not need to be an ontologist to use CAC Ontology.

If you can read an information resource (press release, report, policy memo, tool export, etc.), you can use the CAC Ontology workflow to translate it into:

- a connected graph in Turtle (`.ttl`)
- investigator-focused queries in SPARQL (`.rq`)
- and a set of artifacts that show how the translation was done (provenance + evidence pointers)

This workflow is guided by a structured prompt (the "CAC Ontology Enhancement Agent Prompt") maintained in the main CAC Ontology repository:

- Canonical prompt: https://github.com/Project-VIC-International/CAC-Ontology/blob/main/agent.md
- Latest changes: https://github.com/Project-VIC-International/CAC-Ontology/blob/main/CHANGELOG.md

## The plain-language idea

CAC Ontology is a way to write the language we already use in investigations as a graph:

- **Namespaces**: topic-specific vocabularies (a "subdomain of language")
- **Classes**: concepts (things you can talk about)
- **Properties**: attributes and relationships (how concepts are described and connected)
- **SHACL**: business rules (checks that your graph follows the intended "grammar")

CAC Ontology extends the Linux Foundation Cyber Domain Ontology ecosystem (UCO + CASE), which helps different tools and organizations exchange investigation information in a semantically consistent way:

- Cyber Domain Ontology: https://cyberdomainontology.org/

## What you get out (the deliverables)

When you run the workflow on a source document, you should end up with a small set of outputs that are easy to share and easy to audit:

- **Source metadata**: where the document came from (URL or file path), collection time, collector identity
- **Hashes**: cryptographic hashes so you can prove which exact source was used
- **Normalized text**: a stable plain-text version used for extraction
- **A minimal "skeleton" graph**: UUID-only nodes for the source + collection/provenance scaffolding
- **Example knowledge graph (`.ttl`)**: the modeled entities, actions, evidence, and relationships
- **SPARQL analytics (`.rq`)**: 10-15 explainable queries that run against the example graph
- **Validation results**: SHACL conformance output (what passed, what failed)

The goal is that someone else can look at your `.ttl` / `.rq` and understand:

- what was modeled
- what source evidence supports it
- how confident the extraction was

## How provenance stays connected (why this matters)

In CAC Ontology, modeled claims should be explainable. That means the graph should retain enough provenance to answer:

- What source said this?
- Which step produced this triple?
- Who/what performed the extraction?

The canonical prompt describes concrete patterns (for example, using UCO/CASE `Action` + `ProvenanceRecord`) so that:

- graphs are fully connected (no isolated nodes)
- assertions have evidence pointers and confidence
- results can be validated with SHACL

## Practical ways to start

- Start with one public document (single-document mode), produce one example `.ttl` + `.rq`.
- Use SHACL to validate before sharing.
- If the document reveals missing concepts, propose updates via GitHub Issues or PRs.

## Links

- Prompt: https://github.com/Project-VIC-International/CAC-Ontology/blob/main/agent.md
- Examples (canonical): https://github.com/Project-VIC-International/CAC-Ontology/tree/main/examples_knowledge_graphs
- SPARQL suites (canonical): https://github.com/Project-VIC-International/CAC-Ontology/tree/main/example_SPARQL_queries
- Validation tooling: https://github.com/Project-VIC-International/CAC-Ontology/tree/main/testing

