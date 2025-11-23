---
layout: default
title: Developers
permalink: /developers
---

# Developer Guide

Welcome to the CAC Ontology Developer Guide. This documentation is designed for software engineers, data architects, and system integrators who are implementing the CAC Ontology in their applications and workflows.

## Adoption & Mapping

Adopting the CAC Ontology involves mapping your existing data models and schemas to the semantic concepts defined in the ontology. This process ensures your data is interoperable with other systems using CAC, CASE, and UCO.

### Namespaces

All CAC Ontology modules utilize a standardized namespace structure. When generating RDF data, ensure you declare the correct namespaces:

**Base Namespace:** `https://cacontology.projectvic.org`

| Prefix | URI | Description |
|--------|-----|-------------|
| `cacontology` | `https://cacontology.projectvic.org#` | Base namespace |
| `cacontology-core` | `https://cacontology.projectvic.org/core#` | Core investigation framework |
| `uco-core` | `https://ontology.unifiedcyberontology.org/uco/core/` | UCO Core |
| `case-investigation` | `https://ontology.caseontology.org/case/investigation/` | CASE Investigation |

### Mapping Strategy

1.  **Analyze Source Data**: Identify the key entities in your data (e.g., Reports, Suspects, Victims, Digital Media).
2.  **Generate UUIDs**: Assign a unique UUID v4 to every serialized object to ensure global uniqueness and alignment with CASE/UCO standards.
3.  **Select Ontology Classes**: Map your entities to the corresponding CAC Ontology classes. Refer to the [Entity Reference](https://cacontology.projectvic.org/entities-az.html) and [Documentation](https://github.com/Project-VIC-International/CAC-Ontology/tree/v2.2.0/docs).
4.  **Map Properties**: Align your data fields with the ontology's object and data properties.
5.  **Define Relationships**: Establish links between entities using object properties (e.g., `cacontology-core:hasSuspect`, `cacontology-core:hasVictim`).

## Integration with CASE, UCO, and gUFO

The CAC Ontology is designed for seamless integration with the broader cyber-investigation ecosystem.

-   **CASE & UCO**: CAC Ontology extends the **Cyber-investigation Analysis Standard Expression (CASE)** and **Unified Cyber Ontology (UCO)**. It inherits classes and properties from these standards, allowing you to use CAC-specific concepts alongside standard cyber-investigation structures. This ensures compatibility with tools that support CASE/UCO.
-   **gUFO**: The ontology integrates the **Unified Foundational Ontology (gUFO)** to provide a rigorous metaphysical foundation. This enhances temporal modeling (e.g., roles like 'Suspect' are temporal phases) and enables more robust validation and reasoning capabilities.

## Serialization

We recommend using **Turtle (.ttl)** or **JSON-LD** for serializing CAC Ontology data. These formats are human-readable (Turtle) and web-friendly (JSON-LD).

**Example Turtle Serialization:**

```turtle
@prefix cacontology: <https://cacontology.projectvic.org#> .
@prefix cacontology-core: <https://cacontology.projectvic.org/core#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

# Example: Create a CAC investigation using UUID v4
:kb-f8e2c0b0-3b1a-4b9e-8c1d-9f2e3a4b5c6d a cacontology-core:CACInvestigation ;
    cacontology-core:status "active" ;
    cacontology-core:hasReport :kb-a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d .

:kb-a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d a cacontology-core:Report ;
    cacontology-core:reportDate "2025-11-23"^^xsd:date ;
    cacontology-core:summary "Initial tip received via hotline." .
```

## Validation

The CAC Ontology includes a comprehensive SHACL validation system available in the `testing/` directory of the repository.

### Docker Validation System

You can validate your data using the provided Docker configuration. This system runs automated checks against your RDF data using predefined SHACL shapes.

1.  **Locate Testing Directory**: Access the [validation system](https://github.com/Project-VIC-International/CAC-Ontology/tree/main/testing) in the repository.
2.  **Run Validation**:
    ```bash
    # From the repository root
    docker compose -f testing/docker-compose.yaml up -d
    ```
3.  **Process**: The system will mount your ontology files and example data, validating them against the SHACL shapes defined in the ontology modules.

## Examples & Resources

We provide extensive resources to assist with implementation:

### Example Knowledge Graphs
Review our collection of [Example Knowledge Graphs]({{ '/examples' | relative_url }}) to see complete, valid RDF datasets for various scenarios:

<details>
<summary>Click to view all Knowledge Graph Examples</summary>
<ul>
  <li><a href="{{ '/examples/examples_knowledge_graphs/764-network-extremist-enterprise-example.ttl' | relative_url }}" target="_blank">764-network-extremist-enterprise-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/arkansas-operation-cyber-highway-safety-check-example.ttl' | relative_url }}" target="_blank">arkansas-operation-cyber-highway-safety-check-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/brooklyn-fiesco-november-2024-example.ttl' | relative_url }}" target="_blank">brooklyn-fiesco-november-2024-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/brooklyn-lee-december-2024-example.ttl' | relative_url }}" target="_blank">brooklyn-lee-december-2024-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/brooklyn-morton-october-2024-example.ttl' | relative_url }}" target="_blank">brooklyn-morton-october-2024-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/brooklyn-teacher-march-2025-example.ttl' | relative_url }}" target="_blank">brooklyn-teacher-march-2025-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/brooklyn-trafficking-april-2025-example.ttl' | relative_url }}" target="_blank">brooklyn-trafficking-april-2025-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/brooklyn-trafficking-ring-example.ttl' | relative_url }}" target="_blank">brooklyn-trafficking-ring-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/buffalo-vermont-case-example.ttl' | relative_url }}" target="_blank">buffalo-vermont-case-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/bushwick-case-example.ttl' | relative_url }}" target="_blank">bushwick-case-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/ceos-federal-law-example.ttl' | relative_url }}" target="_blank">ceos-federal-law-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/douglas-comprehensive-case.ttl' | relative_url }}" target="_blank">douglas-comprehensive-case.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/enhanced-investigation-lifecycle.ttl' | relative_url }}" target="_blank">enhanced-investigation-lifecycle.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/europol-kidflix-operation-example.ttl' | relative_url }}" target="_blank">europol-kidflix-operation-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/gary-simon-teacher-case-example.ttl' | relative_url }}" target="_blank">gary-simon-teacher-case-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/gufo-phase1-example.ttl' | relative_url }}" target="_blank">gufo-phase1-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/gufo-phase2-temporal-example.ttl' | relative_url }}" target="_blank">gufo-phase2-temporal-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/haitian-orphanage-geilenfeld-example.ttl' | relative_url }}" target="_blank">haitian-orphanage-geilenfeld-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/hartford-vermont-case-example.ttl' | relative_url }}" target="_blank">hartford-vermont-case-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/hotline-lifecycle.ttl' | relative_url }}" target="_blank">hotline-lifecycle.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/idaho-operation-unhinged-example.ttl' | relative_url }}" target="_blank">idaho-operation-unhinged-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/illinois-attorney-general-case-example.ttl' | relative_url }}" target="_blank">illinois-attorney-general-case-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/international-coordination-example.ttl' | relative_url }}" target="_blank">international-coordination-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/investigation-lifecycle.ttl' | relative_url }}" target="_blank">investigation-lifecycle.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/national-icac-directory-example.ttl' | relative_url }}" target="_blank">national-icac-directory-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/operation-cumberland-ai-csam-example.ttl' | relative_url }}" target="_blank">operation-cumberland-ai-csam-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/operation-restore-justice-example.ttl' | relative_url }}" target="_blank">operation-restore-justice-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/palmisano-louisiana-registered-offender-example.ttl' | relative_url }}" target="_blank">palmisano-louisiana-registered-offender-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/rhode-island-production-case.ttl' | relative_url }}" target="_blank">rhode-island-production-case.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/sa-jacet-decade-operation-example.ttl' | relative_url }}" target="_blank">sa-jacet-decade-operation-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/sex-offender-registry-integration-example.ttl' | relative_url }}" target="_blank">sex-offender-registry-integration-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/utah-dominic-christensen-example.ttl' | relative_url }}" target="_blank">utah-dominic-christensen-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/utah-operation-hive-strike-example.ttl' | relative_url }}" target="_blank">utah-operation-hive-strike-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/valdez-olivar-maryland-case-example.ttl' | relative_url }}" target="_blank">valdez-olivar-maryland-case-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/vermont-case-example.ttl' | relative_url }}" target="_blank">vermont-case-example.ttl</a></li>
  <li><a href="{{ '/examples/examples_knowledge_graphs/wa-sextortion-case-example.ttl' | relative_url }}" target="_blank">wa-sextortion-case-example.ttl</a></li>
</ul>
</details>

Found in the repository under [`examples/examples_knowledge_graphs`](https://github.com/Project-VIC-International/CAC-Ontology/tree/main/examples/examples_knowledge_graphs).

### SPARQL Queries
Explore [Example SPARQL Queries]({{ '/examples' | relative_url }}#sparql-query-examples) for analytics and data retrieval patterns:

<details>
<summary>Click to view all SPARQL Query Examples</summary>
<ul>
  <li><a href="{{ '/examples/example_SPARQL_queries/age-at-time-analytics.rq' | relative_url }}" target="_blank">age-at-time-analytics.rq</a></li>
  <li><a href="{{ '/examples/example_SPARQL_queries/comprehensive-case-analytics.rq' | relative_url }}" target="_blank">comprehensive-case-analytics.rq</a></li>
  <li><a href="{{ '/examples/example_SPARQL_queries/find_automated_reports.rq' | relative_url }}" target="_blank">find_automated_reports.rq</a></li>
  <li><a href="{{ '/examples/example_SPARQL_queries/find_cross_border_actions.rq' | relative_url }}" target="_blank">find_cross_border_actions.rq</a></li>
  <li><a href="{{ '/examples/example_SPARQL_queries/find_duplicate_evidence.rq' | relative_url }}" target="_blank">find_duplicate_evidence.rq</a></li>
  <li><a href="{{ '/examples/example_SPARQL_queries/find_live_stream_incidents.rq' | relative_url }}" target="_blank">find_live_stream_incidents.rq</a></li>
  <li><a href="{{ '/examples/example_SPARQL_queries/find_open_reports.rq' | relative_url }}" target="_blank">find_open_reports.rq</a></li>
  <li><a href="{{ '/examples/example_SPARQL_queries/find_platform_cooperation_analytics.rq' | relative_url }}" target="_blank">find_platform_cooperation_analytics.rq</a></li>
  <li><a href="{{ '/examples/example_SPARQL_queries/find_report_statistics.rq' | relative_url }}" target="_blank">find_report_statistics.rq</a></li>
  <li><a href="{{ '/examples/example_SPARQL_queries/find_rescue_chains.rq' | relative_url }}" target="_blank">find_rescue_chains.rq</a></li>
  <li><a href="{{ '/examples/example_SPARQL_queries/find_rescue_statistics.rq' | relative_url }}" target="_blank">find_rescue_statistics.rq</a></li>
  <li><a href="{{ '/examples/example_SPARQL_queries/find_unhandled_reports.rq' | relative_url }}" target="_blank">find_unhandled_reports.rq</a></li>
  <li><a href="{{ '/examples/example_SPARQL_queries/gufo-enhanced-analytics.rq' | relative_url }}" target="_blank">gufo-enhanced-analytics.rq</a></li>
  <li><a href="{{ '/examples/example_SPARQL_queries/utah-dominic-christensen-analytics.rq' | relative_url }}" target="_blank">utah-dominic-christensen-analytics.rq</a></li>
</ul>
</details>

Found in the repository under [`examples/example_SPARQL_queries`](https://github.com/Project-VIC-International/CAC-Ontology/tree/main/examples/example_SPARQL_queries).

### Documentation
-   **[CAC Ontology v2.2.0 Documentation](https://github.com/Project-VIC-International/CAC-Ontology/tree/v2.2.0/docs)**: The official documentation source, including architecture, design, and user guides.

## Contributing

We encourage developer contributions to the ontology.

1.  **Propose Changes**: If you identify a need for a new class, property, or fix, please [open an issue](https://github.com/Project-VIC-International/CAC-Ontology/issues) on our GitHub repository.
2.  **Follow Guidelines**: Please review our [Contributing Guidelines](https://github.com/Project-VIC-International/CAC-Ontology/blob/main/CONTRIBUTING.md) before submitting pull requests or issues.

