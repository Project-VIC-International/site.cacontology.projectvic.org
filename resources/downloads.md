---
layout: default
title: Downloads
permalink: /resources/downloads
---

# Downloads

Download CAC Ontology files, software, and related resources.

## Ontology Files

### GitHub Repository

All ontology files are available from the [CAC-Ontology GitHub repository](https://github.com/Project-VIC-International/CAC-Ontology){:target="_blank" rel="noopener noreferrer"}:

```bash
git clone https://github.com/Project-VIC-International/CAC-Ontology.git
```

### Ontology Modules

Ontology files are located in the `ontology/` directory (97 files total, 2,209 classes, 2,527 properties in **v3.1.0**):

#### Semantic Spine & Bridges
- `cacontology-core-spine.ttl` - Top-level class hierarchy (includes ConditioningPhase in v3.1.0)
- `cacontology-core-spine-shapes.ttl` - Spine SHACL shapes
- `cacontology-bridge-gufo.ttl` - gUFO alignment bridge (gUFO 1.0.0)
- `cacontology-bridge-case.ttl` - CASE alignment bridge (CASE 1.5.0)
- `cacontology-bridge-uco.ttl` - UCO alignment bridge (UCO 1.5.0)

#### Core Framework
- `cacontology-core.ttl`
- `cacontology-hotlines-core.ttl`
- `cacontology-us-ncmec.ttl`

#### Domain-Specific Modules
- `cacontology-international.ttl`
- `cacontology-production.ttl`
- `cacontology-grooming.ttl`
- `cacontology-forensics.ttl`
- And 25+ additional modules

#### Validation Modules
- `cacontology-*-shapes.ttl` - 30 SHACL validation shapes modules

### Example Files

61 example knowledge graphs are available in the `examples_knowledge_graphs/` directory, with 32 SPARQL analytics suites:

- Real-world investigation examples
- Use case demonstrations
- Pattern examples (including v3.1.0 ConditioningPhase, CaseLinker, legal-outcomes, and NCMEC suites)

## Software and Tools

### CASE/UCO SDK (recommended for application developers)

Multi-language SDK for building validated CASE/UCO/CAC graphs:

- Repository: https://github.com/vulnmaster/CASE-UCO-SDK
- Languages: Python, C#, Java, Rust
- Includes an MCP server and modeling recipes for AI-assisted development

### Python Tools

The CAC Ontology repository includes Python tools for working with the ontology:

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

- [Entities A-Z](https://cacontology.projectvic.org/entities-az.html) - Complete entity reference
- [Ontology Documentation](https://cacontology.projectvic.org/){:target="_blank" rel="noopener noreferrer"} - Technical documentation

## SPARQL Queries

Example SPARQL queries are available in:

- `example_SPARQL_queries/` directory
- Analytics and query examples
- Common investigation patterns

## Releases

For specific releases and versions:

- [Releases Page]({{ '/releases' | relative_url }}) - Release information
- [GitHub Releases](https://github.com/Project-VIC-International/CAC-Ontology/releases){:target="_blank" rel="noopener noreferrer"} - Release downloads

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

- [Getting Started]({{ '/getting-started' | relative_url }}) - Installation and setup
- [Examples]({{ '/examples' | relative_url }}) - Example files and use cases
- [Resources Overview]({{ '/resources' | relative_url }}) - Additional resources

