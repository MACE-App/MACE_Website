---
sidebar_position: 3
---

# Overview

MACE gives you a complete workflow for managing macOS security compliance. Here's how the pieces fit together.

## The MACE Workflow

Build once, test on a small fleet, then deploy everywhere. This workflow catches issues early, before they reach production.

<div className="workflow-container">
  <div className="workflow-section">
    <div className="workflow-phase-label">Setup</div>
    <div className="workflow-cards">
      <div className="workflow-card">
        <div className="workflow-card__icon">📁</div>
        <div className="workflow-card__title">Create Project</div>
        <div className="workflow-card__desc">Choose platform & baseline</div>
      </div>
      <div className="workflow-arrow">→</div>
      <div className="workflow-card">
        <div className="workflow-card__icon">🔍</div>
        <div className="workflow-card__title">Customize Rules</div>
        <div className="workflow-card__desc">Enable, disable, edit ODVs</div>
      </div>
      <div className="workflow-arrow">→</div>
      <div className="workflow-card">
        <div className="workflow-card__icon">🔨</div>
        <div className="workflow-card__title">Build</div>
        <div className="workflow-card__desc">Scripts, Profiles, DDM</div>
      </div>
    </div>
  </div>

  <div className="workflow-connector-vertical">
    <span>↓</span>
  </div>

  <div className="workflow-section">
    <div className="workflow-phase-label">Test</div>
    <div className="workflow-cards">
      <div className="workflow-card">
        <div className="workflow-card__icon">🖥️</div>
        <div className="workflow-card__title">Deploy to Test</div>
        <div className="workflow-card__desc">Apply build to test fleet</div>
      </div>
      <div className="workflow-arrow">→</div>
      <div className="workflow-card">
        <div className="workflow-card__icon">✅</div>
        <div className="workflow-card__title">Audit</div>
        <div className="workflow-card__desc">Verify compliance works</div>
      </div>
      <div className="workflow-arrow">→</div>
      <div className="workflow-card">
        <div className="workflow-card__icon">📄</div>
        <div className="workflow-card__title">Document</div>
        <div className="workflow-card__desc">Finalize compliance docs</div>
      </div>
    </div>
  </div>

  <div className="workflow-connector-vertical">
    <span>↓</span>
  </div>

  <div className="workflow-section">
    <div className="workflow-phase-label">Deploy</div>
    <div className="workflow-cards workflow-cards--center">
      <div className="workflow-card workflow-card--final">
        <div className="workflow-card__icon">🚀</div>
        <div className="workflow-card__title">Push to Fleet</div>
        <div className="workflow-card__desc">Deploy final build via MDM</div>
      </div>
    </div>
  </div>
</div>

**Setup** — Start with a proven or required baseline (STIG, CIS, NIST, or CMMC), then tailor it to your organization's needs. Enable or disable rules, adjust values, and add custom rules.

**Test** — Deploy to a small test fleet first. Run audits to verify everything works as expected. Generate documentation for yourself, your security team, or auditors to show exactly what's being applied to the fleet.

**Deploy** — Once validated, push the same build to your production fleet via MDM. Use the audit scripts and extension attributes you built to verify deployment and monitor ongoing compliance across your fleet.

## Core Features

Each step in the workflow maps to a core feature in MACE:

<div className="pillars-container">
  <div className="pillars-row">
    <a href="../compliance-editor/overview" className="pillar-card">
      <div className="pillar-card__icon">🔍</div>
      <h3>Compliance Editor</h3>
      <p>Browse and customize security rules from mSCP baselines</p>
    </a>
    <a href="../build/overview" className="pillar-card">
      <div className="pillar-card__icon">🔨</div>
      <h3>Build</h3>
      <p>Generate scripts, profiles, and DDM for enforcement</p>
    </a>
    <a href="../audit/overview" className="pillar-card">
      <div className="pillar-card__icon">✅</div>
      <h3>Audit</h3>
      <p>Run real-time compliance checks on any Mac</p>
    </a>
    <a href="../documentation/overview" className="pillar-card">
      <div className="pillar-card__icon">📄</div>
      <h3>Documentation</h3>
      <p>Generate baseline guides and audit reports</p>
    </a>
  </div>
</div>

<div className="custom-rules-callout">
  <a href="../custom-rules/overview">
    <span className="custom-rules-callout__icon">✏️</span>
    <div className="custom-rules-callout__content">
      <strong>Need custom rules?</strong>
      <span>Create your own YAML rules from scratch for any compliance requirement.</span>
    </div>
    <span className="custom-rules-callout__arrow">→</span>
  </a>
</div>

:::tip Start Simple
Begin with a framework baseline and only customize what you need. You can always add more rules or adjust settings as your requirements evolve.
:::

## Two Engines, One Interface

All output files (scripts, profiles, DDM, documentation) can be built using two different methods:

<div className="engine-comparison">
  <div className="engine-card">
    <div className="engine-card__header">
      <span className="engine-card__icon">🐍</span>
      <h3>mSCP Scripts</h3>
    </div>
    <p>The original Python scripts provided by mSCP. Use this for full compatibility with standard mSCP workflows.</p>
    <ul>
      <li>Standard mSCP output formats</li>
      <li>Python-based execution</li>
      <li>Full mSCP compatibility</li>
    </ul>
  </div>

  <div className="engine-card engine-card--primary">
    <div className="engine-card__header">
      <span className="engine-card__icon">⚡</span>
      <h3>MACE Engine</h3>
    </div>
    <p>Native Swift implementation built into MACE. Offers more customization options than the Python scripts.</p>
    <ul>
      <li>Extended export options</li>
      <li>Profile signing support</li>
      <li>Custom branding for docs</li>
      <li>No Python required</li>
    </ul>
  </div>
</div>

You can switch between engines at any time. Your project and customizations remain the same.

