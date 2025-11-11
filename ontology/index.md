---
layout: default
title: Ontology
permalink: /ontology
---

# Ontology Documentation

> **📚 Detailed Documentation Available**: For comprehensive technical documentation, visit the [hosted documentation site](https://ontology.cacontology.projectvic.org/){:target="_blank" rel="noopener noreferrer"}. You can also explore the [GitHub repository](https://github.com/Project-VIC-International/CAC-Ontology){:target="_blank" rel="noopener noreferrer"} for source code, examples, and additional resources.

The CAC (Crimes Against Children) Ontology Family provides a comprehensive semantic framework for modeling child exploitation investigations. This section provides detailed documentation about the ontology structure, modules, and usage.

## Overview

The CAC Ontology Family consists of **30+ specialized modules** organized into six domain areas, enhanced with comprehensive gUFO (Unified Foundational Ontology) integration for improved semantic precision, temporal modeling, and validation capabilities.

**Namespace**: `https://cacontology.projectvic.org`

## Ontology Modules

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
- **`cacontology-sentencing.ttl`** - Legal outcomes & sentencing
- **`cacontology-specialized-units.ttl`** - Specialized units & advanced capabilities
- **`cacontology-sex-offender-registry.ttl`** - Sex offender registry management

### Validation Components (20+ modules)

- Comprehensive SHACL validation shapes for all major modules
- Cross-reference validation and business rule enforcement

## Namespace and Prefixes

All ontology modules use the standardized namespace structure:

- **Base Namespace**: `https://cacontology.projectvic.org`
- **Module Namespaces**: `https://cacontology.projectvic.org/{module-name}#`
- **Prefix Pattern**: `cacontology-{module-name}:`

### Example Usage

```turtle
@prefix cacontology: <https://cacontology.projectvic.org#> .
@prefix cacontology-core: <https://cacontology.projectvic.org/core#> .
@prefix cacontology-taskforce: <https://cacontology.projectvic.org/taskforce#> .
```

## Integration with CASE and UCO

CAC Ontology extends and integrates with:

- **CASE Ontology**: Cyber-investigation Analysis Standard Expression
- **UCO**: Unified Cyber Ontology
- **gUFO**: Unified Foundational Ontology

This integration ensures compatibility with existing cyber investigation tools and workflows while providing specialized capabilities for crimes against children investigations.

## Documentation Resources

- **[Versioning](/ontology/versioning)** - Version information and release history
- **[Full Documentation](https://ontology.cacontology.projectvic.org/){:target="_blank" rel="noopener noreferrer"}** - Complete technical documentation
- **[Entities A-Z](https://project-vic-international.github.io/cacontology.projectvic.org/entities-az.html)** - Complete entity reference

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

