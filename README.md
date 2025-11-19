# CAC Ontology Website

This is the Jekyll-based website for the CAC (Crimes Against Children) Ontology project, hosted at [site.cacontology.projectvic.org](https://site.cacontology.projectvic.org).

## Overview

The CAC Ontology Family is a comprehensive semantic framework for modeling child exploitation investigations, operations, legal processes, reporting, offender tradecraft, and digital forensics activities. This website provides documentation, examples, and resources for using the ontology.

## Repository

The main CAC Ontology repository is located at:
- [github.com/Project-VIC-International/CAC-Ontology](https://github.com/Project-VIC-International/CAC-Ontology)

## Website Structure

This Jekyll site mirrors the structure of [caseontology.org](https://caseontology.org) while focusing on CAC Ontology content:

- **Getting Started** - Introduction and quick start guide
- **Releases** - Version information and release history
- **Ontology** - Technical documentation and module information
- **Examples** - Real-world examples and use cases
- **Community** - Community information and participation
- **Resources** - Downloads, publications, and reference materials
- **Contact** - Contact information and support

## Local Development

### Prerequisites

- Ruby (2.7 or higher)
- Bundler gem

### Setup

1. Install dependencies:
   ```bash
   bundle install
   ```

2. Build and serve locally:
   ```bash
   bundle exec jekyll serve
   ```

3. View the site at `http://localhost:4000`

## Deployment

This site is configured for GitHub Pages deployment:

1. The site is built automatically when pushed to the repository
2. Custom domain is configured via `CNAME` file
3. GitHub Pages settings should point to the main branch (or docs folder if using that structure)

## Configuration

- `_config.yml` - Jekyll configuration
- `CNAME` - Custom domain configuration
- `Gemfile` - Ruby dependencies

## Content

Content is organized in Markdown files:
- Main pages in the root directory
- Section pages in subdirectories (ontology/, community/, resources/, etc.)
- Layouts in `_layouts/`
- Includes in `_includes/`
- Styles in `_sass/` and `assets/css/`

## License

This website content is licensed under the Apache License 2.0, consistent with the main CAC Ontology project.

## Contributing

To contribute to the website:

1. Fork the repository
2. Make your changes
3. Test locally with `bundle exec jekyll serve`
4. Submit a pull request

See the main repository's [CONTRIBUTING.md](https://github.com/Project-VIC-International/CAC-Ontology/blob/main/CONTRIBUTING.md) for guidelines.

