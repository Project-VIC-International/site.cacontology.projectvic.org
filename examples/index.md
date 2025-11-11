---
layout: default
title: Examples
permalink: /examples
---

# Examples & Gallery

The CAC Ontology repository includes **30+ real-world example files** based on actual law enforcement cases. These examples demonstrate practical applications of the ontology in real investigations.

## Overview

These examples showcase how CAC Ontology can be used to model various types of crimes against children investigations, from individual cases to large-scale operations. Each example is based on publicly available case information and demonstrates different aspects of the ontology.

## Example Categories

### Athletic Coaching Exploitation

- **Brooklyn Morton October 2024 Example** - Athletic coaching exploitation case demonstrating the use of `cacontology-athletic-exploitation.ttl` module

### Large-Scale Operations

- **Arkansas Operation Cyber Highway Safety Check Example** - Large-scale multi-jurisdictional operation showcasing coordination frameworks
- **Operation Restore Justice Example** - Nationwide coordination demonstrating international and multi-jurisdiction capabilities

### Specialized Investigations

Examples covering various specialized investigation types:
- Undercover operations
- Multi-jurisdictional cases
- Physical evidence procurement
- Tactical operations

### Hotline and Reporting

Examples demonstrating:
- Hotline report processing
- NCMEC tip analysis
- Report management workflows

## Accessing Examples

All examples are available in the [CAC-Ontology GitHub repository](https://github.com/Project-VIC-International/CAC-Ontology):

### Repository Location

Examples are located in the `examples/` directory:

```
examples/
├── brooklyn-morton-october-2024-example.ttl
├── arkansas-operation-cyber-highway-safety-check-example.ttl
├── operation-restore-justice-example.ttl
└── ... (30+ additional examples)
```

### Viewing Examples

1. **GitHub**: Browse examples directly on GitHub
   - [Examples Directory](https://github.com/Project-VIC-International/CAC-Ontology/tree/main/examples)

2. **Clone Repository**: Download all examples locally
   ```bash
   git clone https://github.com/Project-VIC-International/CAC-Ontology.git
   cd CAC-Ontology/examples
   ```

3. **SPARQL Queries**: Use example SPARQL queries to explore the data
   - See `example_SPARQL_queries/` directory in the repository

## Example Use Cases

### Investigation Modeling

Examples show how to model:
- Investigation lifecycles
- Evidence collection and analysis
- Suspect and victim relationships
- Timeline reconstruction

### Multi-Agency Coordination

Examples demonstrate:
- Cross-jurisdictional operations
- International coordination
- Task force organization
- Information sharing protocols

### Legal Processes

Examples illustrate:
- Court proceedings
- Sentencing outcomes
- Registry management
- Legal documentation

## Analytics Demonstrations

The repository includes analytics demonstrations:

- **Location**: `analytics_demonstration/` directory
- **Purpose**: Showcase analytical capabilities using CAC Ontology
- **Tools**: SPARQL queries and visualization examples

## SPARQL Query Examples

Example SPARQL queries are available in:

- **Directory**: `example_SPARQL_queries/`
- **Content**: Common investigation queries
- **Use Cases**: Pattern analysis, timeline reconstruction, relationship mapping

## Contributing Examples

To contribute new examples:

1. Review existing examples for format and structure
2. Ensure examples are based on publicly available information
3. Anonymize sensitive information
4. Follow the repository's [Contributing Guidelines](https://github.com/Project-VIC-International/CAC-Ontology/blob/main/CONTRIBUTING.md)
5. Submit a pull request

## Example Format

Examples are provided in Turtle (TTL) format and follow the CAC Ontology namespace structure:

```turtle
@prefix cacontology: <https://cacontology.projectvic.org#> .
@prefix cacontology-core: <https://cacontology.projectvic.org/core#> .

# Example investigation
:investigation-001 a cacontology-core:CACInvestigation ;
    cacontology-core:hasReport :report-001 ;
    cacontology-core:status "active" .
```

## Validation

All examples can be validated using the SHACL validation modules included in the repository:

```bash
docker compose -f testing/docker-compose.yaml up -d
```

## Related Resources

- [Getting Started](/getting-started) - Learn how to use the ontology
- [Ontology Documentation](/ontology) - Understand the ontology structure
- [Resources](/resources) - Access additional materials and tools

## Support

For questions about examples or help using them:

- Check the [Documentation](/ontology/documentation)
- Review [GitHub Issues](https://github.com/Project-VIC-International/CAC-Ontology/issues)
- Join the [Community](/community)

