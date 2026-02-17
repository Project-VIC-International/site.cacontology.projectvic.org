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

### Latest: v2.10.0 (Feb 16, 2026)

v2.10.0 adds explicit modeling for **Emergency Disclosure Requests (EDRs)** used in time-sensitive missing-child investigations, plus a new example knowledge graph and SPARQL analytics suite.

- Release tag: https://github.com/Project-VIC-International/CAC-Ontology/releases/tag/v2.10.0
- Changelog entry: https://github.com/Project-VIC-International/CAC-Ontology/blob/main/CHANGELOG.md

Key deliverables introduced in the v2.10.0 release notes include:

- New/updated ontology concepts in the platforms module (`cacontology-platforms.ttl`)
- Updated SHACL shapes for validation (`cacontology-platforms-shapes.ttl`)
- New example knowledge graph: `police1-modern-missing-child-investigations-2026-example.ttl`
- New analytics suite: `police1-modern-missing-child-investigations-2026-analytics.rq`

If you are new, the easiest way to see "what the ontology does" is to open a recent example suite and run its SPARQL queries against the example `.ttl` graph.

## Version History

For detailed version history and changelog, see the [CHANGELOG.md](https://github.com/Project-VIC-International/CAC-Ontology/blob/main/CHANGELOG.md) file in the repository.

## Release Information

### Current Version

The CAC Ontology Family follows semantic versioning principles. The current version includes:

- **30+ ontology modules** covering all major domain areas
- **20+ SHACL validation modules** with comprehensive business rules
- **gUFO integration** for enhanced semantic precision
- **Full CASE/UCO compatibility** for seamless integration

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
- **CASE Ontology**: Full compatibility with CASE investigation structures
- **UCO**: Compatible with Unified Cyber Ontology foundational concepts
- **gUFO**: Integration with Unified Foundational Ontology patterns

### Backward Compatibility

- Minor and patch releases maintain backward compatibility
- Major releases may include breaking changes (documented in release notes)
- Deprecated features are marked and supported for at least one major version

## Support

For questions about releases or version compatibility:

- Check the [Documentation](/ontology)
- Review [GitHub Issues](https://github.com/Project-VIC-International/CAC-Ontology/issues)
- Contact the [Community](/community)

