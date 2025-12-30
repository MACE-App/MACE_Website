import clsx from 'clsx';
import {useState, useEffect, useRef} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
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

function WorkflowAnimation() {
  const steps = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12h14"/>
        </svg>
      ),
      label: 'Create'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/>
        </svg>
      ),
      label: 'Customize'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12l2 2 4-4"/>
          <path d="M12 3a9 9 0 1 0 9 9"/>
        </svg>
      ),
      label: 'Audit'
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
      label: 'Document'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      label: 'Build'
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

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  // Matrix rain - macOS commands and configs
  const macTerms = [
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
  const columns = Array.from({ length: 60 }, (_, i) => {
    // Shuffle and pick unique terms for each column
    const shuffled = [...macTerms].sort(() => Math.random() - 0.5);
    const terms = shuffled.slice(0, 5).join('\n');
    // Random start times, consistent speed
    const delay = Math.random() * 20;
    const duration = 22;
    return { id: i, terms, delay, duration };
  });

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.matrixBackground}>
        {columns.map((col) => (
          <div
            key={col.id}
            className={styles.matrixColumn}
            style={{
              left: `${col.id * 1.7}%`,
              animationDelay: `${col.delay}s`,
              animationDuration: `${col.duration}s`,
            }}
          >
            {col.terms}
          </div>
        ))}
      </div>
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
            href="https://github.com/mace-app/mace/releases">
            Download
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <TerminalAnimation />,
      title: 'No Command Line Required',
      desc: 'Visual interface for creating and managing compliance baselines. Built with SwiftUI for a fast, native macOS experience.',
      customIcon: true,
    },
    {
      icon: <WorkflowAnimation />,
      title: 'All-in-One Workflow',
      desc: 'Create, customize, audit, and export from a single app. Browse 500+ security rules with powerful search and filtering.',
      customIcon: true,
    },
    {
      icon: <ExportAnimation />,
      title: 'MDM-Ready Exports',
      desc: 'Generate deployment-ready profiles for Jamf, Intune, and more. Export to mobileconfig, plist, DDM, and signed profiles.',
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

function ScreenshotCarousel() {
  const screenshots = [
    { src: '/img/screenshots/compliance_builder_hub.png', title: 'Compliance Editor', desc: 'Browse and customize 500+ security rules' },
    { src: '/img/screenshots/audit.png', title: 'Audit & Export', desc: 'Run audits and generate detailed reports' },
    { src: '/img/screenshots/new_project.png', title: 'Project Management', desc: 'Create and manage compliance baselines' },
    { src: '/img/screenshots/documentation.png', title: 'Built-in Documentation', desc: 'Access rule details and remediation steps' },
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
                <img src={shot.src} alt={shot.title} />
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
      <div className="container">
        <Heading as="h2" className="text--center">
          Ready to Simplify macOS Compliance?
        </Heading>
        <p className="text--center">
          Download MACE for free and start building your security baselines today.
        </p>
        <div className={styles.ctaButtons}>
          <Link
            className="button button--primary button--lg"
            href="https://github.com/mace-app/mace/releases">
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
      description="Build, customize, audit, and deploy macOS security baselines — no command line required.">
      <HomepageHeader />
      <main>
        <FeaturesSection />
        <ScreenshotCarousel />
        <CTASection />
      </main>
    </Layout>
  );
}
