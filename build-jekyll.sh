#!/bin/bash

# Jekyll build script for GitHub Pages deployment
echo "Building Jekyll site to docs/ folder..."

# Clean previous build
rm -rf docs/

# Build Jekyll site
bundle exec jekyll build

# Verify build
if [ -d "docs" ]; then
    echo "✅ Jekyll site built successfully to docs/ folder"
    echo "📁 Contents:"
    ls -la docs/
    echo ""
    echo "🚀 Ready to push to GitHub for deployment!"
    echo "   Run: git add -A && git commit -m 'Update site' && git push"
else
    echo "❌ Build failed - docs/ folder not created"
    exit 1
fi