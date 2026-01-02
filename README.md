# MACE Documentation Website

<p align="center">
  <img src="static/img/app-icon.png" alt="MACE Logo" width="150" height="150">
</p>

<p align="center">
  <strong>Documentation for MACE - macOS Advanced Compliance Editor</strong>
</p>

<p align="center">
  <a href="https://github.com/mace-app/mace">Main App Repository</a> •
  <a href="https://github.com/mace-app/mace/releases">Download MACE</a> •
  <a href="https://github.com/mace-app/mace/discussions">Community</a>
</p>

---

This repository contains the documentation website for [MACE](https://github.com/mace-app/mace), a native macOS application for managing security compliance baselines using the [macOS Security Compliance Project (mSCP)](https://github.com/usnistgov/macos_security).

## What is MACE?

MACE provides a graphical interface to:

- **Browse & Customize** 500+ security compliance rules from NIST, CIS, DISA STIG, and more
- **Build** configuration profiles, scripts, and DDM declarations
- **Audit** your Mac against security baselines in real-time
- **Generate** professional compliance documentation

## Documentation Structure

```
docs/
├── getting-started/     # Installation, overview, projects
├── compliance-editor/   # Rule browsing and customization
├── build/               # Profile, script, and DDM generation
├── audit/               # Running audits and exporting results
├── documentation/       # Generating compliance docs
├── custom-rules/        # Creating custom YAML rules
└── reference/           # Settings and configuration
```

## Local Development

This site is built with [Docusaurus](https://docusaurus.io/).

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Contributing

Found an error in the docs? Want to improve something?

1. Fork this repository
2. Create a branch for your changes
3. Submit a pull request

## Related Links

- [MACE App Repository](https://github.com/mace-app/mace)
- [macOS Security Compliance Project](https://github.com/usnistgov/macos_security)
- [NIST SP 800-219](https://csrc.nist.gov/publications/detail/sp/800-219/final)

## License

This documentation is released under the MIT License.
