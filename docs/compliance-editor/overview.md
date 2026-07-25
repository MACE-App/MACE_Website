---
sidebar_position: 1
description: Browse, search, and customize hundreds of mSCP compliance rules in MACE's central editor interface.
title: "Compliance Editor"
hide_title: true
---

<div className="doc-hero">
  <h1 className="doc-hero__title">Compliance Editor</h1>
  <div className="doc-hero__body">
    <div className="doc-hero__text">
      <p className="doc-hero__lead">Your central workspace for managing security rules.</p>
      <p className="doc-hero__sub">Browse, search, and customize hundreds of compliance rules from mSCP baselines all in one powerful interface.</p>
    </div>
  </div>
</div>

<div className="themed-image themed-image--large">
  <img src="/img/screenshots/compliance-editor-light.webp" alt="MACE Compliance Editor" className="img-light" />
  <img src="/img/screenshots/compliance-editor-dark.webp" alt="MACE Compliance Editor" className="img-dark" />
</div>

## Interface Layout

<div className="interface-layout-container">
  <div className="interface-visual">
    <div className="interface-panel interface-panel--sidebar">
      <div className="interface-panel__label">Sidebar</div>
    </div>
    <div className="interface-panel interface-panel--list">
      <div className="interface-panel__label">Rules List</div>
    </div>
    <div className="interface-panel interface-panel--detail">
      <div className="interface-panel__label">Detail Panel</div>
    </div>
  </div>
  <div className="interface-toolbar">
    <span>Toolbar</span>
  </div>
</div>

<div className="interface-section interface-section--sidebar">

### 📁 Sidebar

The left sidebar gives you quick access to project info and rule sections.

<table className="icon-table">
  <tr><td>📋</td><td><strong>Baseline</strong> — The compliance framework you're building for</td></tr>
  <tr><td>🔢</td><td><strong>Version</strong> — The macOS version for this baseline</td></tr>
  <tr><td>👤</td><td><strong>Author Details</strong> — Your name and organization for documentation</td></tr>
  <tr><td>📁</td><td><strong>File Path</strong> — Where your project is saved</td></tr>
  <tr><td>📂</td><td><strong>Sections</strong> — Jump to rules by category (Authentication, Auditing, etc.)</td></tr>
</table>

</div>

<div className="interface-section interface-section--list">

### 📋 Rules List

The center panel shows all your rules with quick controls.

<table className="icon-table">
  <tr><td>✓</td><td><strong>Enable/Disable</strong> — Toggle rules on or off for your baseline</td></tr>
  <tr><td>🔤</td><td><strong>Title or ID View</strong> — Switch between showing rule titles or IDs</td></tr>
  <tr><td>↕️</td><td><strong>Sort By</strong> — Sort rules by different criteria</td></tr>
  <tr><td>🔍</td><td><strong>Search</strong> — Find rules by name, ID, or content</td></tr>
  <tr><td>➕</td><td><strong>Add New Rule</strong> — Create a custom rule from scratch</td></tr>
  <tr><td>🏷️</td><td><strong>Framework IDs</strong> — Shows CIS or STIG IDs when applicable</td></tr>
</table>

#### Rule Status Indicators

<div className="status-indicators">
  <div className="status-item">
    <span className="status-item__icon status-item__icon--newrule">+</span>
    <div className="status-item__content">
      <strong>New Rule</strong>
      <span>Rule is enabled — not part of the original baseline</span>
    </div>
  </div>
  <div className="status-item">
    <span className="status-item__icon status-item__icon--disabled">⊘</span>
    <div className="status-item__content">
      <strong>Disabled</strong>
      <span>Rule is disabled — was part of the original baseline</span>
    </div>
  </div>
  <div className="status-item">
    <span className="status-item__icon status-item__icon--notincluded">•••</span>
    <div className="status-item__content">
      <strong>Not Included</strong>
      <span>Rule is not included — was not part of the original baseline</span>
    </div>
  </div>
  <div className="status-item">
    <span className="status-item__icon status-item__icon--modified">/</span>
    <div className="status-item__content">
      <strong>Modified</strong>
      <span>Rule has been modified — has changed compared to the original baseline</span>
    </div>
  </div>
  <div className="status-item">
    <span className="status-item__icon status-item__icon--selected"></span>
    <div className="status-item__content">
      <strong>Selected</strong>
      <span>Rule is selected to be viewed in the right sidebar</span>
    </div>
  </div>
  <div className="status-item">
    <span className="status-item__icon status-item__icon--custom">
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M16.24 11.51l1.57-1.57-3.75-3.75-1.57 1.57-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13L3.41 16.9a.996.996 0 000 1.41l2.34 2.34c.39.39 1.02.39 1.41 0l4.69-4.69 4.13 4.13c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-4.47-4.85zm-7.98 5.03l-1.41-1.41 7.27-7.27 1.41 1.41-7.27 7.27zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
      </svg>
    </span>
    <div className="status-item__content">
      <strong>Custom Rule</strong>
      <span>Added by the user — not part of the original rules</span>
    </div>
  </div>
</div>

</div>

<div className="interface-section interface-section--detail">

### 📝 Detail Panel

The right panel shows everything about the selected rule.

<table className="icon-table">
  <tr><td>🔍</td><td><strong>Search Values</strong> — Search through all YAML fields</td></tr>
  <tr><td>📋</td><td><strong>Copy Values</strong> — Copy any value to clipboard</td></tr>
  <tr><td>📂</td><td><strong>Open Local</strong> — Open the rule file in Finder</td></tr>
  <tr><td>🌐</td><td><strong>Open on GitHub</strong> — View the rule on GitHub</td></tr>
  <tr><td>🔄</td><td><strong>View Original/Modified</strong> — Compare your changes to the original</td></tr>
  <tr><td>↩️</td><td><strong>Reset Rule</strong> — Revert a modified rule to the original</td></tr>
  <tr><td>🗑️</td><td><strong>Delete Rule</strong> — Remove a custom rule you created</td></tr>
</table>

</div>

<div className="interface-section interface-section--toolbar">

### 🔧 Toolbar

The top toolbar provides quick access to key actions.

<table className="icon-table">
  <tr><td>📋</td><td><strong>Change Baseline</strong> — Switch to a different compliance framework</td></tr>
  <tr><td>👤</td><td><strong>Author Settings</strong> — Set your name, organization, and logo for docs</td></tr>
  <tr><td>👁️</td><td><strong>Show All Rules</strong> — Include rules not in your baseline but available for this version</td></tr>
  <tr><td>🚫</td><td><strong>Hide Disabled</strong> — Hide disabled rules from the list</td></tr>
  <tr><td>✅</td><td><strong>Audit</strong> — Run a compliance audit using mSCP or MACE engine</td></tr>
  <tr><td>📄</td><td><strong>Documentation</strong> — Generate documentation using either engine</td></tr>
  <tr><td>🔨</td><td><strong>Build</strong> — Build scripts, profiles, and DDM using either engine</td></tr>
</table>

</div>

## Features

### Automatic Rule Updates

MACE checks your project's rules against the latest mSCP rules from GitHub and notifies you when updates are available. Your custom modifications are always preserved.

<div className="themed-image">
  <img src="/img/screenshots/rule-updates-light.webp" alt="Rule Updates Available" className="img-light" />
  <img src="/img/screenshots/rule-updates-dark.webp" alt="Rule Updates Available" className="img-dark" />
</div>

<table className="icon-table">
  <tr><td>🔄</td><td><strong>Auto-Check</strong> — Compares your rules against the cached mSCP repository</td></tr>
  <tr><td>📥</td><td><strong>Easy Updates</strong> — One click to apply all rule updates</td></tr>
  <tr><td>🛡️</td><td><strong>Preserves Custom Rules</strong> — Your modifications are never overwritten</td></tr>
  <tr><td>📋</td><td><strong>Change Summary</strong> — Shows exactly how many rules were updated or removed</td></tr>
</table>

<div className="feature-grid">
  <div className="feature-card">
    <span className="feature-card__icon">💾</span>
    <span className="feature-card__title">Auto-Save</span>
    <span className="feature-card__desc">Every change is automatically saved. Toggle rules, edit values, or customize scripts and your project updates instantly. Disable in settings if you prefer manual control.</span>
  </div>
  <div className="feature-card">
    <span className="feature-card__icon">⚡</span>
    <span className="feature-card__title">Performance</span>
    <span className="feature-card__desc">Built for the future with support for larger data sets, quick loading, async rendering, and smart caching. Optimized to run as fast as possible.</span>
  </div>
</div>
