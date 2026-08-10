import clsx from 'clsx';
import {useState, useEffect, useRef} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useColorMode} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function TerminalAnimation() {
  const commands = [
    'sudo defaults write...',
    'security set-key...',
    'profiles install -path...',
  ];
  const [text, setText] = useState('');
  const [cmdIndex, setCmdIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const cmd = commands[cmdIndex];
    let timeout;

    if (!isDeleting) {
      if (text.length < cmd.length) {
        timeout = setTimeout(() => {
          setText(cmd.slice(0, text.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCmdIndex((cmdIndex + 1) % commands.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, cmdIndex]);

  return (
    <div className={styles.terminalIcon}>
      <div className={styles.terminalHeader}>
        <span className={styles.terminalDot} style={{background: '#FF5F56'}}></span>
        <span className={styles.terminalDot} style={{background: '#FFBD2E'}}></span>
        <span className={styles.terminalDot} style={{background: '#27CA40'}}></span>
      </div>
      <div className={styles.terminalBody}>
        <span className={styles.terminalPrompt}>$</span>
        <span className={styles.terminalText}>{text}</span>
        <span className={styles.terminalCursor}>|</span>
      </div>
    </div>
  );
}

// Each step's gradient picks up where the previous one left off, walking from
// the brand blue to the same green the export checkmarks use for "done".
// Dark mode runs the same blue-to-green walk in brighter tones, since the
// light ramp's deep blues disappear against a dark background.
const STEP_COLORS = [
  ['#0066CC', '#0A84FF'],
  ['#0A84FF', '#00A9C9'],
  ['#00A9C9', '#14B87A'],
  ['#14B87A', '#30D158'],
  ['#30D158', '#34C759'],
];

const STEP_COLORS_DARK = [
  ['#0A84FF', '#32ADE6'],
  ['#32ADE6', '#40C8E0'],
  ['#40C8E0', '#34D399'],
  ['#34D399', '#30D158'],
  ['#30D158', '#34C759'],
];

function WorkflowAnimation() {
  const {colorMode} = useColorMode();
  const stepColors = colorMode === 'dark' ? STEP_COLORS_DARK : STEP_COLORS;

  const steps = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12h14"/>
        </svg>
      ),
      label: 'New baseline'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/>
        </svg>
      ),
      label: 'Tailored rules'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      label: 'Scripts & profiles'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12l2 2 4-4"/>
          <path d="M12 3a9 9 0 1 0 9 9"/>
        </svg>
      ),
      label: 'Compliance report'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      label: 'Guides & docs'
    },
  ];
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.workflowIcon}>
      <div className={styles.workflowRow}>
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`${styles.workflowStep} ${idx === activeStep ? styles.workflowStepActive : ''}`}
            style={{
              '--step-from': stepColors[idx][0],
              '--step-to': stepColors[idx][1],
            }}
          >
            {step.icon}
          </div>
        ))}
      </div>
      <div className={styles.workflowLabel}>{steps[activeStep].label}</div>
    </div>
  );
}

function ExportAnimation() {
  const formats = ['.mobileconfig', '.plist', '.json', 'DDM'];
  const [formatIndex, setFormatIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setFormatIndex((prev) => (prev + 1) % formats.length);
        setIsAnimating(false);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.exportIcon}>
      <div className={styles.exportFile}>
        <div className={styles.exportFileCorner}></div>
        <div className={styles.exportFileLines}>
          <div className={styles.exportFileLine}></div>
          <div className={styles.exportFileLine}></div>
          <div className={styles.exportFileLine}></div>
        </div>
        <div className={`${styles.exportFormat} ${isAnimating ? styles.exportFormatAnimating : ''}`}>
          {formats[formatIndex]}
        </div>
      </div>
      <div className={styles.exportCheckmarks}>
        <span className={styles.exportCheck}>✓</span>
        <span className={styles.exportCheck}>✓</span>
        <span className={styles.exportCheck}>✓</span>
      </div>
    </div>
  );
}

// Matrix rain - macOS commands and configs
const MAC_TERMS = [
    'sudo', 'defaults', 'write', 'read', 'killall', 'launchctl', 'pmset', 'nvram',
    'spctl', 'csrutil', 'firmwarepasswd', 'fdesetup', 'security', 'codesign',
    'systemsetup', 'networksetup', 'scutil', 'dscl', 'pwpolicy', 'profiles',
    'mdmclient', 'jamf', 'munki', 'autopkg', 'osascript', 'plutil', 'PlistBuddy',
    'com.apple.screensaver', 'com.apple.loginwindow', 'com.apple.Safari',
    'com.apple.Terminal', 'com.apple.finder', 'com.apple.dock', 'com.apple.mail',
    '/Library/Preferences', '/System/Library', '/usr/bin', '/var/db',
    'LoginwindowText', 'DisableGuestAccount', 'RequirePassword', 'askForPassword',
    'GlobalPreferences', 'NSGlobalDomain', 'ScreenSaverDelay', 'idleTime',
    'FirewallEnabled', 'StealthMode', 'BlockAllIncoming', 'LoggingEnabled',
    'FileVault', 'Gatekeeper', 'SIP', 'APFS', 'SecureBoot', 'MDM', 'SCEP',
    'STIG', 'CIS', 'NIST', 'CMMC', '800-53', '800-171', 'mSCP', 'MACE',
    'mobileconfig', 'plist', 'profile', 'payload', 'DDM', 'declaration',
    'audit', 'remediate', 'compliant', 'baseline', 'benchmark', 'hardening',
    'chmod', 'chown', 'xattr', 'ditto', 'hdiutil', 'diskutil', 'softwareupdate',
    'true', 'false', 'enabled', 'disabled', 'enforced', 'required', 'allowed',
    'kextload', 'kextunload', 'SystemPolicy', 'TCC', 'PrivacyPreferences',
    'Accessibility', 'FullDiskAccess', 'Camera', 'Microphone', 'ScreenRecording',
    'Keychain', 'SecKeychain', 'AuthorizationDB', 'AuthorizationRight',
    'com.apple.security', 'com.apple.SystemPolicy', 'com.apple.TCC',
    'PasswordPolicy', 'minLength', 'maxFailedAttempts', 'lockoutDuration',
    'requireAlphanumeric', 'requireSymbol', 'expirationDays', 'historyCount',
    'AirDrop', 'Handoff', 'Bluetooth', 'WiFi', 'Ethernet', 'VPN', 'Firewall',
    'ApplicationFirewall', 'SocketFilter', 'ContentFilter', 'PacketTunnel',
    'XProtect', 'MRT', 'Notarization', 'Hardened Runtime', 'Entitlements',
    'sandbox', 'quarantine', 'translocation', 'AppNap', 'PowerNap',
    'TimeMachine', 'Spotlight', 'LaunchDaemon', 'LaunchAgent', 'LoginItem',
    'StartupItem', 'kernel_task', 'WindowServer', 'loginwindow', 'SystemUIServer',
    'SSHEnabled', 'RemoteLogin', 'RemoteManagement', 'ARDAgent', 'ScreenSharing',
    'FileSharing', 'PrinterSharing', 'InternetSharing', 'BluetoothSharing',
    'TouchID', 'FaceID', 'SecureEnclave', 'T2', 'AppleSilicon', 'Rosetta',
    'UniversalControl', 'Sidecar', 'Continuity', 'iCloud', 'FindMy',
    'RecoveryOS', 'DFU', 'ASR', 'IPSW', 'OTA', 'DEP', 'ABM', 'ASM', 'VPP',
    'ConfigurationProfile', 'PayloadContent', 'PayloadType', 'PayloadUUID',
    'InstallApplication', 'RemoveApplication', 'RestrictedSoftware',
    'AllowedApplications', 'BlockedApplications', 'ManagedPreferences',
    'MCX', 'DirectoryService', 'OpenDirectory', 'ActiveDirectory', 'LDAP',
    'Kerberos', 'SAML', 'OAuth', 'OIDC', 'SSO', 'PlatformSSO', 'SmartCard',
    'PIV', 'CAC', 'CryptoTokenKit', 'SecureToken', 'Bootstrap', 'Volume',
];

// Decorative falling-terms background, shared by the hero and the closing CTA.
function MatrixRain({count = 60, duration = 22}) {
  const columns = Array.from({length: count}, (_, i) => {
    // Shuffle and pick unique terms for each column
    const shuffled = [...MAC_TERMS].sort(() => Math.random() - 0.5);
    return {
      id: i,
      terms: shuffled.slice(0, 5).join('\n'),
      // Negative delay pre-warms each column so the rain is already mid-fall
      // on the first paint instead of filling in over time
      delay: -Math.random() * duration,
    };
  });

  return (
    <div className={styles.matrixBackground} aria-hidden="true">
      {columns.map((col) => (
        <div
          key={col.id}
          className={styles.matrixColumn}
          style={{
            left: `${(col.id * 100) / count}%`,
            animationDelay: `${col.delay}s`,
            animationDuration: `${duration}s`,
          }}
        >
          {col.terms}
        </div>
      ))}
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <MatrixRain />
      <div className="container">
        <img
          src="/img/logo.png"
          alt="MACE App Icon"
          className={styles.heroLogo}
        />
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          M.A.C.E.
        </Heading>
        <p className={styles.heroSubtitle}>macOS Advanced Compliance Editor</p>
        <p className={clsx('hero__subtitle', styles.heroTagline)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx(styles.heroButton, styles.heroButtonPrimary)}
            to="/docs/intro">
            Get Started
          </Link>
          <Link
            className={clsx(styles.heroButton, styles.heroButtonSecondary)}
            href="https://github.com/MACE-App/MACE/releases/latest">
            Download
          </Link>
        </div>
        <a
          href="https://macadmins.org/community/slack/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.heroSlackLink}>
          💬 Join us in <strong>#mace-app</strong> on Mac Admins Slack
        </a>
      </div>
    </header>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <TerminalAnimation />,
      title: 'No Command Line Required',
      desc: 'mSCP normally runs on scripts. MACE takes that hassle away, offering the official mSCP build engine alongside its own native engine for building compliance.',
      customIcon: true,
    },
    {
      icon: <WorkflowAnimation />,
      title: 'All-in-One Workflow',
      desc: (
        <>
          Create, customize, build, audit, and document baselines in one app. 800+ rules from every supported macOS, iOS, and visionOS release in NIST's{' '}
          <Link
            href="https://github.com/usnistgov/macos_security"
            target="_blank"
            rel="noopener noreferrer">
            macOS Security Compliance Project
          </Link>
          .
        </>
      ),
      customIcon: true,
    },
    {
      icon: <ExportAnimation />,
      title: 'MDM-Ready Exports',
      desc: 'Deploy straight to Jamf Pro, Workspace ONE, Intune, Iru, Fleet, Addigy, and more, or build mobileconfig, plist, DDM, and signed profiles locally for any MDM.',
      customIcon: true,
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              {feature.customIcon ? (
                feature.icon
              ) : (
                <div className={styles.featureIconWrapper}>
                  {feature.icon}
                </div>
              )}
              <Heading as="h3">{feature.title}</Heading>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  // Live totals from GitHub. Both fall back to a rounded-down floor if the API
  // is unreachable or rate limited (60 req/hr per IP for unauthenticated calls).
  const [downloads, setDownloads] = useState(null);
  const [stars, setStars] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch('https://api.github.com/repos/MACE-App/MACE/releases?per_page=100')
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((releases) => {
        const total = releases.reduce(
          (sum, release) =>
            sum +
            (release.assets || []).reduce((n, asset) => n + (asset.download_count || 0), 0),
          0,
        );
        if (!cancelled && total > 0) {
          setDownloads(total);
        }
      })
      .catch(() => {
        // Only fall back to a floor once the request has actually failed, so a
        // visitor never watches an approximate number correct itself
        if (!cancelled) setDownloads('8,900+');
      });

    fetch('https://api.github.com/repos/MACE-App/MACE')
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((repo) => {
        if (!cancelled && repo.stargazers_count > 0) {
          setStars(repo.stargazers_count);
        }
      })
      .catch(() => {
        if (!cancelled) setStars('150+');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const format = (value) => (typeof value === 'number' ? value.toLocaleString() : value);

  const stats = [
    {value: format(downloads), label: 'Downloads'},
    {value: '800+', label: 'Security rules'},
    {value: format(stars), label: 'GitHub stars'},
  ];

  return (
    <section className={styles.statsBand}>
      <div className="container">
        <div className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              {stat.value == null ? (
                <span className={styles.statPlaceholder} aria-hidden="true" />
              ) : (
                <span className={styles.statValue}>
                  {String(stat.value).replace(/\+$/, '')}
                  {String(stat.value).endsWith('+') && (
                    <span className={styles.statSuffix}>+</span>
                  )}
                </span>
              )}
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FrameworksStrip() {
  // Ordered by breadth of adoption, widest first
  const frameworks = [
    'CIS Level 1 & 2',
    'NIST 800-53',
    'DISA STIG',
    'CMMC',
    'NIST 800-171',
    'CIS v8',
    'CNSSI-1253',
    'HICP',
    'NL MAPGOV',
  ];

  return (
    <section className={styles.frameworks}>
      <div className="container">
        <p className={styles.frameworksLabel}>Built for the frameworks you answer to</p>
        <ul className={styles.frameworksList}>
          {frameworks.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <Link
          className={styles.frameworksLink}
          href="https://github.com/usnistgov/macos_security"
          target="_blank"
          rel="noopener noreferrer">
          See every baseline on the mSCP GitHub
        </Link>
      </div>
    </section>
  );
}

function SampleOutputs() {
  // Hosted locally so HTML renders as a real page - GitHub only shows its source.
  // Markdown is the exception: GitHub renders it, a static .md would just download.
  const samples = [
    {
      title: 'Audit Report',
      desc: 'Rule-by-rule pass and fail results with pass rate, severity, and compliance mapping, ready to hand to an auditor.',
      links: [
        {label: 'HTML', href: '/examples/Audit_Report_Example.html'},
        {label: 'PDF', href: '/examples/Audit_Report_Example.pdf'},
        {label: 'XLSX', href: '/examples/Audit_Report_Example.xlsx'},
        {label: 'CSV', href: '/examples/Audit_Report_Example.csv'},
        {label: 'JSON', href: '/examples/Audit_Report_Example.json'},
        {label: 'Markdown', href: '/examples/Audit_Report_Example.md'},
        {label: 'AsciiDoc', href: '/examples/Audit_Report_Example.adoc'},
      ],
    },
    {
      title: 'Compliance Documentation',
      desc: 'Full baseline guide with rule discussions, check procedures, and remediation steps for every control.',
      links: [
        {label: 'HTML', href: '/examples/Documentation_Example.html'},
        {label: 'PDF', href: '/examples/Documentation_Example.pdf'},
        {label: 'XLSX', href: '/examples/Documentation_Example.xlsx'},
        {label: 'CSV', href: '/examples/Documentation_Example.csv'},
        {label: 'JSON', href: '/examples/Documentation_Example.json'},
        {label: 'Markdown', href: '/examples/Documentation_Example.md'},
        {label: 'AsciiDoc', href: '/examples/Documentation_Example.adoc'},
      ],
    },
  ];

  return (
    <section className={styles.samples}>
      <div className="container">
        <Heading as="h2" className="text--center">
          See What MACE Produces
        </Heading>
        <p className={styles.samplesIntro}>Real output from a real build.</p>
        <div className={styles.samplesGrid}>
          {samples.map((sample) => (
            <div key={sample.title} className={styles.sampleCard}>
              <Heading as="h3">{sample.title}</Heading>
              <p>{sample.desc}</p>
              <div className={styles.sampleLinks}>
                {sample.links.map((link) => (
                  <Link
                    key={link.label}
                    className={styles.sampleLink}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className={styles.samplesNote}>
          * Every report is fully customizable. These are the default outputs.
        </p>
      </div>
    </section>
  );
}

function ScreenshotCarousel() {
  const {colorMode} = useColorMode();
  const isDarkMode = colorMode === 'dark';

  const screenshots = [
    {
      light: '/img/screenshots/main-menu-light.webp',
      dark: '/img/screenshots/main-menu-dark.webp',
      title: 'Main Menu',
      desc: 'Your compliance command center'
    },
    {
      light: '/img/screenshots/compliance-editor-light.webp',
      dark: '/img/screenshots/compliance-editor-dark.webp',
      title: 'Compliance Editor',
      desc: 'Browse and customize 800+ rules across macOS, iOS, and visionOS'
    },
    {
      light: '/img/screenshots/rule-builder-light.webp',
      dark: '/img/screenshots/rule-builder-dark.webp',
      title: 'Rule Builder',
      desc: 'Create custom compliance rules with ease'
    },
    {
      light: '/img/screenshots/audit-light.webp',
      dark: '/img/screenshots/audit-dark.webp',
      title: 'Audit & Export',
      desc: 'Run audits and generate detailed reports'
    },
    {
      light: '/img/screenshots/build-light.webp',
      dark: '/img/screenshots/build-dark.webp',
      title: 'Build Hub',
      desc: 'Generate scripts, profiles, and configurations'
    },
    {
      light: '/img/screenshots/documentation-light.webp',
      dark: '/img/screenshots/documentation-dark.webp',
      title: 'Documentation',
      desc: 'Export comprehensive compliance guides'
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  return (
    <section className={styles.carousel}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          See MACE in Action
        </Heading>
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselTrack} style={{ transform: `translateX(-${current * 100}%)` }}>
            {screenshots.map((shot, idx) => (
              <div key={idx} className={styles.carouselSlide}>
                <img src={isDarkMode ? shot.dark : shot.light} alt={shot.title} />
              </div>
            ))}
          </div>
          <div className={styles.carouselInfo}>
            <h3>{screenshots[current].title}</h3>
            <p>{screenshots[current].desc}</p>
          </div>
          <div className={styles.carouselDots}>
            {screenshots.map((_, idx) => (
              <button
                key={idx}
                className={clsx(styles.carouselDot, idx === current && styles.carouselDotActive)}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.cta}>
      <MatrixRain />
      <div className="container">
        <Heading as="h2" className="text--center">
          Ready to Simplify Apple Compliance?
        </Heading>
        <p className="text--center">
          Download MACE for free and start building your security baselines today.
        </p>
        <div className={styles.ctaButtons}>
          <Link
            className="button button--primary button--lg"
            href="https://github.com/MACE-App/MACE/releases/latest">
            Download MACE
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Read the Docs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="macOS Advanced Compliance Editor"
      description="Build, customize, audit, and deploy Apple security baselines — no command line required.">
      <HomepageHeader />
      <main>
        <StatsBand />
        <FeaturesSection />
        <FrameworksStrip />
        <ScreenshotCarousel />
        <SampleOutputs />
        <CTASection />
      </main>
    </Layout>
  );
}
