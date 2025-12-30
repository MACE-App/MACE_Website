import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

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
        <Heading as="h1" className="hero__title">
          M.A.C.E.
        </Heading>
        <p className={styles.heroSubtitle}>macOS Advanced Compliance Editor</p>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
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
      icon: '🖥️',
      title: 'No Command Line Required',
      desc: 'Visual interface for creating and managing compliance baselines. Built with SwiftUI for a fast, native macOS experience.',
    },
    {
      icon: '🔄',
      title: 'All-in-One Workflow',
      desc: 'Create, customize, audit, and export from a single app. Browse 500+ security rules with powerful search and filtering.',
    },
    {
      icon: '📦',
      title: 'MDM-Ready Exports',
      desc: 'Generate deployment-ready profiles for Jamf, Intune, and more. Export to mobileconfig, plist, DDM, and signed profiles.',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <span className={styles.featureIcon}>{feature.icon}</span>
              <Heading as="h3">{feature.title}</Heading>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScreenshotSection() {
  return (
    <section className={styles.screenshots}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          See MACE in Action
        </Heading>
        <div className={styles.screenshotGrid}>
          <div className={styles.screenshotCard}>
            <img src="/img/screenshots/compliance_builder_hub.png" alt="Compliance Editor" />
            <p><strong>Compliance Editor</strong><br/>Browse and customize 500+ security rules</p>
          </div>
          <div className={styles.screenshotCard}>
            <img src="/img/screenshots/audit.png" alt="Audit Results" />
            <p><strong>Audit & Export</strong><br/>Run audits and generate reports</p>
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
        <ScreenshotSection />
        <CTASection />
      </main>
    </Layout>
  );
}
