---
sidebar_position: 3
description: Learn how MACE works, from government-sourced security data through customization and deployment to your Mac fleet.
title: "How MACE Works"
hide_title: true
---

<div className="doc-hero">
  <h1 className="doc-hero__title">How MACE Works</h1>
  <div className="doc-hero__body">
    <div className="doc-hero__figure">
      <img
        src="/img/mascots/how-mace-works.webp"
        alt="MACE mascot holding up a gear and cradling a sealed government scroll"
        className="doc-hero__mascot"
        width="440"
        height="440"
      />
    </div>
    <div className="doc-hero__text">
      <p className="doc-hero__lead">MACE turns government-sourced security compliance data into builds you can deploy.</p>
      <p className="doc-hero__sub">It's a native macOS app that takes that data, lets you customize it for your organization, and outputs it in formats you can push directly to your fleet.</p>
    </div>
  </div>
</div>

## Where the Data Comes From

<img src="/img/mascots/mscp-compliance.webp" alt="" className="intro-mascot" width="440" height="440" loading="lazy" />

The security rules inside MACE come straight from the **[macOS Security Compliance Project (mSCP)](https://github.com/usnistgov/macos_security)**, a publicly hosted project on GitHub maintained in collaboration with NIST and various U.S. government agencies and security teams. It takes guidance from a wide range of government and industry security standards and turns it into structured YAML: rules, baselines, and remediation scripts, all published in the open. New frameworks and revisions land regularly.

MACE reads from the project's **`main` branch**. It's designed around the **mSCP 2.0 unified codebase**, which is where the single OS-agnostic rule set lives, rather than the older per-release branches that each covered one version of macOS.

Because MACE reads that data directly, you're always working against current government-vetted guidance. MACE also maintains a built-in rule library of its own for compliance options and mappings that haven't made it into the public project yet, so you get that coverage sooner.

## Staying in Sync with mSCP

MACE pulls mSCP **straight from GitHub** and keeps a copy on disk. The rules you see are the ones the project published today, not whatever happened to be current the last time MACE shipped. There is a bundled copy inside the app, but it's a fallback for working offline.

<div className="how-it-works-steps">
  <div className="how-step">
    <div className="how-step__number">1</div>
    <div className="how-step__content">
      <strong>Pulls straight from the source</strong>
      <p>Open MACE and it checks GitHub for the latest version of the mSCP repository.</p>
    </div>
  </div>
  <div className="how-step">
    <div className="how-step__number">2</div>
    <div className="how-step__content">
      <strong>Caches it locally</strong>
      <p>The repo lands in <code>~/Library/Application Support/MACE/RepoCache</code>. Browsing rules and baselines reads from there, so nothing waits on the network.</p>
    </div>
  </div>
  <div className="how-step">
    <div className="how-step__number">3</div>
    <div className="how-step__content">
      <strong>Works offline</strong>
      <p>Every MACE release carries a full copy of mSCP frozen on the day it shipped. A build released on June 24 has the June 24 library inside it. That's what an air-gapped or offline Mac falls back to, so everything still works, you're just pinned to that date until the Mac can reach GitHub again.</p>
    </div>
  </div>
  <div className="how-step">
    <div className="how-step__number">4</div>
    <div className="how-step__content">
      <strong>Syncs when you open a project</strong>
      <p>A new project gets a clone of the current mSCP. When you open an older one, MACE compares it against the latest and asks whether you want to upgrade. It won't rewrite your work behind your back.</p>
    </div>
  </div>
  <div className="how-step">
    <div className="how-step__number">5</div>
    <div className="how-step__content">
      <strong>Shows you exactly what changed</strong>
      <p>Before you accept an upgrade, MACE lists every rule and file being updated, counts how many are new, removed, or relevant to your baseline, and links out to the full mSCP changelog. Your own edits and exported baselines come through untouched.</p>
    </div>
  </div>
</div>

<div className="themed-image themed-image--wide">
  <img src="/img/screenshots/project-updates-light.webp" alt="MACE prompting that newer mSCP content is available, listing the files being updated" className="img-light" />
  <img src="/img/screenshots/project-updates-dark.webp" alt="MACE prompting that newer mSCP content is available, listing the files being updated" className="img-dark" />
</div>

:::tip[Living project, cutting-edge rules]
mSCP moves quickly, so don't be surprised if upgrade prompts turn up often. That's the deal: a bit of churn in return for building against current guidance instead of a copy that's a year stale. And it's always your call. Nothing changes until you approve it.
:::

## What MACE Does With It

From there, the whole job happens in the app:

<div className="how-it-works-steps">
  <div className="how-step">
    <div className="how-step__number">1</div>
    <div className="how-step__content">
      <strong>Ingest</strong>
      <p>MACE loads the mSCP rule library and baselines so you can browse 800+ rules across every supported macOS, iOS, and visionOS release, without touching the command line or hand-editing YAML.</p>
    </div>
  </div>
  <div className="how-step">
    <div className="how-step__number">2</div>
    <div className="how-step__content">
      <strong>Customize</strong>
      <p>Turn rules on or off, set organization-defined values (ODVs), and shape baselines around what your environment actually needs. Every change is written back into the project on disk, the same edits you'd otherwise make by hand at the command line. Need something mSCP doesn't cover? Write your own rules and add them.</p>
    </div>
  </div>
  <div className="how-step">
    <div className="how-step__number">3</div>
    <div className="how-step__content">
      <strong>Build</strong>
      <p>Send your baseline through <a href="#two-engines-one-interface">the engine of your choice</a> and get back deployment-ready output: shell scripts, configuration profiles (.mobileconfig), declarative device management (DDM), and signed profiles for your MDM.</p>
    </div>
  </div>
  <div className="how-step">
    <div className="how-step__number">4</div>
    <div className="how-step__content">
      <strong>Audit</strong>
      <p>Check compliance on a real Mac, before you deploy and again afterward, to see what's passing and what needs attention.</p>
    </div>
  </div>
  <div className="how-step">
    <div className="how-step__number">5</div>
    <div className="how-step__content">
      <strong>Document</strong>
      <p>Produce readable documentation for your security team, your auditors, or leadership, showing which controls are in place and why.</p>
    </div>
  </div>
  <div className="how-step">
    <div className="how-step__number">6</div>
    <div className="how-step__content">
      <strong>Deploy</strong>
      <p>Push the validated build to your production fleet through your MDM, then keep an eye on it with the audit scripts and extension attributes MACE generated along the way.</p>
    </div>
  </div>
</div>

Most of that happens in the compliance editor, where every rule in your baseline is one list away and its details are editable on the spot:

<div className="themed-image themed-image--wide">
  <img src="/img/screenshots/compliance-editor-light.webp" alt="The MACE compliance editor showing a rule list and editable rule values" className="img-light" />
  <img src="/img/screenshots/compliance-editor-dark.webp" alt="The MACE compliance editor showing a rule list and editable rule values" className="img-dark" />
</div>

## The MACE Workflow

Build once, test on a small fleet, then deploy everywhere.

<div className="mace-workflow">
  <div className="mace-workflow__phase">
    <div className="mace-workflow__phase-badge mace-workflow__phase-badge--setup">Setup</div>
    <div className="mace-workflow__steps">
      <div className="mace-workflow__step">
        <div className="mace-workflow__step-icon">📁</div>
        <div className="mace-workflow__step-title">Create Project</div>
        <div className="mace-workflow__step-desc">Choose your platform and baseline</div>
      </div>
      <div className="mace-workflow__connector">→</div>
      <div className="mace-workflow__step">
        <div className="mace-workflow__step-icon">🔍</div>
        <div className="mace-workflow__step-title">Customize Rules</div>
        <div className="mace-workflow__step-desc">Enable, disable, and tune ODVs</div>
      </div>
      <div className="mace-workflow__connector">→</div>
      <div className="mace-workflow__step">
        <div className="mace-workflow__step-icon">🔨</div>
        <div className="mace-workflow__step-title">Build</div>
        <div className="mace-workflow__step-desc">Generate scripts, profiles, DDM</div>
      </div>
    </div>
  </div>

  <div className="mace-workflow__divider">↓</div>

  <div className="mace-workflow__phase">
    <div className="mace-workflow__phase-badge mace-workflow__phase-badge--test">Test</div>
    <div className="mace-workflow__steps">
      <div className="mace-workflow__step">
        <div className="mace-workflow__step-icon">🖥️</div>
        <div className="mace-workflow__step-title">Deploy to Test Fleet</div>
        <div className="mace-workflow__step-desc">Apply build to a small group</div>
      </div>
      <div className="mace-workflow__connector">→</div>
      <div className="mace-workflow__step">
        <div className="mace-workflow__step-icon">✅</div>
        <div className="mace-workflow__step-title">Audit</div>
        <div className="mace-workflow__step-desc">Verify compliance passes</div>
      </div>
      <div className="mace-workflow__connector">→</div>
      <div className="mace-workflow__step">
        <div className="mace-workflow__step-icon">📄</div>
        <div className="mace-workflow__step-title">Document</div>
        <div className="mace-workflow__step-desc">Generate reports for your team</div>
      </div>
    </div>
  </div>

  <div className="mace-workflow__divider">↓</div>

  <div className="mace-workflow__phase mace-workflow__phase--deploy">
    <div className="mace-workflow__phase-badge mace-workflow__phase-badge--deploy">Deploy</div>
    <div className="mace-workflow__steps mace-workflow__steps--center">
      <div className="mace-workflow__step mace-workflow__step--final">
        <div className="mace-workflow__step-icon">🚀</div>
        <div className="mace-workflow__step-title">Push to Production Fleet</div>
        <div className="mace-workflow__step-desc">Deploy via MDM and monitor ongoing compliance</div>
      </div>
    </div>
  </div>
</div>

### Where Each Step Happens

Each phase above lives in its own part of the app:

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

## Two Engines, One Interface

Once you've finished adding, removing, and tuning rules, that project has to become something you can actually deploy. That's the engine's job, and MACE gives you two to choose from. Both read the same project and the same settings; what differs is how they run:

<div className="engine-comparison">
  <div className="engine-card">
    <div className="engine-card__header">
      <img src="/img/engine-mscp.webp" alt="mSCP" className="engine-card__icon-img" />
      <h3>mSCP Engine</h3>
    </div>
    <p>The original Python scripts, run exactly as the project intends. You get what the scripts expose, the same way you always have.</p>
    <ul>
      <li>Standard mSCP output formats</li>
      <li>Only the options the scripts offer</li>
      <li>Full mSCP compatibility</li>
    </ul>
    <span className="engine-card__tag">Official Scripts</span>
  </div>

  <div className="engine-card engine-card--primary">
    <div className="engine-card__header">
      <img src="/img/engine-mace.webp" alt="M.A.C.E." className="engine-card__icon-img" />
      <h3>M.A.C.E. Engine</h3>
    </div>
    <p>Built in Swift. Tweak almost everything about every output, with options the scripts were never built to expose.</p>
    <ul>
      <li>Tweak almost every setting on every output</li>
      <li>Visual and content control across Build, Audit, and Documentation</li>
      <li>Direct MDM export, and more on the way</li>
    </ul>
    <span className="engine-card__tag">Fast &amp; Customizable</span>
  </div>
</div>

Switch between them whenever you like. Your project and everything you've customized stays put.

### What Runs Under the Hood

MACE brings its own runtime along, so there's nothing for you to install and nothing that touches the Python or development setup already on your Mac.

<div className="how-it-works-steps">
  <div className="how-step">
    <div className="how-step__number">1</div>
    <div className="how-step__content">
      <strong>mSCP Engine: bundled Python and Ruby</strong>
      <p>Python is bundled inside the app, and Ruby already comes with macOS. The first time you run the mSCP engine, MACE checks what dependencies mSCP currently wants (they change as the project moves) and installs them into their own environments at <code>&#126;/Library/Application Support/MACE/python_env</code> and <code>&#126;/Library/Application Support/MACE/ruby_gems</code>. Nothing goes system-wide.</p>
    </div>
  </div>
  <div className="how-step">
    <div className="how-step__number">2</div>
    <div className="how-step__content">
      <strong>Set up once</strong>
      <p>Those environments stick around after that first run. Later builds only check whether mSCP's dependency list has changed, so you sit through setup once rather than on every build.</p>
    </div>
  </div>
  <div className="how-step">
    <div className="how-step__number">3</div>
    <div className="how-step__content">
      <strong>M.A.C.E. Engine: native Swift</strong>
      <p>The M.A.C.E. engine skips all of that and does the work in native Swift, so there's no Python, no gems, and no dependency check to wait on.</p>
    </div>
  </div>
  <div className="how-step">
    <div className="how-step__number">4</div>
    <div className="how-step__content">
      <strong>You pick what comes out</strong>
      <p>Either engine gives you what you asked for: <strong>Build</strong> artifacts (scripts, profiles, DDM), <strong>Audit</strong> checks to run against a Mac, or <strong>Documentation</strong> for your team and auditors.</p>
    </div>
  </div>
</div>

You pick all of that in the build hub before anything runs:

<div className="themed-image themed-image--wide">
  <img src="/img/screenshots/build-light.webp" alt="The MACE build hub with output options for scripts, profiles, and audit reporting" className="img-light" />
  <img src="/img/screenshots/build-dark.webp" alt="The MACE build hub with output options for scripts, profiles, and audit reporting" className="img-dark" />
</div>
