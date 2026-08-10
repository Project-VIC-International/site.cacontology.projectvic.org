---
layout: default
title: Resources
permalink: /resources
---

# Resources

Comprehensive resources for working with CAC Ontology, including downloads, publications, presentations, and reference materials.

## Quick Access

- **[Downloads]({{ '/resources/downloads' | relative_url }})** - Ontology files and software
- **[Presentations]({{ '/resources/presentations' | relative_url }})** - Including the [CAC Ontology Figma deck](https://www.figma.com/deck/sP6RILkazvPti5xx3DVqnl){:target="_blank" rel="noopener noreferrer"}
- **[Libraries]({{ '/resources/libraries' | relative_url }})** - CASE/UCO SDK and other software libraries
- **[Publications]({{ '/resources/publications' | relative_url }})** - Research papers and articles
- **[Reference Materials]({{ '/resources/reference' | relative_url }})** - Documentation and guides

## Documentation

### Online Documentation

- **[Entities A-Z](https://cacontology.projectvic.org/entities-az.html)** - Complete entity reference
- **[Ontology Documentation](https://cacontology.projectvic.org/){:target="_blank" rel="noopener noreferrer"}** - Technical documentation
- **[Getting Started Guide]({{ '/getting-started' | relative_url }})** - Introduction and quick start

### Repository Documentation

The [GitHub repository](https://github.com/Project-VIC-International/CAC-Ontology){:target="_blank" rel="noopener noreferrer"} contains:

- `docs/architecture.md` - System architecture
- `docs/design.md` - Design principles
- `docs/user_doc.md` - User guide
- `docs/PRD.md` - Product requirements
- `docs/glossary.md` - Terminology

## Examples and Tutorials

- **[Examples Gallery]({{ '/examples' | relative_url }})** - 61 real-world example knowledge graphs (v3.1.0)
- **SPARQL Queries** - 32 example suites in `example_SPARQL_queries/`
- **Analytics Demonstrations** - Located in `analytics_demonstration/` directory
- **AI modeling**: [Model with AI]({{ '/developers/ai-modeling' | relative_url }}) via the CASE/UCO SDK MCP server

## Tools and Software

### CASE/UCO SDK

- **Repository**: [github.com/vulnmaster/CASE-UCO-SDK](https://github.com/vulnmaster/CASE-UCO-SDK)
- Multi-language bindings (Python, C#, Java, Rust), modeling recipes, and MCP server

### Python Tools

The CAC Ontology repository includes Python tools for working with the ontology:

```bash
git clone https://github.com/Project-VIC-International/CAC-Ontology.git
cd CAC-Ontology
pip install -r requirements.txt
```

### Docker Validation

Validation infrastructure:

```bash
docker compose -f testing/docker-compose.yaml up -d
```

## Related Projects

### CASE Ontology

- **Website**: [caseontology.org](https://caseontology.org)
- **Repository**: [GitHub](https://github.com/casework/CASE)
- **Current pin (CAC v3.1.0)**: CASE/UCO **1.5.0**

### Unified Cyber Ontology (UCO)

- **Repository**: [GitHub](https://github.com/ucoProject)

### CASE/UCO SDK

- **Repository**: [GitHub](https://github.com/vulnmaster/CASE-UCO-SDK)

### Project VIC International

- **Website**: [projectvic.org](https://projectvic.org)
- Building its Technology Ecosystem (including VICTrace) on CAC Ontology and CASE/UCO

## Support Resources

- [Community]({{ '/community' | relative_url }}) - Join discussions and get help
- [Contact]({{ '/contact' | relative_url }}) - Reach out with questions
- [GitHub Issues](https://github.com/Project-VIC-International/CAC-Ontology/issues){:target="_blank" rel="noopener noreferrer"} - Report bugs and request features

## Additional Resources

- [Releases]({{ '/releases' | relative_url }}) - Version information and downloads
- [Contributing Guidelines](https://github.com/Project-VIC-International/CAC-Ontology/blob/main/CONTRIBUTING.md){:target="_blank" rel="noopener noreferrer"} - How to contribute
- [License](https://github.com/Project-VIC-International/CAC-Ontology/blob/main/license.md){:target="_blank" rel="noopener noreferrer"} - Apache License 2.0

