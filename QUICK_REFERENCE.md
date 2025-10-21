# 🚀 Quick Update Reference

## Most Common Tasks

### ✏️ Edit Content
1. Edit any `.md` file in `_modules/` folder
2. Save your changes  
3. **Just push**: `git add -A && git commit -m "Updated content" && git push`
4. **Done!** GitHub Actions builds and deploys automatically ✨

### ➕ Add New Module
1. Create `_modules/XX-new-topic.md`
2. Add front matter:
```yaml
---
layout: module
title: "Your Title"
module: "Module XX" 
weight: XX
permalink: /XX-new-topic/
---
```
3. Write content below the `---`
4. Commit and push - that's it! 🎉

### 🎨 Update Styling
- Edit `_sass/main.scss` for main styles
- Edit `assets/css/main.scss` for additional CSS
- Commit and push

### 🔧 Site Configuration  
- Edit `_config.yml` for site settings
- Edit `_data/navigation.yml` for navigation menu
- Commit and push

## 🔍 Testing Locally (Optional)
```bash
bundle exec jekyll serve --livereload
# Open: http://localhost:4000/CEHv13/
```

## 🎯 That's It!
**No manual building needed** - GitHub Actions handles everything automatically when you push to main branch!

📖 **Need more details?** See [UPDATE_GUIDE.md](UPDATE_GUIDE.md)