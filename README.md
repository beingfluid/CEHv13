# CEH v13 Study Guide

[![Auto-Build Jekyll Site](https://github.com/beingfluid/CEHv13/actions/workflows/deploy.yml/badge.svg)](https://github.com/beingfluid/CEHv13/actions/workflows/deploy.yml)

A comprehensive study guide for the **Certified Ethical Hacker version 13 (CEH v13)** certification exam. This repository contains all the study materials needed to prepare for the 312-50 exam.

🔗 **Live Site**: [https://beingfluid.github.io/CEHv13/](https://beingfluid.github.io/CEHv13/)

**Last Updated**: October 21, 2025 - Fully automated Jekyll deployment with GitHub Actions

## ✨ Features

- 🚀 **Automatic Deployment**: Push changes and GitHub Actions handles the build and deployment
- 🔍 **Full-Text Search**: Find content across all modules instantly
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- 🎨 **Clean Interface**: Easy-to-read layout with proper syntax highlighting
- ⚡ **Fast Loading**: Optimized Jekyll build with efficient navigation

## 📚 About This Guide

This study guide covers all 19 modules of the CEH v13 certification curriculum:

### Core Modules

1. **Introduction to Ethical Hacking** ✅
2. **Footprinting and Reconnaissance** ✅
3. **Scanning Networks** ✅
4. **Enumeration** 🚧
5. **Vulnerability Analysis** 🚧

### Attack Techniques

6. **System Hacking** 🚧
7. **Malware Threats** 🚧
8. **Sniffing** 🚧
9. **Social Engineering** 🚧
10. **Denial-of-Service** 🚧

### Advanced Topics

11. **Session Hijacking** 🚧
12. **Evading IDS, Firewalls, and Honeypots** 🚧
13. **Hacking Web Applications** 🚧
14. **SQL Injection** 🚧
15. **Hacking Wireless Networks** 🚧

### Emerging Technologies

16. **Hacking Mobile Platforms** 🚧
17. **IoT and OT Hacking** 🚧
18. **Cloud Computing** 🚧
19. **Cryptography** 🚧

**Legend**: ✅ Complete | 🚧 In Development | ⏳ Planned

## 🎯 Exam Information

- **Exam Code**: 312-50
- **Questions**: 125 multiple choice
- **Duration**: 4 hours
- **Passing Score**: 70%
- **Valid for**: 3 years

## 🏗️ Built with mdBook

This study guide is built using [mdBook](https://rust-lang.github.io/mdBook/), a command line tool to create books with Markdown. The site is automatically deployed to GitHub Pages using GitHub Actions.

### 🔧 Local Development

To contribute or run locally:

1. **Install mdBook**:

   ```bash
   # Via Homebrew (macOS)
   brew install mdbook

   # Via Cargo (Rust)
   cargo install mdbook
   ```

2. **Clone and serve**:

   ```bash
   git clone https://github.com/beingfluid/CEHv13.git
   cd CEHv13
   mdbook serve --open
   ```

3. **Build for production**:
   ```bash
   mdbook build
   ```

### 📁 Project Structure

```
├── src/                    # Markdown source files
│   ├── SUMMARY.md         # Table of contents
│   ├── introduction.md    # Main introduction
│   ├── 01-*.md           # Module chapters
│   └── exam-info.md      # Exam information
├── docs/                  # Built site (auto-generated)
├── book.toml             # mdBook configuration
├── .github/workflows/    # GitHub Actions
└── README.md            # This file
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### 📝 Content Contributions

- Add content to modules marked as "In Development"
- Improve existing content with better explanations
- Add practical examples and code snippets
- Create practice questions and exercises

### 🐛 Issues and Improvements

- Report errors or typos
- Suggest better explanations
- Request additional topics
- Provide feedback on organization

### 📋 Contribution Guidelines

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/module-4-enumeration`
3. **Edit the Markdown files** in the `src/` directory
4. **Test locally**: `mdbook serve` to preview changes
5. **Commit changes**: `git commit -m "Add enumeration techniques section"`
6. **Push and create PR**: Submit a pull request with description

### ✍️ Writing Guidelines

- Use clear, concise language
- Include practical examples
- Add code blocks with proper syntax highlighting
- Structure content with consistent headings
- Include review questions at the end of modules
- Cross-reference related modules

## 📖 Study Resources

### 🎓 Official Resources

- [EC-Council CEH Certification](https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/)
- [Official CEH Exam Blueprint](https://cert.eccouncil.org/images/doc/CEH-Exam-Blueprint-v3.0.pdf)

### 🛠️ Lab Setup

- **Kali Linux**: Primary penetration testing distribution
- **Vulnerable VMs**: Metasploitable, DVWA, WebGoat
- **Virtualization**: VMware, VirtualBox, or Hyper-V
- **Windows Labs**: Windows 10/11 and Server editions

### 📚 Additional Study Materials

- Hands-on lab practice
- EC-Council official courseware
- Practice examinations
- Community study groups

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Study Guide**: [https://beingfluid.github.io/CEHv13/](https://beingfluid.github.io/CEHv13/)
- **GitHub Repository**: [https://github.com/beingfluid/CEHv13](https://github.com/beingfluid/CEHv13)
- **Issues/Suggestions**: [https://github.com/beingfluid/CEHv13/issues](https://github.com/beingfluid/CEHv13/issues)

## 🏷️ Tags

`CEH` `CEHv13` `Ethical-Hacking` `Cybersecurity` `Penetration-Testing` `Study-Guide` `Certification` `mdBook` `GitHub-Pages`

---

**Happy studying and good luck with your CEH certification! 🚀**
