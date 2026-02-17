---
layout: default
title: Developers
permalink: /developers
---

# Developer Guide

Welcome to the CAC Ontology Developer Guide. This documentation is designed for software engineers, data architects, and system integrators who are implementing the CAC Ontology in their applications and workflows.

## Choose your path

- **Model documents with AI**: Start from a document (press release, report, policy memo, tool export) and produce `.ttl` + `.rq` with an evidence trail. See [Model Documents with AI]({{ '/developers/ai-modeling' | relative_url }}).
- **Map existing structured data**: You already have a database, schema, or JSON model and want to map it into CAC Ontology classes/properties.

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
3.  **Select Ontology Classes**: Map your entities to the corresponding CAC Ontology classes. Refer to the [Entity Reference](https://cacontology.projectvic.org/entities-az.html) and the repository docs: https://github.com/Project-VIC-International/CAC-Ontology/tree/main/docs
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
Review the [Examples & Gallery]({{ '/examples' | relative_url }}) for curated entry points, or browse the canonical example suite in GitHub:

- Example knowledge graphs (canonical): https://github.com/Project-VIC-International/CAC-Ontology/tree/main/examples_knowledge_graphs

### SPARQL Queries
Browse the canonical SPARQL suites in GitHub:

- SPARQL analytics suites (canonical): https://github.com/Project-VIC-International/CAC-Ontology/tree/main/example_SPARQL_queries

### Documentation
- Repository documentation (canonical): https://github.com/Project-VIC-International/CAC-Ontology/tree/main/docs

## Contributing

We encourage developer contributions to the ontology.

1.  **Propose Changes**: If you identify a need for a new class, property, or fix, please [open an issue](https://github.com/Project-VIC-International/CAC-Ontology/issues) on our GitHub repository.
2.  **Follow Guidelines**: Please review our [Contributing Guidelines](https://github.com/Project-VIC-International/CAC-Ontology/blob/main/CONTRIBUTING.md) before submitting pull requests or issues.

