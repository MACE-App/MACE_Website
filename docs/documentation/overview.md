---
sidebar_position: 1
description: Generate professional compliance documentation in PDF or HTML format with custom branding.
---

# Documentation

<div className="editor-intro">
  <p className="editor-intro__lead">Generate professional compliance documentation in PDF or HTML format.</p>
  <p className="editor-intro__sub">Create guides for auditors, technical teams, or management with customizable content and branding.</p>
</div>

<div className="themed-image themed-image--large">
  <img src="/img/screenshots/documentation-light.webp" alt="MACE Documentation" className="img-light" />
  <img src="/img/screenshots/documentation-dark.webp" alt="MACE Documentation" className="img-dark" />
</div>

## What Does Documentation Do?

Documentation generates comprehensive guides from your compliance baseline. Instead of manually writing documentation, MACE creates professional documents that include rule details, remediation steps, configuration profiles, and compliance references.

<div className="explanation-box">
  <h4>Documentation vs Build vs Audit</h4>
  <p><strong>Build</strong> creates deployable files (scripts, profiles, DDM) for your MDM.</p>
  <p><strong>Audit</strong> checks a Mac's current compliance status.</p>
  <p><strong>Documentation</strong> creates human-readable guides explaining your compliance requirements.</p>
</div>

## Output Formats

<div className="output-types-grid">
  <div className="output-type-card">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">📄</span>
      <h3>PDF</h3>
    </div>
    <p>Professional document format. Ideal for sharing with auditors, printing for meetings, or archiving compliance documentation. Supports pagination, page numbers, and clickable table of contents.</p>
  </div>
  <div className="output-type-card">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">🌐</span>
      <h3>HTML</h3>
    </div>
    <p>Web-based format. Opens in any browser, easy to share via email, and works well for internal team reference. Self-contained single file with all styles embedded.</p>
  </div>
</div>

## Document Types

MACE offers three pre-configured document types, each designed for a different audience:

<div className="engine-comparison">
  <div className="engine-card">
    <div className="engine-card__header">
      <span className="engine-card__icon">📋</span>
      <h3>Compliance Guide</h3>
    </div>
    <p>Full documentation for compliance teams and auditors.</p>
    <ul>
      <li>Rule discussions and rationale</li>
      <li>Fix commands and remediation steps</li>
      <li>Configuration profiles and DDM info</li>
      <li>Compliance framework references</li>
      <li>Section summaries with statistics</li>
    </ul>
  </div>
  <div className="engine-card">
    <div className="engine-card__header">
      <span className="engine-card__icon">🔧</span>
      <h3>Technical Reference</h3>
    </div>
    <p>Implementation-focused for IT administrators.</p>
    <ul>
      <li>Check and fix commands</li>
      <li>Configuration profile payloads</li>
      <li>DDM declaration details</li>
      <li>Technical implementation notes</li>
      <li>Command-focused format</li>
    </ul>
  </div>
  <div className="engine-card">
    <div className="engine-card__header">
      <span className="engine-card__icon">📊</span>
      <h3>Executive Summary</h3>
    </div>
    <p>High-level overview for management.</p>
    <ul>
      <li>Compliance scope and coverage</li>
      <li>Key statistics and metrics</li>
      <li>Minimal technical details</li>
      <li>Stakeholder-friendly format</li>
      <li>Quick overview of requirements</li>
    </ul>
  </div>
</div>

## Generating Documentation

<div className="build-steps">
  <div className="build-step">
    <span className="build-step__number">1</span>
    <div className="build-step__content">
      <strong>Open your project</strong>
      <span>Load a compliance project with your selected baseline and rules</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">2</span>
    <div className="build-step__content">
      <strong>Click Documentation</strong>
      <span>Use the toolbar button to open the Documentation window</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">3</span>
    <div className="build-step__content">
      <strong>Select engine</strong>
      <span>Choose M.A.C.E. Documentation (recommended)</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">4</span>
    <div className="build-step__content">
      <strong>Choose document type</strong>
      <span>Select Compliance Guide, Technical Reference, or Executive Summary</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">5</span>
    <div className="build-step__content">
      <strong>Select output format</strong>
      <span>Choose PDF or HTML</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">6</span>
    <div className="build-step__content">
      <strong>Configure options</strong>
      <span>Customize content, structure, and branding</span>
    </div>
  </div>
  <div className="build-step">
    <span className="build-step__number">7</span>
    <div className="build-step__content">
      <strong>Click Generate</strong>
      <span>Choose where to save and MACE creates your document</span>
    </div>
  </div>
</div>

## Documentation Engines

<div className="engine-comparison">
  <div className="engine-card engine-card--primary">
    <div className="engine-card__header">
      <span className="engine-card__icon">⚡</span>
      <h3>M.A.C.E. Documentation Engine</h3>
    </div>
    <p>The recommended engine. Fast, full-featured, and built into MACE.</p>
    <ul>
      <li>Professional PDF and HTML output</li>
      <li>Clickable table of contents</li>
      <li>Custom branding and colors</li>
      <li>All content options available</li>
    </ul>
  </div>
  <div className="engine-card">
    <div className="engine-card__header">
      <span className="engine-card__icon">🐍</span>
      <h3>mSCP Documentation Engine</h3>
    </div>
    <p>Uses the original mSCP Python scripts. For organizations already using mSCP command-line tools.</p>
    <ul>
      <li><em>(Planned for future release)</em></li>
    </ul>
  </div>
</div>

## What's in the Document?

A generated document includes multiple sections organized for easy reference:

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📖</span>
      <strong>Cover Page</strong>
    </div>
    <p>Document title, compliance framework, version, author, and organization. Sets the professional tone for the document.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📑</span>
      <strong>Table of Contents</strong>
    </div>
    <p>Clickable navigation to all sections. Optional detailed view with numbered sections and all rules listed.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📋</span>
      <strong>Foreword & Scope</strong>
    </div>
    <p>Introduction explaining what platform and compliance framework the document covers.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📊</span>
      <strong>Section Summaries</strong>
    </div>
    <p>Statistics for each section showing total rules, configurable rules, manual rules, and more.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📝</span>
      <strong>Rule Details</strong>
    </div>
    <p>Each rule with its ID, title, discussion, commands, profiles, and references. The core content of the document.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔍</span>
      <strong>Quick Reference Table</strong>
    </div>
    <p>Appendix table listing all rules at a glance for quick lookup.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📚</span>
      <strong>Glossary & Acronyms</strong>
    </div>
    <p>Definitions of technical terms and abbreviations used in the document.</p>
  </div>
</div>
