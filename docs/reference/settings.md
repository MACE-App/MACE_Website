---
sidebar_position: 1
description: Configure MACE settings including auto-save, appearance, theme, and cache management.
title: "Settings"
hide_title: true
---

<div className="doc-hero">
  <h1 className="doc-hero__title">Settings</h1>
  <div className="doc-hero__body">
    <div className="doc-hero__figure">
      <img
        src="/img/mascots/settings-gear.webp"
        alt="MACE mascot holding a gear and a settings panel"
        className="doc-hero__mascot"
        width="440"
        height="440"
      />
    </div>
    <div className="doc-hero__text">
      <p className="doc-hero__lead">Customize MACE to fit your workflow.</p>
      <p className="doc-hero__sub">Configure auto-save, appearance, and manage cached data.</p>
    </div>
  </div>
</div>

<div className="themed-image">
  <img src="/img/screenshots/settings-light.webp" alt="MACE Settings" className="img-light" />
  <img src="/img/screenshots/settings-dark.webp" alt="MACE Settings" className="img-dark" />
</div>

Open Settings from the MACE menu bar.

## General

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">💾</span>
      <strong>Auto Save</strong>
    </div>
    <p>Automatically save changes to compliance baselines as you work. Your progress is saved continuously so you never lose changes.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔄</span>
      <strong>Remember Settings</strong>
    </div>
    <p>Restore preferences for all hubs (Compliance, Audit, Documentation, Build) when you reopen MACE. Remembers window positions, sidebar widths, and filter states.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📥</span>
      <strong>Auto-Download mSCP Rules</strong>
    </div>
    <p>Automatically fetch the latest rules from GitHub on app launch. Enable this to always have the newest mSCP baseline rules without manual updates.</p>
  </div>
</div>

## Appearance

<div className="themed-image">
  <img src="/img/screenshots/settings-appearance-light.webp" alt="MACE Appearance settings pane" className="img-light" />
  <img src="/img/screenshots/settings-appearance-dark.webp" alt="MACE Appearance settings pane" className="img-dark" />
</div>

### Sync Indicator

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔄</span>
      <strong>Hide Sync Indicator</strong>
    </div>
    <p>Remove the sync status pill from the compliance editor title bar. <em>Default: Off</em></p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">⚠️</span>
      <strong>Show Output Icons</strong>
    </div>
    <p>Replace the generic "Output Drift" label with colored icons showing which outputs are affected. <em>Default: Off</em></p>
  </div>
</div>

### Logo

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">✨</span>
      <strong>Holiday Logo</strong>
    </div>
    <p>Show seasonal and holiday-themed logos on the main menu. MACE ships with 75+ seasonal, holiday, and character logos that switch automatically by date. <em>Default: On</em></p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🖼️</span>
      <strong>Logo Override</strong>
    </div>
    <p>Pick one specific logo to use year-round instead of the automatic seasonal rotation. Turn off <strong>Holiday Logo</strong> above to enable this menu.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📥</span>
      <strong>Download All Logos</strong>
    </div>
    <p>Enjoying the logos as much as we do? Save the entire collection to your Mac and take them with you. Click <strong>Download</strong> and choose where to put them, then use them however you like when you talk about MACE. See <a href="/docs/community#share-the-project">Share the Project</a>.</p>
  </div>
</div>

:::info These logos are here purely for fun
A little something for those of us who live in apps like this every day, instead of the same static images we're used to. None of them were ever designed to offend; they're a lighthearted way to celebrate people from all walks of life. Apps should be more fun, and I hope MACE brings a bit of that.
:::

Use **Reset Appearance Settings to Defaults** at the bottom of the pane to restore every option in this section.

## Advanced

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🗑️</span>
      <strong>Clear Cache</strong>
    </div>
    <p>Remove cached rule data to free memory or fix issues. Use this if MACE is running slowly or displaying stale data.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">🔃</span>
      <strong>Clear Downloaded Rules</strong>
    </div>
    <p>Remove the mSCP rules cache to force a fresh download. Use this to get the latest rules or resolve issues with corrupted downloads.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon">📂</span>
      <strong>Application Support</strong>
    </div>
    <p>Opens the MACE application support folder in Finder, where MACE stores its data. Useful for troubleshooting or backing up your settings.</p>
  </div>
</div>

