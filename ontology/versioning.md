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

The current version (**v3.1.0**) of CAC Ontology includes:

- 35+ specialized ontology modules (97 ontology files total)
- Comprehensive SHACL validation (167 validations in the v3.1.0 release suite)
- Semantic Spine (`cac-core:` namespace) with bridge modules and ConditioningPhase
- Full gUFO integration mediated through spine and bridge layers (imports pinned to **gUFO 1.0.0**)
- CASE/UCO compatibility via dedicated bridge modules (imports pinned to **CASE/UCO 1.5.0**)
- 2,209 classes and 2,527 properties
- Stable **unversioned ontology document IRIs**, with versioning expressed through `owl:versionIRI`

## Version History

For detailed version history, see:

- [Releases Page](/releases) - Release information and downloads
- [CHANGELOG.md](https://github.com/Project-VIC-International/CAC-Ontology/blob/main/CHANGELOG.md) - Detailed changelog in the repository
- [v3.1.0 GitHub release](https://github.com/Project-VIC-International/CAC-Ontology/releases/tag/v3.1.0)

## Module Versioning

Individual modules within the CAC Ontology Family may have their own version numbers, but all modules are released together as part of the main ontology family version.

## Compatibility

### Backward Compatibility

- Minor and patch releases maintain backward compatibility
- Major releases may include breaking changes (documented in release notes)
- Deprecated features are marked and supported for at least one major version

### CASE/UCO Compatibility

All versions maintain compatibility with:
- **CASE Ontology**: Full compatibility with CASE investigation structures (**1.5.0** pin in v3.1.0)
- **UCO**: Compatible with Unified Cyber Ontology foundational concepts (**1.5.0** pin in v3.1.0)
- **gUFO**: Integration with Unified Foundational Ontology patterns (**1.0.0** pin in v3.1.0)

## Migration Guides

When upgrading between major versions, migration guides will be provided in the release notes and documentation. For v3.1.0 specifically, note the move to unversioned ontology document IRIs (versioning remains on `owl:versionIRI`) and the pinned CASE/UCO 1.5.0 / gUFO 1.0.0 import closure.

## Version Information in Ontology Files

Ontology files include version information in their metadata. From v3.1.0, the ontology document IRI is **unversioned**, and the version is carried by `owl:versionIRI`:

```turtle
@prefix owl: <http://www.w3.org/2002/07/owl#> .

<https://cacontology.projectvic.org/core>
    a owl:Ontology ;
    owl:versionIRI <https://cacontology.projectvic.org/core/3.1.0> ;
    owl:versionInfo "3.1.0" .
```

## Support

For questions about versioning or compatibility:

- Check the [Documentation](/ontology/documentation)
- Review [GitHub Issues](https://github.com/Project-VIC-International/CAC-Ontology/issues)
- Contact the [Community](/community)
