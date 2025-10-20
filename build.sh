#!/bin/bash

# Build the mdBook
echo "Building mdBook..."
mdbook build

# Copy questions.json to the docs directory
echo "Copying questions.json to docs directory..."
cp questions.json docs/

echo "Build complete!"