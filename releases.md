---
layout: default
title: Releases
permalink: /releases
---

# Releases

This page tracks releases and version history of the CAC Ontology Family.

## Latest Release

The latest stable release of CAC Ontology is available on GitHub:

- Releases: https://github.com/Project-VIC-International/CAC-Ontology/releases

### Latest: v3.1.0 (Aug 9, 2026)

v3.1.0 expands investigation modeling while strengthening interoperability, validation, and agent guidance. It pins CASE/UCO imports to **1.5.0** and gUFO imports to **1.0.0**, and directs AI-assisted modeling through the [CASE/UCO SDK MCP Server](https://github.com/vulnmaster/CASE-UCO-SDK).

- Release tag: https://github.com/Project-VIC-International/CAC-Ontology/releases/tag/v3.1.0
- Changelog entry: https://github.com/Project-VIC-International/CAC-Ontology/blob/v3.1.0/CHANGELOG.md

Key deliverables:

- **Conditioning macro-phase** (`cac-core:ConditioningPhase`) and **CaseLinker** exploitation-lifecycle state-machine extensions
- **Legal-outcomes expansion**: charging instruments, conviction records, supervised-release conditions, and payment schedules
- **NCMEC modeling**: structured aggregate-report statistics, CyberTip identifier extraction, and jurisdiction-routing concepts
- **Attribution & vulnerability**: account/IP correlation evidence, fabricated personas, image-leak threats, victim vulnerability contexts, and core case-identification properties
- **Stable unversioned ontology document IRIs**, with versioning expressed through `owl:versionIRI`
- **Pinned imports**: CASE/UCO **1.5.0**, gUFO **1.0.0**
- **2,209 classes** and **2,527 properties** across **97** ontology files
- **61** example knowledge graphs and **32** SPARQL analytics suites
- Validation: 167 SHACL validations, 13 focused unit tests, and 226 top-level SPARQL query blocks parsed

### v3.0.0 (Mar 21, 2026)

v3.0.0 is a **major architectural release** introducing the **Semantic Spine** — a three-layer architecture (`cac-core-spine` → `cac-core` → domain modules) with dedicated bridge modules for gUFO, UCO, and CASE alignment.

- Release tag: https://github.com/Project-VIC-International/CAC-Ontology/releases/tag/v3.0.0
- Changelog entry: https://github.com/Project-VIC-International/CAC-Ontology/blob/main/CHANGELOG.md

Key deliverables:

- **Semantic Spine** (`cacontology-core-spine.ttl`): 7 foundational abstract classes (`Entity`, `EnduringEntity`, `Event`, `Situation`, `Role`, `Phase`, and branches) that provide a stable, top-level class hierarchy for the entire ontology family
- **Bridge modules**: `cacontology-bridge-gufo.ttl`, `cacontology-bridge-case.ttl`, `cacontology-bridge-uco.ttl` for external ontology alignment via `skos:exactMatch`
- **Module renaming for clarity**: `ai-generated-content` → `ai-csam`, `soe` → `sadistic-online-exploitation`, `sentencing` → `legal-outcomes`
- **Temporal lifecycle module** with investigation phase modeling
- **97 ontology modules** validated with SHACL shapes
- **56 example knowledge graphs** covering real-world cases
- **28 SPARQL query files**
- **2,154 classes** and **2,443 properties** across all modules
- All files updated to `owl:versionInfo "3.0.0"`

### v2.12.0 (Mar 13, 2026)

v2.12.0 adds a dedicated **Victim Recantation** module for modeling child-victim statement change dynamics, recantation risk factors, coercive pressure, and post-recantation investigative response.

- Release tag: https://github.com/Project-VIC-International/CAC-Ontology/releases/tag/v2.12.0

Key deliverables:

- New module: `cacontology-recantation.ttl` — statement lifecycle vocabulary (`VictimStatement`, `DisclosureStatement`, `RecantationStatement`, etc.), context/risk vocabulary, and investigative response vocabulary
- Extended modules: `cacontology-case-management.ttl` (accommodation and testimony-planning concepts), `cacontology-victim-impact.ttl` (support concepts), `cacontology-training.ttl` (recantation response training), `cacontology-custodial.ttl` (contact restriction)
- New SHACL shapes: `cacontology-recantation-shapes.ttl`
- New example KG: `coursing-justice-recantation-101-example.ttl`
- New SPARQL suite: `coursing-justice-recantation-101-analytics.rq`

### v2.11.0 (Feb 20, 2026)

v2.11.0 adds the **Knowledge Synthesis** module and hardens the SR2026.1 TF-CSEA systematic review example knowledge graph with audit-safe evidence alignment.

- Release tag: https://github.com/Project-VIC-International/CAC-Ontology/releases/tag/v2.11.0

Key deliverables:

- New module: `cacontology-synthesis.ttl` — report/work vs artifact split, evidence pointer conventions, hash semantics helpers
- New SHACL shapes: `cacontology-synthesis-shapes.ttl` — evidence pointer validation (line-range or page-range), hash validation (UCO `HashFacet` or legacy inline)
- New example KG: `ipie-sr2026-1-tf-csea-systematic-review-example.ttl`
- New SPARQL suite: `ipie-sr2026-1-tf-csea-systematic-review-analytics.rq`

### v2.10.0 (Feb 16, 2026)

v2.10.0 adds explicit modeling for **Emergency Disclosure Requests (EDRs)** used in time-sensitive missing-child investigations.

- Release tag: https://github.com/Project-VIC-International/CAC-Ontology/releases/tag/v2.10.0

Key deliverables:

- New/updated ontology concepts in the platforms module (`cacontology-platforms.ttl`)
- Updated SHACL shapes for validation (`cacontology-platforms-shapes.ttl`)
- New example knowledge graph: `police1-modern-missing-child-investigations-2026-example.ttl`
- New analytics suite: `police1-modern-missing-child-investigations-2026-analytics.rq`

If you are new, the easiest way to see "what the ontology does" is to open a recent example suite and run its SPARQL queries against the example `.ttl` graph.

## Version History

For detailed version history and changelog, see the [CHANGELOG.md](https://github.com/Project-VIC-International/CAC-Ontology/blob/main/CHANGELOG.md) file in the repository.

## Release Information

### Current Version

The CAC Ontology Family follows semantic versioning principles. The current version (v3.1.0) includes:

- **35+ specialized ontology modules** organized into six domain areas plus a core semantic spine and bridge layer
- **Comprehensive SHACL validation** (167 validations in the v3.1.0 release suite)
- **Semantic Spine** (`cac-core:` namespace) — stable, top-level class hierarchy mediating all alignment to gUFO, UCO, and CASE, including ConditioningPhase
- **Bridge modules** for gUFO, CASE, and UCO alignment
- **Pinned CASE/UCO 1.5.0** and **gUFO 1.0.0** imports
- **Stable unversioned ontology document IRIs** with `owl:versionIRI` versioning
- **97 ontology files** with 2,209 classes and 2,527 properties
- **AI-assisted modeling** via the [CASE/UCO SDK MCP Server](https://github.com/vulnmaster/CASE-UCO-SDK)

### Release Types

- **Stable Releases**: Production-ready versions with full documentation and validation
- **Development Releases**: Pre-release versions for testing and feedback
- **Archived Releases**: Historical versions maintained for compatibility

## Download

### GitHub Repository

All releases are available from the [CAC-Ontology GitHub repository](https://github.com/Project-VIC-International/CAC-Ontology):

```bash
git clone https://github.com/Project-VIC-International/CAC-Ontology.git
```

### Ontology Files

Ontology files are located in the canonical `ontology/` directory:

- https://github.com/Project-VIC-International/CAC-Ontology/tree/main/ontology

### Examples

Example files based on real-world cases are available in:

- Examples (canonical): https://github.com/Project-VIC-International/CAC-Ontology/tree/main/examples_knowledge_graphs
- SPARQL analytics suites (canonical): https://github.com/Project-VIC-International/CAC-Ontology/tree/main/example_SPARQL_queries

## Under Development

### Upcoming Features

- Additional specialized modules for emerging investigation patterns
- Enhanced validation rules and business logic
- Expanded international coordination frameworks
- Improved documentation and tutorials

### Contributing

To contribute to the development of CAC Ontology:

1. Review the [Contributing Guidelines](https://github.com/Project-VIC-International/CAC-Ontology/blob/main/CONTRIBUTING.md)
2. Check open [Issues](https://github.com/Project-VIC-International/CAC-Ontology/issues) and [Pull Requests](https://github.com/Project-VIC-International/CAC-Ontology/pulls)
3. Join the [Community](/community) to discuss contributions

## Release Notes

For detailed release notes, visit the [GitHub Releases page](https://github.com/Project-VIC-International/CAC-Ontology/releases) or check the repository's CHANGELOG.md file.

## Versioning

CAC Ontology follows [Semantic Versioning](https://semver.org/) principles:

- **Major version** (X.0.0): Breaking changes or major architectural updates
- **Minor version** (0.X.0): New modules, features, or significant additions
- **Patch version** (0.0.X): Bug fixes, corrections, and minor updates

## Compatibility

### CASE/UCO Compatibility

All releases maintain compatibility with:
- **CASE Ontology**: Full compatibility with CASE investigation structures (v3.1.0 pins imports to **CASE 1.5.0**)
- **UCO**: Compatible with Unified Cyber Ontology foundational concepts (v3.1.0 pins imports to **UCO 1.5.0**)
- **gUFO**: Integration with Unified Foundational Ontology patterns (v3.1.0 pins imports to **gUFO 1.0.0**)

### Backward Compatibility

- Minor and patch releases maintain backward compatibility
- Major releases may include breaking changes (documented in release notes)
- Deprecated features are marked and supported for at least one major version

## Support

For questions about releases or version compatibility:

- Check the [Documentation](/ontology)
- Review [GitHub Issues](https://github.com/Project-VIC-International/CAC-Ontology/issues)
- Contact the [Community](/community)

