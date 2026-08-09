---
sidebar_position: 1
title: "Beta Testers"
description: Join the MACE beta channel to test cutting-edge features before they reach stable. Your feedback shapes what ships.
hide_title: true
---

<div className="doc-hero">
  <h1 className="doc-hero__title">Beta Testers</h1>
  <div className="doc-hero__body">
    <div className="doc-hero__figure">
      <img
        src="/img/mascots/beta-lab.webp"
        alt="MACE mascot in a lab coat and safety goggles holding a bubbling flask"
        className="doc-hero__mascot"
        width="440"
        height="440"
      />
    </div>
    <div className="doc-hero__text">
      <p className="doc-hero__lead">Be on the cutting edge of MACE.</p>
      <p className="doc-hero__sub">Test new features before they roll out to everyone, and help shape them with your feedback.</p>
    </div>
  </div>
</div>

## What Is the Beta Channel?

The beta channel gives you early access to the newest MACE features while they're still being tested. When issues are reported or features are requested, fixes and new capabilities are deployed to the beta app **first**, before the stable release. That means everything you get in beta has a real purpose: it's being validated by real users on real systems before it goes out to the masses.

Running beta is how you stay on the cutting edge, and how you directly influence what ships in the next stable release.

### How Version Numbers Work

Beta always carries the **upcoming** release. Whatever version the stable channel is on, the beta channel is already testing what comes next, whether that is the next major release or the next round of fixes. Each part of the version number tells you the size of the release:

<div className="version-anatomy">
  <div className="version-anatomy__display">
    <span className="version-anatomy__part version-anatomy__part--major">1</span>
    <span className="version-anatomy__dot">.</span>
    <span className="version-anatomy__part version-anatomy__part--minor">2</span>
    <span className="version-anatomy__dot">.</span>
    <span className="version-anatomy__part version-anatomy__part--patch">0</span>
    <span className="version-anatomy__suffix">-beta.7</span>
  </div>
  <div className="version-anatomy__legend">
    <div className="version-anatomy__item version-anatomy__item--major">
      <span className="version-anatomy__rule" aria-hidden="true"></span>
      <div>
        <strong className="version-anatomy__label">🏛️ Landmark</strong>
        <code className="version-anatomy__pos">1.X.X</code>
        <p>Reserved for complete overhauls of the app.</p>
      </div>
    </div>
    <div className="version-anatomy__item version-anatomy__item--minor">
      <span className="version-anatomy__rule" aria-hidden="true"></span>
      <div>
        <strong className="version-anatomy__label">🚀 Major</strong>
        <code className="version-anatomy__pos">X.2.X</code>
        <p>New features and capabilities.</p>
      </div>
    </div>
    <div className="version-anatomy__item version-anatomy__item--patch">
      <span className="version-anatomy__rule" aria-hidden="true"></span>
      <div>
        <strong className="version-anatomy__label">🔧 Minor</strong>
        <code className="version-anatomy__pos">X.X.1</code>
        <p>Fixes and small improvements.</p>
      </div>
    </div>
  </div>
</div>

So a build labeled `1.2.0-beta.7` is the seventh beta of the upcoming `1.2.0` major release, on its way to becoming the next stable.

## Why Your Feedback Matters

Beta is where MACE needs the biggest community support. Quality requires testing, and the more people exercising new features and reporting what they find, the better every stable release becomes.

<div className="community-grid community-grid--three">
  <a href="https://github.com/mace-app/mace/issues" className="community-card community-card--link">
    <img src="/img/mascots/bug-hunter.webp" alt="" className="community-card__mascot" width="440" height="440" loading="lazy" />
    <div className="community-card__title">Found a Bug?</div>
    <p className="community-card__desc">Report it on GitHub Issues so it gets fixed before stable ships.</p>
  </a>
  <a href="https://github.com/mace-app/mace/issues" className="community-card community-card--link">
    <img src="/img/mascots/idea-spark.webp" alt="" className="community-card__mascot" width="440" height="440" loading="lazy" />
    <div className="community-card__title">Have an Idea?</div>
    <p className="community-card__desc">Request features on GitHub Issues. Popular requests get prioritized.</p>
  </a>
  <a href="https://github.com/mace-app/mace/discussions" className="community-card community-card--link">
    <img src="/img/mascots/discussion-bubble.webp" alt="" className="community-card__mascot" width="440" height="440" loading="lazy" />
    <div className="community-card__title">Questions or Feedback?</div>
    <p className="community-card__desc">Join the conversation in GitHub Discussions and connect with other testers.</p>
  </a>
</div>

## Joining the Beta

There are two ways to get on the beta channel:

### Option 1: Switch Channels in the App (Recommended)

<ol className="beta-steps">
  <li><span className="beta-steps__num">1</span><div>Open <strong>MACE Settings → Updates</strong></div></li>
  <li><span className="beta-steps__num">2</span><div>Set <strong>Release Channel</strong> to <strong>Beta</strong> instead of <strong>Stable</strong></div></li>
</ol>

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--purple">📦</span>
      <strong>Release Channel</strong>
      <span className="build-option-item__control build-option-item__control--menu build-option-item__control--auto">
        <select className="build-option-item__menu" aria-label="Release Channel">
          <option className="is-default-option">Stable</option>
          <option>Beta</option>
        </select>
        <span className="build-option-item__label build-option-item__label--value">
          <span className="is-default">Default: <b>Stable</b></span>
          <span className="is-restore">Restore Default: <b>Stable</b></span>
        </span>
      </span>
    </div>
    <p>Ships as <strong>Stable</strong>, so you have to opt in. See <a href="/docs/reference/settings#updates">Settings → Updates</a> for the full reference.</p>
  </div>
</div>

<div className="themed-image themed-image--large">
  <img src="/img/screenshots/beta-settings-light.webp" alt="MACE Settings Updates pane with Release Channel set to Beta" className="img-light" />
  <img src="/img/screenshots/beta-settings-dark.webp" alt="MACE Settings Updates pane with Release Channel set to Beta" className="img-dark" />
</div>

From then on MACE automatically picks up beta and pre-release builds, exactly the way it handles stable updates. Switch back to **Stable** anytime to return to release builds only.

### Option 2: Download a Pre-Release

Grab the latest pre-release `.dmg` from the [pre-releases list on GitHub](https://github.com/mace-app/mace/releases?q=prerelease%3Atrue&expanded=true) (the newest one is at the top) and install it like any other build.

:::caution[Set your channel to Beta after installing]
If you download a pre-release but **don't** switch the release channel to **Beta** in **Settings → Updates**, the app will stay pinned on that version and won't see any updates. Always set the channel to Beta so you keep receiving new builds.
:::

## Beta OS Versions from mSCP

Beta isn't just about app builds. mSCP maintains **beta branches** where it tests rules for things that aren't out yet, like macOS 27. MACE can offer these beta OS versions when creating projects, and keep their rules downloaded for offline use.

<ol className="beta-steps">
  <li><span className="beta-steps__num">1</span><div>Open <strong>MACE Settings → General</strong></div></li>
  <li><span className="beta-steps__num">2</span><div>Turn on <strong>Show mSCP Beta Versions</strong> under <strong>mSCP Rules</strong></div></li>
</ol>

<div className="build-option-detail">
  <div className="build-option-item">
    <div className="build-option-item__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--red">🧪</span>
      <strong>Show mSCP Beta Versions</strong>
      <span className="build-option-item__control build-option-item__control--default-off">
        <input type="checkbox" id="sw-beta-page-mscp" className="build-option-item__input" aria-label="Show mSCP Beta Versions demo switch" />
        <label className="build-option-item__track" htmlFor="sw-beta-page-mscp"></label>
        <span className="build-option-item__label build-option-item__label--off">
          <span className="is-default">Default: <b>Off</b></span>
          <span className="is-restore">Restore Default: <b>Off</b></span>
        </span>
      </span>
    </div>
    <p>Off until you turn it on. See <a href="/docs/reference/settings#mscp-rules">Settings → General → mSCP Rules</a> for the full reference.</p>
  </div>
</div>

<div className="themed-image themed-image--large">
  <img src="/img/screenshots/mscp-beta-light.webp" alt="MACE Settings General pane with Show mSCP Beta Versions turned on" className="img-light" />
  <img src="/img/screenshots/mscp-beta-dark.webp" alt="MACE Settings General pane with Show mSCP Beta Versions turned on" className="img-dark" />
</div>

### mSCP Needs Beta Testers Too

MACE isn't the only project that needs beta testers. The [macOS Security Compliance Project](https://github.com/usnistgov/macos_security) lives on being cutting edge, and testing rules from its dev branches is how new OS versions ship ready on day one. If you spot a problem with a beta OS rule, report it upstream so the whole community benefits:

<div className="community-grid community-grid--compact">
  <a href="https://github.com/usnistgov/macos_security/issues" className="community-card community-card--link">
    <img src="/img/mscp-logo.webp" alt="" className="community-card__mascot" width="440" height="440" loading="lazy" />
    <div className="community-card__title">Report mSCP Issues</div>
    <p className="community-card__desc">Found a problem with a rule or baseline from a dev branch? File it on the mSCP GitHub Issues.</p>
  </a>
  <a href="https://macadmins.slack.com/archives/C0158JKQTC5" className="community-card community-card--link">
    <img src="/img/mascots/mscp-compliance.webp" alt="" className="community-card__mascot" width="440" height="440" loading="lazy" />
    <div className="community-card__title">#macos_security_compliance</div>
    <p className="community-card__desc">Talk beta rules with the mSCP community on Mac Admins Slack.</p>
  </a>
</div>

## Going Back to Stable

Not for you? Set the release channel back to **Stable** in **Settings → Updates**. Switching back does not downgrade the app; you simply stop seeing beta updates. From there you have two options:

<div className="beta-choices">
  <div className="beta-choice">
    <div className="beta-choice__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--blue">⬇️</span>
      <strong>Go back now</strong>
    </div>
    <p>Download the latest stable release from <a href="https://github.com/mace-app/mace/releases/latest">GitHub Releases</a> and install it over your beta build.</p>
  </div>
  <div className="beta-choice">
    <div className="beta-choice__header">
      <span className="build-option-item__icon build-option-item__icon--tile build-option-item__icon--gray">⏳</span>
      <strong>Stay put</strong>
    </div>
    <p>Remain on your current version until the next stable release comes out and updates you normally.</p>
  </div>
</div>
