---
sidebar_position: 1
---

# Documentation

MACE generates professional documentation for both your compliance baseline and audit results. Export to multiple formats for different stakeholders and use cases.

<div className="themed-image">
  <img src="/img/screenshots/documentation-light.png" alt="MACE Documentation" className="img-light" />
  <img src="/img/screenshots/documentation-dark.png" alt="MACE Documentation" className="img-dark" />
</div>

## Two Types of Documentation

<table className="icon-table">
  <tr><td>📘</td><td><strong><a href="./baseline-docs">Baseline Documentation</a></strong> - Document your compliance baseline (rules, settings, rationale)</td></tr>
  <tr><td>📊</td><td><strong><a href="./audit-reports">Audit Reports</a></strong> - Export audit results (pass/fail, findings, recommendations)</td></tr>
</table>

## Available Formats

| Format | Baseline Docs | Audit Reports | Best For |
|--------|:-------------:|:-------------:|----------|
| **PDF** | Yes | Yes | Formal audits, management presentations |
| **HTML** | Yes | Yes | Web sharing, interactive review |
| **CSV** | Yes | Yes | Spreadsheet analysis, data import |
| **STIG CKL** | - | Yes | DISA compliance, STIG Viewer |

## Engine Support

Both engines can generate documentation:

| Engine | Baseline Docs | Audit Reports |
|--------|:-------------:|:-------------:|
| **MACE Engine** | Full support + branding | Full support + branding |
| **mSCP Engine** | Standard output | Standard output |

The MACE Engine adds additional customization options like custom logos, colors, and footer text.

## Quick Start

### Generate Baseline Documentation

1. Open your project
2. Click **Build**
3. Select documentation formats (HTML, PDF, CSV)
4. Configure metadata (author, version, etc.)
5. Build

### Generate Audit Reports

1. Run an audit
2. Click **Export**
3. Select report formats
4. Configure display options
5. Export

## Customization Options

### Metadata

| Field | Description |
|-------|-------------|
| **Title** | Document or report title |
| **Author** | Your name or organization |
| **Version** | Baseline version number |
| **Date** | Generation date |

### Display Options

| Option | Description |
|--------|-------------|
| **Include Disabled** | Show disabled rules in docs |
| **Include References** | Add compliance framework citations |
| **Include Charts** | Add visual statistics (PDF/HTML) |
| **Show Rule IDs** | Display MACE rule identifiers |

### Branding (MACE Engine)

| Option | Description |
|--------|-------------|
| **Custom Logo** | Your organization's logo |
| **Primary Color** | Accent color (hex value) |
| **Footer Text** | Custom footer message |
