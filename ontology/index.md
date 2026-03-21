---
layout: default
title: Ontology
permalink: /ontology
---

# Ontology Documentation

> **📚 Detailed Documentation Available**: For comprehensive technical documentation, visit the [hosted documentation site](https://cacontology.projectvic.org/){:target="_blank" rel="noopener noreferrer"}. You can also explore the [GitHub repository](https://github.com/Project-VIC-International/CAC-Ontology){:target="_blank" rel="noopener noreferrer"} for source code, examples, and additional resources.

The CAC (Crimes Against Children) Ontology Family provides a comprehensive semantic framework for modeling child exploitation investigations. This section provides detailed documentation about the ontology structure, modules, and usage.

## Overview

The CAC Ontology Family consists of **35+ specialized modules** organized into six domain areas plus a core semantic spine and bridge layer, enhanced with comprehensive gUFO (Unified Foundational Ontology) integration for improved semantic precision, temporal modeling, and validation capabilities. **v3.0.0** introduces the **Semantic Spine** (`cac-core:` namespace) — a stable, top-level class hierarchy that mediates all alignment to gUFO, UCO, and CASE, giving domain modules a single, predictable anchoring layer.

**Namespace**: `https://cacontology.projectvic.org`
**Spine Namespace**: `https://cacontology.projectvic.org/core#` (prefix `cac-core:`)

## Where the canonical ontology lives

CAC Ontology evolves quickly. The canonical source of truth is the main GitHub repository:

- Ontology modules (canonical): https://github.com/Project-VIC-International/CAC-Ontology/tree/main/ontology
- SHACL shapes (canonical): https://github.com/Project-VIC-International/CAC-Ontology/tree/main/ontology

## Built on the Linux Foundation Cyber Domain Ontology (CDO)

CAC Ontology extends UCO and CASE, which are part of the Linux Foundation Cyber Domain Ontology ecosystem:

- https://cyberdomainontology.org/

## Ontology Modules

### Semantic Spine & Bridges (5 modules)

- **`cacontology-core-spine.ttl`** - Top-level class hierarchy (`cac-core:Entity`, `EnduringEntity`, `Event`, `Situation`, `Role`, `Phase` and branches)
- **`cacontology-core-spine-shapes.ttl`** - SHACL shapes validating spine class constraints
- **`cacontology-bridge-gufo.ttl`** - Bridge to gUFO foundational ontology
- **`cacontology-bridge-case.ttl`** - Bridge to CASE investigation ontology
- **`cacontology-bridge-uco.ttl`** - Bridge to Unified Cyber Ontology

### Core Framework (3 modules)

- **`cacontology-core.ttl`** - Base investigation framework and lifecycles
- **`cacontology-hotlines-core.ttl`** - Hotline operations and report management
- **`cacontology-us-ncmec.ttl`** - Enhanced NCMEC integration and tip analysis

### International Coordination & Global Frameworks (4 modules)

- **`cacontology-international.ttl`** - Global coordination & cross-border operations
- **`cacontology-training.ttl`** - Professional development & capacity building
- **`cacontology-prevention.ttl`** - Prevention programs & education
- **`cacontology-legal-harmonization.ttl`** - International legal framework

### High-Priority Criminal Activities (5+ modules)

- **`cacontology-production.ttl`** - CSAM production operations
- **`cacontology-custodial.ttl`** - Custodial relationships & positions of trust
- **`cacontology-grooming.ttl`** - Online grooming & enticement
- **`cacontology-sextortion.ttl`** - Sexual extortion incidents
- **`cacontology-athletic-exploitation.ttl`** - Athletic coaching exploitation

### Specialized Investigation (5+ modules)

- **`cacontology-undercover.ttl`** - Undercover operations
- **`cacontology-physical-evidence.ttl`** - Physical evidence & procurement
- **`cacontology-tactical.ttl`** - Tactical law enforcement operations
- **`cacontology-multi-jurisdiction.ttl`** - Multi-jurisdictional operations
- **`cacontology-stranger-abduction.ttl`** - Stranger abduction patterns

### Technical Support (4+ modules)

- **`cacontology-forensics.ttl`** - Digital forensics
- **`cacontology-detection.ttl`** - Content detection & classification
- **`cacontology-platforms.ttl`** - Technology platforms & service providers
- **`cacontology-street-recruitment.ttl`** - Street-based recruitment patterns

### Victim Services & Task Force Management (5+ modules)

- **`cacontology-victim-impact.ttl`** - Victim impact assessment & recovery
- **`cacontology-taskforce.ttl`** - CAC task force organization
- **`cacontology-legal-outcomes.ttl`** - Legal outcomes & sentencing
- **`cacontology-specialized-units.ttl`** - Specialized units & advanced capabilities
- **`cacontology-sex-offender-registry.ttl`** - Sex offender registry management

### Validation Components (30 modules)

- Comprehensive SHACL validation shapes for all major modules, including spine shapes
- Cross-reference validation and business rule enforcement
- SPARQL-based constraints for advanced validation

## What's new in v3.0.0

v3.0.0 is a **major architectural release** that introduces:

- **Semantic Spine** (`cac-core:` namespace): A stable, top-level class hierarchy with 7 foundational abstract classes that all domain modules anchor to
- **Bridge modules**: Dedicated `bridge-gufo`, `bridge-case`, and `bridge-uco` modules for external ontology alignment via `skos:exactMatch`
- **Module renaming for clarity**: `ai-generated-content` → `ai-csam`, `soe` → `sadistic-online-exploitation`, `sentencing` → `legal-outcomes`
- **Temporal lifecycle module** with investigation phase modeling
- **56 example knowledge graphs** and **28 SPARQL query files**
- Corrected subclass hierarchies across all domain modules

### Recent releases (2.10 - 2.12)

- **v2.12.0**: Victim Recantation module — statement lifecycle, risk factors, coercive pressure, and post-recantation response
- **v2.11.0**: Knowledge Synthesis module — report/artifact modeling with audit-safe evidence alignment
- **v2.10.0**: Emergency Disclosure Requests for missing-child investigations

## Namespace and Prefixes

All ontology modules use the standardized namespace structure:

- **Base Namespace**: `https://cacontology.projectvic.org`
- **Spine Namespace**: `https://cacontology.projectvic.org/core#` (prefix `cac-core:`)
- **Module Namespaces**: `https://cacontology.projectvic.org/{module-name}#`
- **Prefix Pattern**: `cacontology-{module-name}:`

### Example Usage

```turtle
@prefix cac-core: <https://cacontology.projectvic.org/core#> .
@prefix cacontology: <https://cacontology.projectvic.org#> .
@prefix cacontology-core: <https://cacontology.projectvic.org/core#> .
@prefix cacontology-taskforce: <https://cacontology.projectvic.org/taskforce#> .

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

## Integration with CASE, UCO, and gUFO

CAC Ontology extends and integrates with:

- **CASE Ontology**: Cyber-investigation Analysis Standard Expression
- **UCO**: Unified Cyber Ontology
- **gUFO**: Unified Foundational Ontology

In v3.0.0, all alignment to these external ontologies is mediated through the **Semantic Spine** and **Bridge modules**, giving domain modules a single, predictable anchoring layer rather than direct cross-ontology subclassing.

## Documentation Resources

- **[Versioning](/ontology/versioning)** - Version information and release history
- **[Full Documentation](https://cacontology.projectvic.org/){:target="_blank" rel="noopener noreferrer"}** - Complete technical documentation
- **[Entities A-Z](https://cacontology.projectvic.org/entities-az.html)** - Complete entity reference

## Repository Documentation

Additional documentation is available in the [GitHub repository](https://github.com/Project-VIC-International/CAC-Ontology){:target="_blank" rel="noopener noreferrer"}:

- **Architecture**: `docs/architecture.md` - Complete system architecture and module relationships
- **Design**: `docs/design.md` - Design principles and technical specifications
- **User Guide**: `docs/user_doc.md` - User documentation and examples
- **Product Requirements**: `docs/PRD.md` - Product requirements and specifications
- **Glossary**: `docs/glossary.md` - Terminology and acronyms

## Quick Links

- [Getting Started](/getting-started) - Introduction and quick start guide
- [Examples](/examples) - Real-world examples and use cases
- [Resources](/resources) - Downloads and reference materials
