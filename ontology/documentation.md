---
layout: default
title: Documentation
permalink: /ontology/documentation
---

# Complete Documentation

Comprehensive technical documentation for the CAC Ontology Family.

## Online Documentation

### Entity Reference

- **[Entities A-Z](https://project-vic-international.github.io/cacontology.projectvic.org/entities-az.html)** - Complete alphabetical reference of all ontology entities (classes, properties, individuals)

This comprehensive reference provides detailed information about every class, property, and individual defined in the CAC Ontology Family.

## Repository Documentation

The [CAC-Ontology GitHub repository](https://github.com/Project-VIC-International/CAC-Ontology) contains extensive documentation:

### Core Documentation Files

- **`docs/architecture.md`** - Complete system architecture and module relationships
  - Module organization and dependencies
  - Design patterns and best practices
  - Integration with CASE and UCO

- **`docs/design.md`** - Design principles and technical specifications
  - Ontology design decisions
  - Naming conventions
  - Modeling patterns

- **`docs/user_doc.md`** - User documentation and examples
  - Getting started guide
  - Common use cases
  - Best practices

- **`docs/PRD.md`** - Product requirements and specifications
  - Feature requirements
  - Use case definitions
  - Functional specifications

- **`docs/glossary.md`** - Terminology and acronyms
  - Domain-specific terms
  - Acronym definitions
  - Cross-references

## Module-Specific Documentation

Each ontology module includes inline documentation in RDF/OWL format:

- Class definitions with `rdfs:comment` annotations
- Property descriptions and usage guidelines
- Example usage patterns

## Examples

The repository includes 30+ real-world example files:

- Located in the `examples/` directory
- Based on actual law enforcement cases
- Demonstrating practical applications
- See the [Examples Gallery](/examples) for more information

## SPARQL Queries

Example SPARQL queries are available in:

- `example_SPARQL_queries/` directory
- Analytics and query examples
- Common investigation patterns

## Validation Documentation

SHACL validation documentation:

- Validation shapes for all major modules
- Business rule definitions
- Validation error handling

## API and Tool Integration

### Python Tools

The repository includes Python tools for working with the ontology:

```bash
pip install -r requirements.txt
```

### Docker Validation

Validation infrastructure using Docker:

```bash
docker compose -f testing/docker-compose.yaml up -d
```

## Contributing to Documentation

To improve documentation:

1. Fork the repository
2. Edit documentation files in the `docs/` directory
3. Submit a pull request
4. See [CONTRIBUTING.md](https://github.com/Project-VIC-International/CAC-Ontology/blob/main/CONTRIBUTING.md) for guidelines

## Additional Resources

- [Getting Started Guide](/getting-started)
- [Ontology Overview](/ontology)
- [Examples Gallery](/examples)
- [Resources Page](/resources)

