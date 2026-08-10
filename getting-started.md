---
layout: default
title: Getting Started
permalink: /getting-started
---

# Getting Started with CAC Ontology

Welcome to the CAC (Crimes Against Children) Ontology Family! This guide will help you get started with using the ontology in your investigations and applications.

## Choose your path

- **I want a plain-language overview**: Start with Key Concepts and the “Plain language” section below.
- **I want to model investigation data with AI**: Start with [Model with AI]({{ '/developers/ai-modeling' | relative_url }}) and the [CASE/UCO SDK](https://github.com/vulnmaster/CASE-UCO-SDK).
- **I want to integrate CAC into a system**: Start with the [Developer Guide]({{ '/developers' | relative_url }}).
- **I want the slide deck**: Open the [CAC Ontology presentation](https://www.figma.com/deck/sP6RILkazvPti5xx3DVqnl){:target="_blank" rel="noopener noreferrer"}.

## What is CAC Ontology?

The CAC Ontology Family is a comprehensive semantic framework for modeling child exploitation investigations, operations, legal processes, reporting, offender tradecraft, and digital forensics activities. It extends the **Unified Cyber Ontology (UCO)**, the **Cyber-investigation Analysis Standard Expression (CASE) Ontology**, and the lightweight version of the **Unified Foundational Ontology (gUFO)**.

**v3.0.0** introduced the **Semantic Spine** (`cac-core:` namespace) — a stable, top-level class hierarchy that mediates all alignment to gUFO, UCO, and CASE. **v3.1.0** (current) expands investigation modeling on that spine, pins imports to **CASE/UCO 1.5.0** and **gUFO 1.0.0**, and directs AI-assisted modeling through the CASE/UCO SDK MCP server.

The CAC Ontology is shepherded by **Project VIC International**, which is building its Technology Ecosystem — including **VICTrace** — on this open semantic foundation. Further development remains open to any participant. The ontology represents concepts used globally by government and law enforcement agencies, NGOs, academic organizations, and commercial industry, and we plan to continue evolving this family of ontologies to represent new victim-centric language as it develops worldwide.

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
- **Spine Namespace**: `https://cacontology.projectvic.org/core#` (prefix `cac-core:`)
- **Module Namespaces**: `https://cacontology.projectvic.org/{module-name}#`
- **Prefix Pattern**: `cacontology-{module-name}:`

### Ontology Structure

The CAC Ontology Family consists of **35+ specialized modules** organized into six domain areas plus a core semantic spine and bridge layer:

1. **Semantic Spine & Bridges** (5 modules)
   - Top-level class hierarchy (`cac-core:Entity`, `EnduringEntity`, `Event`, `Situation`, `Role`, `Phase`, and branches)
   - SHACL shapes for spine constraints
   - Bridge modules for gUFO, CASE, and UCO alignment

2. **Core Framework** (3 modules)
   - Base investigation framework and lifecycles
   - Hotline operations and report management
   - Enhanced NCMEC integration

3. **International Coordination & Global Frameworks** (4 modules)
   - Global coordination & cross-border operations
   - Professional development & capacity building
   - Prevention programs & education
   - International legal framework

4. **High-Priority Criminal Activities** (5+ modules)
   - CSAM production operations
   - Custodial relationships & positions of trust
   - Online grooming & enticement
   - Sexual extortion incidents
   - Athletic coaching exploitation

5. **Specialized Investigation** (5+ modules)
   - Undercover operations
   - Physical evidence & procurement
   - Tactical law enforcement operations
   - Multi-jurisdictional operations
   - Stranger abduction patterns

6. **Technical Support** (4+ modules)
   - Digital forensics
   - Content detection & classification
   - Technology platforms & service providers
   - Street-based recruitment patterns

7. **Victim Services & Task Force Management** (5+ modules)
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
@prefix cac-core: <https://cacontology.projectvic.org/core#> .
@prefix cacontology: <https://cacontology.projectvic.org#> .
@prefix cacontology-core: <https://cacontology.projectvic.org/core#> .

# Example: Create a CAC investigation with spine-anchored classes
:investigation-001 a cacontology:CACInvestigation ;
    cacontology:hasReport :report-001 ;
    cacontology:status "active" .

# Phases, Roles, Events inherit spine types through the class hierarchy
:phase-001 a cacontology:InitialPhase ;      # inherits cac-core:Phase
    rdfs:label "Cybertip Triage" .

:action-001 a cacontology:ReceiveCybertipAction ;  # inherits cac-core:InvestigativeAction
    rdfs:label "Process incoming NCMEC CyberTip" .
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

5. **For Developers**: Check out the [Developer Guide]({{ '/developers' | relative_url }}) and the [CASE/UCO SDK](https://github.com/vulnmaster/CASE-UCO-SDK) for adoption, mapping, and integration.

## Model investigation data with AI (recommended starting point)

If your starting point is a press release, report, or tool export (instead of a pre-structured database), the fastest way to begin is the CASE/UCO SDK MCP workflow:

- Guide: [Model with AI]({{ '/developers/ai-modeling' | relative_url }})
- CASE/UCO SDK (Python, C#, Java, Rust + MCP server): https://github.com/vulnmaster/CASE-UCO-SDK
- Latest release: https://github.com/Project-VIC-International/CAC-Ontology/releases/tag/v3.1.0
- Changelog: https://github.com/Project-VIC-International/CAC-Ontology/blob/main/CHANGELOG.md

## Integration with CASE and UCO

CAC Ontology is designed to work seamlessly with CASE and UCO. **v3.1.0 pins imports to CASE/UCO 1.5.0**. When using CAC Ontology, you can:

- Import CASE and UCO classes and properties
- Extend CASE investigation structures with CAC-specific concepts
- Maintain compatibility with existing CASE/UCO tools and workflows
- Use the [CASE/UCO SDK](https://github.com/vulnmaster/CASE-UCO-SDK) to generate validated JSON-LD graphs from application code or AI agents
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

