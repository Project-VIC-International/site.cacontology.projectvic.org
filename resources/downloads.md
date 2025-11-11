---
layout: default
title: Downloads
permalink: /resources/downloads
---

# Downloads

Download CAC Ontology files, software, and related resources.

## Ontology Files

### GitHub Repository

All ontology files are available from the [CAC-Ontology GitHub repository](https://github.com/Project-VIC-International/CAC-Ontology):

```bash
git clone https://github.com/Project-VIC-International/CAC-Ontology.git
```

### Ontology Modules

Ontology files are located in the `ontology/` directory:

#### Core Framework
- `cacontology-core.ttl`
- `cacontology-hotlines-core.ttl`
- `cacontology-us-ncmec.ttl`

#### Domain-Specific Modules
- `cacontology-international.ttl`
- `cacontology-production.ttl`
- `cacontology-grooming.ttl`
- `cacontology-forensics.ttl`
- And 20+ additional modules

#### Validation Modules
- `cacontology-*-shapes.ttl` - SHACL validation shapes for each module

### Example Files

30+ example files are available in the `examples/` directory:

- Real-world investigation examples
- Use case demonstrations
- Pattern examples

## Software and Tools

### Python Tools

The repository includes Python tools for working with the ontology:

1. Clone the repository:
   ```bash
   git clone https://github.com/Project-VIC-International/CAC-Ontology.git
   cd CAC-Ontology
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

### Docker Validation

Validation infrastructure using Docker:

```bash
docker compose -f testing/docker-compose.yaml up -d
```

## Documentation

### Repository Documentation

Documentation files in the repository:

- `docs/architecture.md` - System architecture
- `docs/design.md` - Design principles
- `docs/user_doc.md` - User guide
- `docs/PRD.md` - Product requirements
- `docs/glossary.md` - Terminology

### Online Documentation

- [Entities A-Z](https://project-vic-international.github.io/cacontology.projectvic.org/entities-az.html) - Complete entity reference
- [Ontology Documentation](/ontology) - Technical documentation

## SPARQL Queries

Example SPARQL queries are available in:

- `example_SPARQL_queries/` directory
- Analytics and query examples
- Common investigation patterns

## Releases

For specific releases and versions:

- [Releases Page](/releases) - Release information
- [GitHub Releases](https://github.com/Project-VIC-International/CAC-Ontology/releases) - Release downloads

## File Formats

Ontology files are provided in:

- **Turtle (TTL)** - Primary format for all modules
- **RDF/XML** - Can be generated from Turtle files
- **JSON-LD** - Context files available in `contexts/` directory

## Validation

All ontology files can be validated using:

- SHACL validation modules included in the repository
- Docker validation infrastructure
- Standard RDF validators

## Related Resources

- [Getting Started](/getting-started) - Installation and setup
- [Examples](/examples) - Example files and use cases
- [Resources Overview](/resources) - Additional resources

