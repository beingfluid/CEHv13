# 📚 CEH v13 Study Guide - Update Guide

## 🚀 Quick Update (Recommended)

### Method 1: Automatic with GitHub Actions (Easiest)

1. Edit any file in the repository (modules, includes, layouts, etc.)
2. Commit and push your changes:
   ```bash
   git add -A
   git commit -m "Your update message"
   git push
   ```
3. **That's it!** GitHub Actions will automatically:
   - Build the Jekyll site
   - Deploy to GitHub Pages
   - No manual building required!

### Method 2: Manual Local Build

If you prefer to build locally before pushing:

```bash
# 1. Make your changes to any files
# 2. Build the site
./build-jekyll.sh

# 3. Commit and push
git add -A
git commit -m "Your update message"
git push
```

## 📝 Common Update Tasks

### Adding a New Module

1. Create new file in `_modules/` folder: `XX-new-module.md`
2. Add front matter at the top:
   ```yaml
   ---
   layout: module
   title: "New Module Title"
   module: "Module XX"
   weight: XX
   permalink: /XX-new-module/
   categories: ["CEH", "Security"]
   tags: ["ethical-hacking", "security"]
   ---
   ```
3. Write your content in Markdown
4. Commit and push (GitHub Actions will handle the rest)

### Updating Existing Content

1. Edit any file in `_modules/` folder
2. Save your changes
3. Commit and push

### Updating Site Configuration

- Edit `_config.yml` for site settings
- Edit `_data/navigation.yml` for menu items
- Edit `_includes/` files for reusable components

### Updating Styling

- Edit `_sass/main.scss` for main styles
- Edit `assets/css/main.scss` for additional styles

## 🛠 Development Workflow

### Local Development (Optional)

To preview changes locally before pushing:

```bash
# 1. Start local server
bundle exec jekyll serve --livereload

# 2. Open browser to: http://localhost:4000/CEHv13/
# 3. Make changes and see them live
# 4. When satisfied, commit and push
```

### File Structure Reference

```
├── _modules/           # ← Edit these for content updates
│   ├── 01-intro.md
│   ├── 02-footprint.md
│   └── ...
├── _includes/          # ← Reusable components
├── _layouts/           # ← Page templates
├── _data/              # ← Navigation and data files
├── _sass/              # ← Styling files
├── assets/             # ← CSS, JS, images
└── docs/               # ← Built site (auto-generated)
```

## 🔧 Troubleshooting

### If GitHub Actions Fail

1. Check the Actions tab in your GitHub repository
2. Look at the build logs for error details
3. Common issues:
   - YAML syntax errors in front matter
   - Missing required fields in front matter
   - Liquid template syntax errors

### If Local Build Fails

```bash
# Check Jekyll/Ruby setup
bundle install

# Clean and rebuild
rm -rf docs/ _site/
bundle exec jekyll build
```

### Reset to Working State

```bash
# If something breaks, you can always rebuild
git pull origin main
rm -rf docs/
./build-jekyll.sh
```

## 📋 Quick Reference

| Task           | Command                                         |
| -------------- | ----------------------------------------------- |
| Add new module | Create file in `_modules/`                      |
| Update content | Edit existing `.md` files                       |
| Local preview  | `bundle exec jekyll serve`                      |
| Manual build   | `./build-jekyll.sh`                             |
| Deploy         | `git add -A && git commit -m "msg" && git push` |

## 🎯 Pro Tips

1. **Always use front matter** in module files for proper navigation
2. **Preview locally** when making major changes
3. **Use descriptive commit messages** for easier tracking
4. **Check the live site** after updates to ensure everything works
5. **GitHub Actions logs** are your friend for debugging

---

**Live Site**: https://beingfluid.github.io/CEHv13/ **Repository**: https://github.com/beingfluid/CEHv13
