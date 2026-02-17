---
layout: default
title: Examples
permalink: /examples
---

# Examples & Gallery

CAC Ontology includes a growing set of real-world example suites based on public information. Each suite typically includes:

- an example knowledge graph in Turtle (`.ttl`)
- an investigator-focused SPARQL analytics suite (`.rq`)
- and, in many cases, captured evidence artifacts (to keep the work explainable)

To stay current, this website links to the canonical examples in GitHub (the CAC Ontology repository is the source of truth).

## Featured example suites (good starting points)

### Missing child / platform data access (v2.10.0)

- Example KG: https://github.com/Project-VIC-International/CAC-Ontology/blob/main/examples_knowledge_graphs/police1-modern-missing-child-investigations-2026-example.ttl
- SPARQL suite: https://github.com/Project-VIC-International/CAC-Ontology/blob/main/example_SPARQL_queries/police1-modern-missing-child-investigations-2026-analytics.rq

### Missing child rescue operations (v2.9.0)

- Example KG: https://github.com/Project-VIC-International/CAC-Ontology/blob/main/examples_knowledge_graphs/westchester-missing-child-rescue-operation-2026-example.ttl
- SPARQL suite: https://github.com/Project-VIC-International/CAC-Ontology/blob/main/example_SPARQL_queries/westchester-missing-child-rescue-operation-2026-analytics.rq

### Undercover operations (communication patterns + evidence) (v2.3.0)

- Example KG: https://github.com/Project-VIC-International/CAC-Ontology/blob/main/examples_knowledge_graphs/miami-icac-felipe-lopez-example.ttl
- SPARQL suite: https://github.com/Project-VIC-International/CAC-Ontology/blob/main/example_SPARQL_queries/miami-icac-felipe-lopez-analytics.rq

### Recidivism + registry compliance + NCMEC tip linkage (v2.2.0)

- Example KG: https://github.com/Project-VIC-International/CAC-Ontology/blob/main/examples_knowledge_graphs/utah-dominic-christensen-example.ttl
- SPARQL suite: https://github.com/Project-VIC-International/CAC-Ontology/blob/main/example_SPARQL_queries/utah-dominic-christensen-analytics.rq

## Browse all examples (canonical)

- Example knowledge graphs directory: https://github.com/Project-VIC-International/CAC-Ontology/tree/main/examples_knowledge_graphs
- SPARQL analytics suites directory: https://github.com/Project-VIC-International/CAC-Ontology/tree/main/example_SPARQL_queries
- Analytics demonstration artifacts (when present): https://github.com/Project-VIC-International/CAC-Ontology/tree/main/analytics_demonstration

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

