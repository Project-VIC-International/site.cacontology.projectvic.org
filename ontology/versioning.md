---
layout: default
title: Versioning
permalink: /ontology/versioning
---

# Versioning

This page provides information about versioning in the CAC Ontology Family.

## Versioning Strategy

CAC Ontology follows [Semantic Versioning](https://semver.org/) principles:

- **Major version** (X.0.0): Breaking changes or major architectural updates
- **Minor version** (0.X.0): New modules, features, or significant additions
- **Patch version** (0.0.X): Bug fixes, corrections, and minor updates

## Current Version

The current version of CAC Ontology includes:

- 30+ ontology modules
- 20+ SHACL validation modules
- Full gUFO integration
- CASE/UCO compatibility

## Version History

For detailed version history, see:

- [Releases Page](/releases) - Release information and downloads
- [CHANGELOG.md](https://github.com/Project-VIC-International/CAC-Ontology/blob/main/CHANGELOG.md) - Detailed changelog in the repository

## Module Versioning

Individual modules within the CAC Ontology Family may have their own version numbers, but all modules are released together as part of the main ontology family version.

## Compatibility

### Backward Compatibility

- Minor and patch releases maintain backward compatibility
- Major releases may include breaking changes (documented in release notes)
- Deprecated features are marked and supported for at least one major version

### CASE/UCO Compatibility

All versions maintain compatibility with:
- **CASE Ontology**: Full compatibility with CASE investigation structures
- **UCO**: Compatible with Unified Cyber Ontology foundational concepts
- **gUFO**: Integration with Unified Foundational Ontology patterns

## Migration Guides

When upgrading between major versions, migration guides will be provided in the release notes and documentation.

## Version Information in Ontology Files

Ontology files include version information in their metadata:

```turtle
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix dcterms: <http://purl.org/dc/terms/> .

<https://cacontology.projectvic.org/core> 
    dcterms:version "1.0.0" ;
    owl:versionInfo "1.0.0" .
```

## Support

For questions about versioning or compatibility:

- Check the [Documentation](/ontology/documentation)
- Review [GitHub Issues](https://github.com/Project-VIC-International/CAC-Ontology/issues)
- Contact the [Community](/community)

