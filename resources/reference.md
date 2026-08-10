---
layout: default
title: Reference Materials
permalink: /resources/reference
---

# Reference Materials

Reference documentation, guides, and materials for working with CAC Ontology.

## Documentation

### Online Documentation

- **[Entities A-Z](https://cacontology.projectvic.org/entities-az.html)** - Complete alphabetical reference of all ontology entities
- **[Ontology Documentation](/ontology)** - Technical documentation and module information
- **[Getting Started Guide](/getting-started)** - Introduction and quick start

### Repository Documentation

Comprehensive documentation in the [GitHub repository](https://github.com/Project-VIC-International/CAC-Ontology):

- **`docs/architecture.md`** - Complete system architecture and module relationships
- **`docs/design.md`** - Design principles and technical specifications
- **`docs/user_doc.md`** - User documentation and examples
- **`docs/PRD.md`** - Product requirements and specifications
- **`docs/glossary.md`** - Terminology and acronyms

## Quick Reference

### Namespace Structure

- **Base Namespace**: `https://cacontology.projectvic.org`
- **Module Namespaces**: `https://cacontology.projectvic.org/{module-name}#`
- **Prefix Pattern**: `cacontology-{module-name}:`

### Example Usage

```turtle
@prefix cac-core: <https://cacontology.projectvic.org/core#> .
@prefix cacontology: <https://cacontology.projectvic.org#> .

# Classes and properties use the cacontology: prefix;
# spine types (Entity, Event, Phase, Role, etc.) use cac-core:
:investigation-001 a cacontology:CACInvestigation ;
    cacontology:hasReport :report-001 ;
    cacontology:status "active" .

:phase-001 a cacontology:InitialPhase ;      # inherits cac-core:Phase
    rdfs:label "Cybertip Triage" .
```

## Standards and Specifications

### Related Standards

- **CASE Ontology** - [caseontology.org](https://caseontology.org) (CAC Ontology v3.1.0 pins **CASE/UCO 1.5.0**)
- **UCO** - Unified Cyber Ontology
- **gUFO** - Unified Foundational Ontology (pinned to **1.0.0** in v3.1.0)
- **SHACL** - Shapes Constraint Language for validation
- **RDF/OWL** - Resource Description Framework and Web Ontology Language

## Guides and Tutorials

### Getting Started

- [Getting Started Guide](/getting-started) - Step-by-step introduction
- [Model with AI](/developers/ai-modeling) - CASE/UCO SDK MCP workflow
- [Examples](/examples) - Real-world CAC Ontology example suites

### Technical Guides

- [CASE/UCO SDK](https://github.com/vulnmaster/CASE-UCO-SDK) - multi-language bindings, recipes, and MCP server
- Module-specific guides in repository documentation
- SPARQL query examples in `example_SPARQL_queries/` directory
- Validation guides in repository

## API Reference

### CASE/UCO SDK

Typed builders and validation APIs for Python, C#, Java, and Rust:
https://github.com/vulnmaster/CASE-UCO-SDK

### Python Tools

Additional Python tooling is also available in the CAC Ontology repository.

### SPARQL Endpoints

SPARQL query examples and patterns available in the repository.

## Related Resources

- [Downloads](/resources/downloads) - Ontology files and software
- [Libraries](/resources/libraries) - Software libraries and tools
- [Resources Overview](/resources) - All resources

