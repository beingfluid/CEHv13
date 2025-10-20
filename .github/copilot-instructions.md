# CEH v13 Study Guide - AI Coding Agent Instructions

## Project Overview

This workspace contains a comprehensive mdBook-based study guide for the Certified Ethical Hacker version 13 (CEH v13) certification. The project is designed for GitHub Pages deployment with automatic building via GitHub Actions.

## Project Structure

- `/src/` - Markdown source files for all study content
- `/docs/` - Built mdBook site (auto-generated, not in git)
- `/.github/workflows/` - GitHub Actions for automated deployment
- `/.vscode/` - VS Code workspace settings and mdBook tasks
- `/book.toml` - mdBook configuration file
- `/README.md` - Project documentation

## Development Workflow

- Use `mdbook serve --open` to start local development server
- Use `mdbook build` to build the static site manually
- Edit markdown files in `/src/` directory
- GitHub Actions automatically builds and deploys on push to main

## Key Technologies

- **Documentation**: mdBook (Rust-based static site generator)
- **Content**: Markdown files with code highlighting
- **Deployment**: GitHub Pages with GitHub Actions
- **Version Control**: Git with automated CI/CD

## Common Tasks

- **Add new CEH modules**: Create/edit markdown files in `/src/` directory
- **Update navigation**: Modify `src/SUMMARY.md` to add new chapters
- **Edit content**: Update individual module markdown files
- **Test locally**: Use `mdbook serve --open` for live preview
- **Deploy**: Commit and push to automatically deploy via GitHub Actions

## Guidelines for AI Agents

- Always use the current workspace root as the working directory
- Test changes using `mdbook serve` before finalizing
- Edit only markdown files in `/src/` directory for content
- Update `book.toml` for configuration changes
- Follow established markdown structure and formatting
- Keep content focused on CEH v13 study materials

---

_This workspace is set up for efficient mdBook development and maintenance._
