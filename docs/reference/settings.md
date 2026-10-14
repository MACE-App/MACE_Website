---
sidebar_position: 1
description: Configure MACE settings across the General, Appearance, Advanced, and Updates panes.
title: "Settings"
hide_title: true
---

import {ThemePicker, LogoSettings} from '@site/src/components/SettingsDemo';

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
      <p className="doc-hero__sub">Four panes: General, Appearance, Advanced, and Updates.</p>
    </div>
  </div>
</div>

Open Settings from the MACE menu bar (**MACE ▸ App Settings…**, or <kbd>⌘</kbd><kbd>,</kbd>). **Check for Updates…** sits right below it. Pick a pane from the sidebar on the left.

Every option shows its shipped default. Change one and an orange **Restore Default** badge appears beside it, so you can always see what you have moved away from and put it back with a click. To roll back more than one option at a time, see [Resetting Settings](#resetting-settings).

Each setting below carries the same control you see in the app, drawn in its default position. A blue switch means the option ships turned on, a grey switch means it ships turned off, and a menu shows the value MACE starts with. Rows that run an action show the button you click instead.

:::tip[Go ahead and play with them]
The controls on this page work. Flip a switch and the orange **Restore Default** badge appears, exactly as it does in MACE. Turn **Holiday Logo** off and watch **Logo Override** wake up. Nothing here touches your copy of the app, so click away.
:::

## General

<div className="themed-image">
  <img src="/img/screenshots/settings-light.webp" alt="MACE Settings General pane" className="img-light" />
  <img src="/img/screenshots/settings-dark.webp" alt="MACE Settings General pane" className="img-dark" />
</div>

### Projects

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--green">💾</span>
      <strong>Auto Save</strong>
      <span className="build-option-item__control build-option-item__control--default-on">
        <input type="checkbox" id="sw-auto-save" className="build-option-item__input" aria-label="Auto Save demo switch" defaultChecked />
        <label className="build-option-item__track" htmlFor="sw-auto-save"></label>
        <span className="build-option-item__label build-option-item__label--on">
          <span className="is-default">Default: <b>On</b></span>
          <span className="is-restore">Restore Default: <b>On</b></span>
        </span>
      </span>
    </div>
    <p>Automatically save changes to compliance baselines as you work. Your progress is written out continuously, so nothing waits on a manual save.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--blue">🧠</span>
      <strong>Remember Settings</strong>
      <span className="build-option-item__control build-option-item__control--default-on">
        <input type="checkbox" id="sw-remember-settings" className="build-option-item__input" aria-label="Remember Settings demo switch" defaultChecked />
        <label className="build-option-item__track" htmlFor="sw-remember-settings"></label>
        <span className="build-option-item__label build-option-item__label--on">
          <span className="is-default">Default: <b>On</b></span>
          <span className="is-restore">Restore Default: <b>On</b></span>
        </span>
      </span>
    </div>
    <p>Restore preferences for all four hubs (Compliance, Audit, Documentation, and Build) when you reopen MACE, including sidebar widths and filter states.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--orange">🌿</span>
      <strong>Prepare New Projects for Git</strong>
      <span className="build-option-item__control build-option-item__control--default-on">
        <input type="checkbox" id="sw-prepare-new-projects-for-git" className="build-option-item__input" aria-label="Prepare New Projects for Git demo switch" defaultChecked />
        <label className="build-option-item__track" htmlFor="sw-prepare-new-projects-for-git"></label>
        <span className="build-option-item__label build-option-item__label--on">
          <span className="is-default">Default: <b>On</b></span>
          <span className="is-restore">Restore Default: <b>On</b></span>
        </span>
      </span>
    </div>
    <p>When you create a project, MACE adds a <code>.gitignore</code> and <code>.gitattributes</code>, then removes the inherited <code>custom/.gitignore</code> so your edits are tracked. For a project you already have, use <strong>File ▸ Make Project Git-Ready</strong> instead.</p>
  </div>
</div>

### Rules

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--purple">📥</span>
      <strong>Auto-Download Rules</strong>
      <span className="build-option-item__control build-option-item__control--default-on">
        <input type="checkbox" id="sw-auto-download-mscp-rules" className="build-option-item__input" aria-label="Auto-Download Rules demo switch" defaultChecked />
        <label className="build-option-item__track" htmlFor="sw-auto-download-mscp-rules"></label>
        <span className="build-option-item__label build-option-item__label--on">
          <span className="is-default">Default: <b>On</b></span>
          <span className="is-restore">Restore Default: <b>On</b></span>
        </span>
      </span>
    </div>
    <p>Fetch the latest rules from GitHub whenever the main menu appears, and check for rule updates when a project opens. This also keeps beta branches discovered and downloaded for offline use. With it off, Rules Source only lists branches already in the repo cache.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--blue">🌿</span>
      <strong>Rules Source</strong>
      <span className="build-option-item__control build-option-item__control--menu build-option-item__control--auto">
        <select className="build-option-item__menu" aria-label="Rules Source" defaultValue="Release (main)">
          <option className="is-default-option">Release (main)</option>
          <option>Beta (dev_27)</option>
          <option>Beta (dev_2.0)</option>
        </select>
        <span className="build-option-item__label build-option-item__label--value">
          <span className="is-default">Default: <b>Release (main)</b></span>
          <span className="is-restore">Restore Default: <b>Release (main)</b></span>
        </span>
      </span>
    </div>
    <p>Where new projects get their rules. <strong>Release</strong> is the published rule set on mSCP's <code>main</code> branch. <strong>Beta</strong> entries are mSCP development branches such as <code>dev_27</code> that preview upcoming OS releases and rule changes. The menu lists every branch with mSCP 2.0 content, plus any forks you add below. Use <strong>Refresh branches</strong> to ask GitHub for the current list; otherwise it refreshes every six hours. See <a href="/docs/beta/overview">Beta Testers</a> for what to expect from a dev branch.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--orange">🍴</span>
      <strong>Additional Sources</strong>
      <span className="build-option-item__control">
        <button type="button" className="build-option-item__button">Add</button>
      </span>
    </div>
    <p>Public forks of mSCP on GitHub, offered next to the official branches in Rules Source and in Baseline Compare. Enter <code>owner/repo</code> or paste a GitHub URL. The fork must use the mSCP 2.0 layout and be public. Rules include scripts that run on your Mac, so only add repositories you trust. Removing a fork that is the current Rules Source falls back to Release (main).</p>
  </div>
</div>

### Audits

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--teal">🕓</span>
      <strong>Save Last Audit</strong>
      <span className="build-option-item__control build-option-item__control--default-off">
        <input type="checkbox" id="sw-save-last-audit" className="build-option-item__input" aria-label="Save Last Audit demo switch" />
        <label className="build-option-item__track" htmlFor="sw-save-last-audit"></label>
        <span className="build-option-item__label build-option-item__label--off">
          <span className="is-default">Default: <b>Off</b></span>
          <span className="is-restore">Restore Default: <b>Off</b></span>
        </span>
      </span>
    </div>
    <p>Save completed audits to the project so you can reload them without re-running checks. Only the most recent audit is kept, so each new audit overwrites the one before it.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--indigo">💬</span>
      <strong>Preserve Audit Comments</strong>
      <span className="build-option-item__control build-option-item__control--default-on">
        <input type="checkbox" id="sw-preserve-audit-comments" className="build-option-item__input" aria-label="Preserve Audit Comments demo switch" defaultChecked />
        <label className="build-option-item__track" htmlFor="sw-preserve-audit-comments"></label>
        <span className="build-option-item__label build-option-item__label--on">
          <span className="is-default">Default: <b>On</b></span>
          <span className="is-restore">Restore Default: <b>On</b></span>
        </span>
      </span>
    </div>
    <p>Keep your per-rule comments when you start a new audit instead of clearing them. Turn this off if you would rather begin every audit with a clean slate.</p>
  </div>
</div>

## Appearance

<div className="themed-image">
  <img src="/img/screenshots/settings-appearance-light.webp" alt="MACE Settings Appearance pane" className="img-light" />
  <img src="/img/screenshots/settings-appearance-dark.webp" alt="MACE Settings Appearance pane" className="img-dark" />
</div>

### Theme

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--indigo">🌗</span>
      <strong>Theme</strong>
      <ThemePicker />
    </div>
    <p>Choose <strong>Light</strong>, <strong>System</strong>, or <strong>Dark</strong>. <strong>System</strong> follows your macOS appearance setting, including the automatic switch between light and dark at sunrise and sunset.</p>
  </div>
</div>

### Sync Indicator

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--gray">👁️</span>
      <strong>Hide Sync Indicator</strong>
      <span className="build-option-item__control build-option-item__control--default-off">
        <input type="checkbox" id="sw-hide-sync-indicator" className="build-option-item__input" aria-label="Hide Sync Indicator demo switch" />
        <label className="build-option-item__track" htmlFor="sw-hide-sync-indicator"></label>
        <span className="build-option-item__label build-option-item__label--off">
          <span className="is-default">Default: <b>Off</b></span>
          <span className="is-restore">Restore Default: <b>Off</b></span>
        </span>
      </span>
    </div>
    <p>Remove the sync status pill from the compliance editor title bar for a quieter workspace.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--indigo">⚠️</span>
      <strong>Show Output Icons</strong>
      <span className="build-option-item__control build-option-item__control--default-off">
        <input type="checkbox" id="sw-show-output-icons" className="build-option-item__input" aria-label="Show Output Icons demo switch" />
        <label className="build-option-item__track" htmlFor="sw-show-output-icons"></label>
        <span className="build-option-item__label build-option-item__label--off">
          <span className="is-default">Default: <b>Off</b></span>
          <span className="is-restore">Restore Default: <b>Off</b></span>
        </span>
      </span>
    </div>
    <p>Replace the generic "Output Drift" label with colored icons, so you can tell at a glance which outputs are affected. Grayed out while Hide Sync Indicator is on.</p>
  </div>
</div>

### Rule Editor

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--purple">💲</span>
      <strong>Highlight ODV Placeholders</strong>
      <span className="build-option-item__control build-option-item__control--menu build-option-item__control--auto">
        <select className="build-option-item__menu" aria-label="Highlight ODV Placeholders" defaultValue="On">
          <option className="is-default-option">On</option>
          <option>Off</option>
          <option>Always Show Value</option>
        </select>
        <span className="build-option-item__label build-option-item__label--value">
          <span className="is-default">Default: <b>On</b></span>
          <span className="is-restore">Restore Default: <b>On</b></span>
        </span>
      </span>
    </div>
    <p>How <code>$ODV</code> appears in rule titles and fields across the Compliance Editor, Audit, and Baseline Compare. <strong>On</strong> tints the placeholder and reveals the rule's current value while hovering. <strong>Off</strong> makes it read like the rest of the text. <strong>Always Show Value</strong> replaces <code>$ODV</code> with the current value at all times.</p>
  </div>
</div>

### Logo

<div className="build-option-detail">
  <LogoSettings />
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--red">🎨</span>
      <strong>Download All Logos</strong>
      <span className="build-option-item__control">
        <button type="button" className="build-option-item__button">Download</button>
      </span>
    </div>
    <p>Enjoying the logos as much as we do? Click <strong>Download</strong>, choose where to put them, and the entire collection is saved to your Mac. Use them however you like when you talk about MACE. See <a href="/docs/community#share-the-project"><strong>Share the Project</strong></a> for the whole set.</p>
  </div>
</div>

:::info[These logos are here purely for fun]
A little something for those of us who live in apps like this every day, instead of the same static images we're used to. None of them were ever designed to offend; they're a lighthearted way to celebrate people from all walks of life. Apps should be more fun, and I hope MACE brings a bit of that.
:::

## Advanced

<div className="themed-image">
  <img src="/img/screenshots/settings-advanced-light.webp" alt="MACE Settings Advanced pane" className="img-light" />
  <img src="/img/screenshots/settings-advanced-dark.webp" alt="MACE Settings Advanced pane" className="img-dark" />
</div>

Every row in this pane runs an action rather than storing a preference, so there is nothing here to reset.

### Storage

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--blue">📂</span>
      <strong>Application Support</strong>
      <span className="build-option-item__control">
        <button type="button" className="build-option-item__button">Open</button>
      </span>
    </div>
    <p>Reveal the MACE application support folder in Finder, where MACE keeps its data. Useful for troubleshooting or for backing up your settings.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--orange">🗑️</span>
      <strong>Clear Cache</strong>
      <span className="build-option-item__control">
        <button type="button" className="build-option-item__button">Clear</button>
      </span>
    </div>
    <p>Remove cached rule data to free memory or fix issues. Reach for this if MACE feels slow or shows stale data. It's rebuilt automatically when needed, and the app asks you to confirm first.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--purple">🔃</span>
      <strong>mSCP Repo Cache</strong>
      <span className="build-option-item__control">
        <button type="button" className="build-option-item__button">Open</button>
        <button type="button" className="build-option-item__button">Clear</button>
      </span>
    </div>
    <p>The downloaded copies of every source branch, Release, Beta, and forks, under <code>~/Library/Application Support/MACE/RepoCache</code>. <strong>Open</strong> reveals it in Finder. <strong>Clear</strong> removes every branch after a confirmation. Existing projects keep their own rules, and with Auto-Download Rules on the app starts re-downloading right away.</p>
  </div>
</div>

### Environments

MACE keeps its own Python and Ruby environments so builds never depend on whatever is installed system wide. Reset one if a build fails with a dependency error.

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--teal">🐍</span>
      <strong>Reset Python Environment</strong>
      <span className="build-option-item__control">
        <button type="button" className="build-option-item__button">Reset</button>
      </span>
    </div>
    <p>Remove the mSCP Python virtual environment so it installs fresh. MACE rebuilds it on the next run that needs it.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--red">💎</span>
      <strong>Reset Ruby Gems</strong>
      <span className="build-option-item__control">
        <button type="button" className="build-option-item__button">Reset</button>
      </span>
    </div>
    <p>Remove the installed gems so they install fresh. Handy when a documentation build fails on a gem that did not install cleanly.</p>
  </div>
</div>

### Privileged Helpers

MACE installs small privileged helpers for the tasks that need elevated rights. Removing one is safe, because MACE offers to reinstall it the next time it is needed.

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--red">⬇️</span>
      <strong>Update Helper</strong>
      <span className="build-option-item__control">
        <button type="button" className="build-option-item__button">Remove</button>
      </span>
    </div>
    <p>Remove the privileged helper that MACE uses to install automatic updates.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--red">🛡️</span>
      <strong>Audit Helper</strong>
      <span className="build-option-item__control">
        <button type="button" className="build-option-item__button">Remove</button>
      </span>
    </div>
    <p>Remove the privileged helper that MACE uses to run audit checks.</p>
  </div>
</div>

## Updates

<div className="themed-image">
  <img src="/img/screenshots/settings-updates-light.webp" alt="MACE Settings Updates pane" className="img-light" />
  <img src="/img/screenshots/settings-updates-dark.webp" alt="MACE Settings Updates pane" className="img-dark" />
</div>

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--green">🔄</span>
      <strong>Check for Updates on Launch</strong>
      <span className="build-option-item__control build-option-item__control--default-on">
        <input type="checkbox" id="sw-check-for-updates-on-launch" className="build-option-item__input" aria-label="Check for Updates on Launch demo switch" defaultChecked />
        <label className="build-option-item__track" htmlFor="sw-check-for-updates-on-launch"></label>
        <span className="build-option-item__label build-option-item__label--on">
          <span className="is-default">Default: <b>On</b></span>
          <span className="is-restore">Restore Default: <b>On</b></span>
        </span>
      </span>
    </div>
    <p>Look for a new version every time MACE starts, so you hear about a release without going looking for it.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--purple">📦</span>
      <strong>Release Channel</strong>
      <span className="build-option-item__control build-option-item__control--menu build-option-item__control--auto">
        <select className="build-option-item__menu" aria-label="Release Channel" defaultValue="Stable">
          <option>Beta</option>
          <option className="is-default-option">Stable</option>
        </select>
        <span className="build-option-item__label build-option-item__label--value">

          <span className="is-default">Default: <b>Stable</b></span>

          <span className="is-restore">Restore Default: <b>Stable</b></span>

        </span>
      </span>
    </div>
    <p>Choose which updates you receive. <strong>Stable</strong> is production ready and offers stable releases only, while <strong>Beta</strong> gives you early access to both beta and stable releases. Changing the channel runs an update check as soon as you close Settings. Read <a href="/docs/beta/overview">Beta Testers</a> before you switch.</p>
  </div>
</div>

## Resetting Settings

MACE gives you two levels of reset. Neither one touches your projects.

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--gray">↩️</span>
      <strong>Reset one pane</strong>
      <span className="build-option-item__control">
        <button type="button" className="build-option-item__button">Reset</button>
      </span>
    </div>
    <p>The <strong>General</strong>, <strong>Appearance</strong>, and <strong>Updates</strong> panes each end with a <strong>Reset … Settings to Defaults</strong> button that restores every option in that pane and leaves the rest alone, after asking you to confirm. Resetting General also puts Rules Source back to Release (main) and removes every Additional Source. <strong>Advanced</strong> has no reset button, because it holds actions rather than preferences.</p>
  </div>
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--gray">🧹</span>
      <strong>Reset everything</strong>
      <span className="build-option-item__control">
        <button type="button" className="build-option-item__button">Reset All</button>
      </span>
    </div>
    <p><strong>Reset All Settings…</strong> in the bottom bar of the Settings window restores the options in every pane at once and also clears the remembered hub preferences and audit export defaults by deleting the app's settings file. It asks you to confirm first. A few switches are left as they are: Hide Sync Indicator, Show Output Icons, Check for Updates on Launch, and Additional Sources.</p>
  </div>
</div>
