---
sidebar_position: 4
description: Create and manage MACE projects containing compliance frameworks, customized rules, and deployment artifacts.
title: "Projects"
hide_title: true
---

<div className="doc-hero">
  <h1 className="doc-hero__title">Projects</h1>
  <div className="doc-hero__body">
    <div className="doc-hero__figure">
      <img
        src="/img/mascots/projects-build.webp"
        alt="MACE mascot in a hard hat holding project blueprints"
        className="doc-hero__mascot"
        width="440"
        height="440"
      />
    </div>
    <div className="doc-hero__text">
      <p className="doc-hero__lead">Projects are how MACE organizes your compliance work.</p>
      <p className="doc-hero__sub">Each project contains your selected framework, customized rules, mSCP files, and everything MACE needs to build deployment-ready outputs.</p>
    </div>
  </div>
</div>

## Creating a Project

<div className="create-step-section">
  <div className="create-step">
    <div className="create-step__number">1</div>
    <div className="create-step__content">
      <strong>Launch MACE</strong>
      <span>Click <strong>New Project</strong> from the welcome screen</span>
    </div>
  </div>
  <div className="themed-image">
    <img src="/img/screenshots/main-menu-light.webp" alt="MACE Main Menu" className="img-light" />
    <img src="/img/screenshots/main-menu-dark.webp" alt="MACE Main Menu" className="img-dark" />
  </div>
</div>

<div className="create-step-section">
  <div className="create-step">
    <div className="create-step__number">2</div>
    <div className="create-step__content">
      <strong>Select Platform & Framework</strong>
      <span>Pick a platform (macOS, iOS/iPadOS, visionOS, or the alpha Application platform for Chrome, Edge, and Firefox), an OS version, and a compliance framework. <strong>All Rules</strong> is also offered, with a caution prompt</span>
    </div>
  </div>
  <div className="themed-image">
    <img src="/img/screenshots/new-project-step2-light.webp" alt="New Compliance Project - Choose Platform and Framework" className="img-light" />
    <img src="/img/screenshots/new-project-step2-dark.webp" alt="New Compliance Project - Choose Platform and Framework" className="img-dark" />
  </div>
</div>

<div className="create-step-section">
  <div className="create-step">
    <div className="create-step__number">3</div>
    <div className="create-step__content">
      <strong>Name & Save</strong>
      <span>The folder name defaults to <code>MACE_Project_YYYY-MM-DD</code> in your last-used location. Use a generic name, since you can change the framework later</span>
    </div>
  </div>
  <div className="themed-image">
    <img src="/img/screenshots/new-project-step3-light.webp" alt="Choose Project Location" className="img-light" />
    <img src="/img/screenshots/new-project-step3-dark.webp" alt="Choose Project Location" className="img-dark" />
  </div>
</div>

Once created, your project opens in the **Compliance Builder Hub** where you can start building your baseline. If you picked a beta branch or a fork as your Rules Source, the sheet shows a badge and a confirmation alert first. See [Beta Testers](../beta/overview#beta-os-versions-from-mscp).

## What's Inside a Project

When you create a project, MACE sets up a folder structure that keeps everything organized:

<div className="project-structure-visual">
  <div className="project-folder">
    <div className="folder-header">
      <span className="folder-icon-inline">📁</span>
      <span className="folder-name">your-project/</span>
    </div>
    <div className="folder-contents">
      <div className="file-item file-item--mace">
        <span className="file-icon">📄</span>
        <span className="file-name">MACE_Project.mace</span>
        <span className="folder-badge folder-badge--mace">MACE</span>
        <span className="file-desc">Project file — platform, version, framework, branch, settings</span>
      </div>
      <div className="file-item">
        <span className="file-icon">🖼️</span>
        <span className="file-name">logo.png</span>
        <span className="folder-badge folder-badge--mace">MACE</span>
        <span className="file-desc">Appears once you upload a logo for documentation or reports</span>
      </div>
      <div className="file-item">
        <span className="file-icon">📄</span>
        <span className="file-name">.gitignore, .gitattributes</span>
        <span className="folder-badge folder-badge--mace">MACE</span>
        <span className="file-desc">Added when Prepare New Projects for Git is on</span>
      </div>
      <div className="folder-item">
        <div className="folder-header folder-header--sub">
          <span className="folder-icon-inline">📁</span>
          <span className="folder-name">build/</span>
          <span className="folder-badge folder-badge--mace">MACE</span>
        </div>
        <div className="folder-contents folder-contents--nested">
          <div className="file-item">
            <span className="file-icon">📄</span>
            <span className="file-name">scripts, profiles, docs...</span>
            <span className="file-desc">M.A.C.E. engine build outputs</span>
          </div>
        </div>
      </div>
      <div className="folder-item">
        <div className="folder-header folder-header--sub">
          <span className="folder-icon-inline">📁</span>
          <span className="folder-name">MSCP_Project_Files/</span>
          <span className="folder-badge folder-badge--mscp">mSCP</span>
        </div>
        <div className="folder-contents folder-contents--nested">
          <div className="file-item">
            <span className="file-icon">📁</span>
            <span className="file-name">baselines/</span>
            <span className="file-desc">Framework baselines</span>
          </div>
          <div className="file-item">
            <span className="file-icon">📁</span>
            <span className="file-name">rules/</span>
            <span className="file-desc">Security rule definitions</span>
          </div>
          <div className="file-item">
            <span className="file-icon">📁</span>
            <span className="file-name">custom/rules/, custom/baselines/</span>
            <span className="file-desc">Your edited and custom rules, saved as YAML</span>
          </div>
          <div className="file-item">
            <span className="file-icon">📁</span>
            <span className="file-name">build/</span>
            <span className="file-desc">mSCP engine outputs and exported baselines</span>
          </div>
          <div className="file-item">
            <span className="file-icon">📁</span>
            <span className="file-name">...</span>
            <span className="file-desc">Additional mSCP resources</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="project-files-explain">
  <div className="explain-card">
    <div className="explain-card__icon">📄</div>
    <div className="explain-card__content">
      <strong>.mace file</strong>
      <p>A small plist with the platform, version, framework, mSCP branch, custom baseline name, documentation settings, audit comments, exemptions, and MDM upload history. The file can be renamed; MACE opens the first <code>.mace</code> it finds in the folder.</p>
    </div>
  </div>
  <div className="explain-card">
    <div className="explain-card__icon explain-card__icon--mace">📁</div>
    <div className="explain-card__content">
      <strong>build/</strong>
      <p>Where the M.A.C.E. engine writes scripts, configuration profiles, DDM declarations, and documentation. The mSCP engine writes to <code>MSCP_Project_Files/build/</code> instead.</p>
    </div>
  </div>
  <div className="explain-card">
    <div className="explain-card__icon explain-card__icon--mscp">🐍</div>
    <div className="explain-card__content">
      <strong>MSCP_Project_Files/</strong>
      <p>The original mSCP project structure. Every rule you edit or add is written as YAML under <code>custom/rules/</code>, exactly where the mSCP tools expect it, so you can use the command line directly if you prefer.</p>
    </div>
  </div>
</div>

## Importing a Project

Instead of starting from scratch, you can create a project from an existing source with **Import & Create Project** on the main menu.

<div className="output-types-grid">
  <div className="output-type-card">
    <div className="output-type-card__header">
      <span className="output-type-card__icon">📥</span>
      <h3>Jamf Compliance Editor (.jce)</h3>
    </div>
    <p>Import a <code>.jce</code> file to auto-detect the platform, version, compliance framework, and rule exclusions. MACE shows a confidence rating and lets you verify or override each setting before it builds the project. JCE files only store which rules are included or excluded, so customized rule content doesn't come across.</p>
  </div>
</div>

:::note
Imports are read-only and never modify the original files. Only macOS 14 (Sonoma) and later projects are supported. Importing from **mSCP 1.0 rule folders** is still marked Coming Soon.
:::

## Opening Projects

There are a few ways to open an existing project:

<table className="icon-table">
  <tr><td>📄</td><td>Double-click a <code>.mace</code> file in Finder</td></tr>
  <tr><td>📂</td><td>Click <strong>Existing Project</strong> from the main menu and pick either the <code>.mace</code> file or the project folder</td></tr>
  <tr><td>🕐</td><td>Select from <strong>Recent Projects</strong> on the main menu. It shows the last three; right-click one for Show in Finder or Remove</td></tr>
  <tr><td>⌨️</td><td><strong>Project ▸ Open Project…</strong> (<code>Shift+Cmd+O</code>) from inside the editor, or <strong>Duplicate Project…</strong> (<code>Shift+Cmd+D</code>) to copy one</td></tr>
</table>

## Project Features

<table className="icon-table">
  <tr><td>💾</td><td><strong>Auto Save</strong> — Every change is saved automatically. Turn it off in Settings if you'd rather press <code>Cmd+S</code> yourself; the editor then shows an orange Unsaved indicator.</td></tr>
  <tr><td>🧠</td><td><strong>Remember Settings</strong> — Pick up right where you left off in the Compliance, Audit, Documentation, and Build hubs. Also a Settings toggle.</td></tr>
  <tr><td>🌿</td><td><strong>Branch Aware</strong> — Each project remembers which mSCP branch or fork it came from, and checks that source for rule updates.</td></tr>
  <tr><td>🔧</td><td><strong>Git-Ready</strong> — New projects get a <code>.gitignore</code> and <code>.gitattributes</code>, and the inherited <code>custom/.gitignore</code> is neutralized so your rule edits are tracked. For older projects, use <strong>File ▸ Make Project Git-Ready</strong>.</td></tr>
  <tr><td>🔀</td><td><strong>mSCP Compatible</strong> — MACE keeps its files separate, so you can still use mSCP command line tools directly.</td></tr>
  <tr><td>📝</td><td><strong>Author Info</strong> — Benchmark name, author, organization, and logo are set from the Author Docs card in the editor and flow into documentation and builds.</td></tr>
</table>
