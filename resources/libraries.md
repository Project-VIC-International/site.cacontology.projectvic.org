---
layout: default
title: Libraries
permalink: /resources/libraries
---

# Libraries and Tools

Software libraries, tools, and integrations for working with CAC Ontology.

## CASE/UCO SDK (recommended)

The [CASE/UCO SDK](https://github.com/vulnmaster/CASE-UCO-SDK) is the primary developer toolkit for building validated CASE/UCO and CAC Ontology graphs:

- **Languages**: Python, C#, Java, Rust
- **MCP server**: LLM-ready ontology discovery, modeling recipes, validation, extension design, and change proposals
- **Bindings**: CASE, UCO, CAC Ontology, SOLVE-IT, and additional cyber-domain extension ontologies
- **Aligned with**: CAC Ontology v3.1.0 and CASE/UCO 1.5.0 interoperability

Install and usage details: https://github.com/vulnmaster/CASE-UCO-SDK

See also: [Model with AI]({{ '/developers/ai-modeling' | relative_url }})

## Python Tools

The CAC Ontology repository includes Python tools for working with the ontology:

### Installation

```bash
git clone https://github.com/Project-VIC-International/CAC-Ontology.git
cd CAC-Ontology
pip install -r requirements.txt
```

### Usage

Python tools are available in the repository for:
- Ontology validation
- File processing
- Data transformation
- Analysis and querying

## Docker Tools

### Validation Infrastructure

Docker-based validation using SHACL:

```bash
docker compose -f testing/docker-compose.yaml up -d
```

This sets up validation infrastructure that automatically validates all ontology files.

## SPARQL Tools

### Query Examples

Example SPARQL queries are available in the `example_SPARQL_queries/` directory:

- Common investigation patterns
- Analytics queries
- Data extraction queries
- Relationship mapping queries

### SPARQL Endpoints

SPARQL endpoints can be set up using standard RDF triple stores that support SPARQL queries.

## RDF Libraries

CAC Ontology files are standard RDF/OWL, compatible with:

### Python
- **rdflib** - Python library for working with RDF
- **owlready2** - OWL ontology manipulation in Python

### Java
- **Apache Jena** - Java framework for building Semantic Web applications
- **OWL API** - Java API for working with OWL ontologies

### JavaScript/TypeScript
- **rdf-ext** - RDF/JS interface implementation
- **N3.js** - Lightning fast, asynchronous, streaming Turtle/N3 RDF library

### .NET
- **dotNetRDF** - .NET library for working with RDF data

## Validation Tools

### SHACL Validation

CAC Ontology includes comprehensive SHACL validation:

- Validation shapes for all major modules
- Business rule enforcement
- Data quality checks

### RDF Validators

Standard RDF validators can be used:
- W3C RDF Validator
- Apache Jena validation tools
- Custom validation using SHACL processors

## Integration Libraries

### CASE Integration

Libraries for working with CASE Ontology (which CAC extends):
- [CASE/UCO SDK](https://github.com/vulnmaster/CASE-UCO-SDK) — typed builders and validation for CASE/UCO 1.5.0
- See [caseontology.org](https://caseontology.org) for CASE tools and libraries

### UCO Integration

Libraries for Unified Cyber Ontology:
- [CASE/UCO SDK](https://github.com/vulnmaster/CASE-UCO-SDK)
- See UCO project resources for integration libraries

## Contributing Libraries

If you've developed a library or tool for working with CAC Ontology:

1. Contact the project maintainers through [GitHub Issues](https://github.com/Project-VIC-International/CAC-Ontology/issues) or [Contact page]({{ '/contact' | relative_url }})
2. Provide:
   - Library/tool name
   - Description
   - Programming language
   - Link to repository or documentation
   - Usage examples

3. Libraries will be reviewed and added to this page

## Related Resources

- [Downloads]({{ '/resources/downloads' | relative_url }}) - Ontology files and software
- [Reference Materials]({{ '/resources/reference' | relative_url }}) - Documentation and guides
- [Resources Overview]({{ '/resources' | relative_url }}) - All resources

