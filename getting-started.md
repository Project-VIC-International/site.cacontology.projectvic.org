---
layout: default
title: Getting Started
permalink: /getting-started
---

# Getting Started with CAC Ontology

Welcome to the CAC (Crimes Against Children) Ontology Family! This guide will help you get started with using the ontology in your investigations and applications.

## Choose your path

- **I want a plain-language overview**: Start with Key Concepts and the “Plain language” section below.
- **I want to model a document with AI**: Start with [Model Documents with AI]({{ '/developers/ai-modeling' | relative_url }}).
- **I want to integrate CAC into a system**: Start with the [Developer Guide]({{ '/developers' | relative_url }}).

## What is CAC Ontology?

The CAC Ontology Family is a comprehensive semantic framework for modeling child exploitation investigations, operations, legal processes, reporting, offender tradecraft, and digital forensics activities. It extends the **Unified Cyber Ontology (UCO)** and the **Cyber-investigation Analysis Standard Expression (CASE) Ontology**, providing specialized modules for crimes against children investigations.

The CAC Ontology is shepherded by **Project VIC International**, but further development of this initiative is open to any participant. The ontology represents concepts used globally by government and law enforcement agencies, NGOs, academic organizations, and commercial industry, and we plan to continue evolving this family of ontologies to represent new victim-centric language as it develops worldwide.

## Plain language (what the files mean)

- **RDF graph**: a way to represent facts as a connected set of nodes and links.
- **Turtle (`.ttl`)**: a human-readable way to write RDF graphs.
- **SPARQL (`.rq`)**: a query language for asking questions of a graph.
- **SHACL**: validation rules that check whether a graph follows the intended structure and “business rules.”

CAC Ontology is also part of the Linux Foundation Cyber Domain Ontology (CDO) ecosystem, which provides a shared foundation (UCO + CASE) so different tools and organizations can exchange investigation information consistently:

- https://cyberdomainontology.org/

## Key Concepts

### Namespace

All CAC Ontology modules use the standardized namespace structure:

- **Base Namespace**: `https://cacontology.projectvic.org`
- **Module Namespaces**: `https://cacontology.projectvic.org/{module-name}#`
- **Prefix Pattern**: `cacontology-{module-name}:`

### Ontology Structure

The CAC Ontology Family consists of **30+ specialized modules** organized into six domain areas:

1. **Core Framework** (3 modules)
   - Base investigation framework and lifecycles
   - Hotline operations and report management
   - Enhanced NCMEC integration

2. **International Coordination & Global Frameworks** (4 modules)
   - Global coordination & cross-border operations
   - Professional development & capacity building
   - Prevention programs & education
   - International legal framework

3. **High-Priority Criminal Activities** (5+ modules)
   - CSAM production operations
   - Custodial relationships & positions of trust
   - Online grooming & enticement
   - Sexual extortion incidents
   - Athletic coaching exploitation

4. **Specialized Investigation** (5+ modules)
   - Undercover operations
   - Physical evidence & procurement
   - Tactical law enforcement operations
   - Multi-jurisdictional operations
   - Stranger abduction patterns

5. **Technical Support** (4+ modules)
   - Digital forensics
   - Content detection & classification
   - Technology platforms & service providers
   - Street-based recruitment patterns

6. **Victim Services & Task Force Management** (5+ modules)
   - Victim impact assessment & recovery
   - CAC task force organization
   - Legal outcomes & sentencing
   - Specialized units & advanced capabilities
   - Sex offender registry management

## Quick Start

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Project-VIC-International/CAC-Ontology.git
   cd CAC-Ontology
   ```

2. Install dependencies (if using Python tools):
   ```bash
   pip install -r requirements.txt
   ```

### Basic Usage

Here's a simple example of using CAC Ontology in Turtle format:

```turtle
@prefix cacontology: <https://cacontology.projectvic.org#> .
@prefix cacontology-core: <https://cacontology.projectvic.org/core#> .

# Example: Create a CAC investigation
:investigation-001 a cacontology-core:CACInvestigation ;
    cacontology-core:hasReport :report-001 ;
    cacontology-core:status "active" ;
    cacontology-core:hasInvestigator :investigator-001 .

:report-001 a cacontology-core:Report ;
    cacontology-core:reportDate "2024-01-15"^^xsd:date ;
    cacontology-core:reportType "tip" .
```

### Validation

The project includes comprehensive SHACL validation:

```bash
docker compose -f testing/docker-compose.yaml up -d
# Validation runs automatically on all ontology files
```

## Next Steps

1. **Explore the Ontology**: Visit the [Ontology Documentation](https://cacontology.projectvic.org/){:target="_blank" rel="noopener noreferrer"} to learn about all available modules and classes.

2. **View Examples**: Check out the [Examples Gallery]({{ '/examples' | relative_url }}) to see real-world use cases from actual investigations.

3. **Join the Community**: Get involved with the [CAC Ontology Community]({{ '/community' | relative_url }}) to connect with other users and contributors.

4. **Access Resources**: Browse [Resources]({{ '/resources' | relative_url }}) for downloads, publications, and reference materials.

5. **For Developers**: Check out the [Developer Guide]({{ '/developers' | relative_url }}) for detailed instructions on adoption, mapping, and integration.

## Model a document with AI (recommended starting point)

If your starting point is a press release, report, or tool export (instead of a pre-structured database), the fastest way to begin is the AI-assisted modeling workflow:

- Guide: [Model Documents with AI]({{ '/developers/ai-modeling' | relative_url }})
- Canonical prompt used by the workflow: https://github.com/Project-VIC-International/CAC-Ontology/blob/main/agent.md
- Latest ontology changes and example suites: https://github.com/Project-VIC-International/CAC-Ontology/blob/main/CHANGELOG.md

## Integration with CASE and UCO

CAC Ontology is designed to work seamlessly with CASE and UCO ontologies. When using CAC Ontology, you can:

- Import CASE and UCO classes and properties
- Extend CASE investigation structures with CAC-specific concepts
- Maintain compatibility with existing CASE/UCO tools and workflows
- Leverage UCO's foundational cyber investigation concepts

## Documentation

Comprehensive documentation is available:

- **Architecture**: See the repository's `docs/architecture.md` for complete system architecture
- **Design**: See `docs/design.md` for design principles and technical specifications
- **User Guide**: See `docs/user_doc.md` for detailed user documentation
- **Entities A-Z**: View the [complete entity reference](https://cacontology.projectvic.org/entities-az.html)

## Support

- **Email Support**: For questions about CAC Ontology or to join the effort, email [support@projectvic.zendesk.com](mailto:support@projectvic.zendesk.com)
- **GitHub Issues**: Report bugs or request features on the [GitHub repository](https://github.com/Project-VIC-International/CAC-Ontology/issues){:target="_blank" rel="noopener noreferrer"}
- **Community**: Join discussions in the [Community section]({{ '/community' | relative_url }})
- **Contact**: Reach out via our [Contact page]({{ '/contact' | relative_url }})

