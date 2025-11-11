# Deployment Guide

This guide explains how to deploy the CAC Ontology website to GitHub Pages.

## Prerequisites

- A GitHub repository (either the main CAC-Ontology repo or a separate website repo)
- GitHub Pages enabled in repository settings
- Custom domain configured (cacontology.projectvic.org)

## Deployment Options

### Option 1: GitHub Actions (Recommended)

The repository includes a GitHub Actions workflow (`.github/workflows/pages.yml`) that automatically builds and deploys the site when changes are pushed to the `main` branch.

**Steps:**

1. Ensure the workflow file exists at `.github/workflows/pages.yml`
2. Push your changes to the `main` branch
3. GitHub Actions will automatically:
   - Build the Jekyll site
   - Deploy to GitHub Pages
   - Use the custom domain from the `CNAME` file

**To enable:**
- Go to repository Settings → Pages
- Set Source to "GitHub Actions"
- The workflow will handle the rest

### Option 2: Manual Deployment

If you prefer to deploy manually:

1. Build the site locally:
   ```bash
   bundle exec jekyll build
   ```

2. Push the `_site` directory to the `gh-pages` branch:
   ```bash
   git subtree push --prefix _site origin gh-pages
   ```

3. Configure GitHub Pages to use the `gh-pages` branch

## Custom Domain Configuration

The `CNAME` file contains the custom domain: `cacontology.projectvic.org`

**DNS Configuration:**

You'll need to configure DNS records for `cacontology.projectvic.org`:

1. Add a CNAME record pointing to your GitHub Pages URL:
   ```
   cacontology.projectvic.org → yourusername.github.io
   ```

2. Or add A records pointing to GitHub's IP addresses:
   ```
   cacontology.projectvic.org → 185.199.108.153
   cacontology.projectvic.org → 185.199.109.153
   cacontology.projectvic.org → 185.199.110.153
   cacontology.projectvic.org → 185.199.111.153
   ```

**GitHub Configuration:**

1. Go to repository Settings → Pages
2. Under "Custom domain", enter: `cacontology.projectvic.org`
3. Check "Enforce HTTPS" (after DNS propagates)

## Local Testing

Before deploying, test the site locally:

```bash
# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# View at http://localhost:4000
```

## Troubleshooting

### Build Failures

- Check GitHub Actions logs for errors
- Verify all dependencies are in `Gemfile`
- Ensure `_config.yml` is valid YAML

### Custom Domain Issues

- Verify DNS records are correct
- Wait for DNS propagation (can take up to 48 hours)
- Check GitHub Pages settings for domain configuration
- Ensure `CNAME` file is in the repository root

### Styling Issues

- Clear browser cache
- Verify SCSS files are compiling correctly
- Check that `assets/css/main.scss` imports custom styles

## Repository Structure

For GitHub Pages deployment, the site can be:

1. **In the main branch** (root or `docs/` folder)
2. **In a separate branch** (`gh-pages`)
3. **Built via GitHub Actions** (recommended)

The current setup uses GitHub Actions for automatic deployment.

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

