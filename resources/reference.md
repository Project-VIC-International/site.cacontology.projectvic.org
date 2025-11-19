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
@prefix cacontology: <https://cacontology.projectvic.org#> .
@prefix cacontology-core: <https://cacontology.projectvic.org/core#> .

:investigation-001 a cacontology-core:CACInvestigation ;
    cacontology-core:hasReport :report-001 ;
    cacontology-core:status "active" .
```

## Standards and Specifications

### Related Standards

- **CASE Ontology** - [caseontology.org](https://caseontology.org)
- **UCO** - Unified Cyber Ontology
- **gUFO** - Unified Foundational Ontology
- **SHACL** - Shapes Constraint Language for validation
- **RDF/OWL** - Resource Description Framework and Web Ontology Language

## Guides and Tutorials

### Getting Started

- [Getting Started Guide](/getting-started) - Step-by-step introduction
- [Examples](/examples) - Real-world examples and use cases

### Technical Guides

- Module-specific guides in repository documentation
- SPARQL query examples in `example_SPARQL_queries/` directory
- Validation guides in repository

## API Reference

### Python Tools

Python API documentation (when available) in the repository.

### SPARQL Endpoints

SPARQL query examples and patterns available in the repository.

## Related Resources

- [Downloads](/resources/downloads) - Ontology files and software
- [Libraries](/resources/libraries) - Software libraries and tools
- [Resources Overview](/resources) - All resources

