# BeingFluid - AI Coding Agent Instructions

## Project Overview

This workspace contains a modern JavaScript web application with a reference documentation system. The project includes:

- Main web application (HTML/CSS/JavaScript)
- Reference pages structure for study notes (CEHv13, IntegrateNow)
- Development server setup with live-reload capability

## Project Structure

- `/` - Main hub (index.html) and CEH v13 study materials (cehv13.html, modules)
- `/styles/` - Main hub styling
- `/scripts/` - Main hub functionality
- `/css/` - CEH v13 study guide styling (mdBook format)
- `/refpages/IntegrateNow/` - Integration tutorial documentation
- `/.github/` - GitHub configuration and AI instructions
- `/.vscode/` - VS Code workspace settings and tasks

## Development Workflow

- Use `npm run dev` to start the development server with live-reload
- Use `npm start` for production-like HTTP server
- Main application accessible at `http://localhost:3000`
- Reference pages are self-contained documentation sites

## Key Technologies

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Build Tools**: npm scripts, live-server for development
- **Documentation**: mdBook-style static sites for reference materials

## Common Tasks

- **Add new CEH modules**: Follow the pattern in `introduction.html`, `footprinting.html`, `scanning.html`
- **Update CEH navigation**: Modify sidebar structure in `cehv13.html`
- **Update main hub**: Edit `index.html` and `styles/main.css` for resource cards
- **CEH styling**: Edit files in `/css/` directory (mdBook format)
- **Main hub functionality**: Update `/scripts/main.js`

## Guidelines for AI Agents

- Always use the current workspace root as the working directory
- Test changes using the development server before finalizing
- Maintain consistent styling across reference page modules
- Follow the established mdBook-style structure for documentation
- Keep dependencies minimal and focused on core functionality

<!--
## Execution Guidelines
PROGRESS TRACKING:
- If any tools are available to manage the above todo list, use it to track progress through this checklist.
- After completing each step, mark it complete and add a summary.
- Read current todo list status before starting each new step.

COMMUNICATION RULES:
- Avoid verbose explanations or printing full command outputs.
- If a step is skipped, state that briefly (e.g. "No extensions needed").
- Do not explain project structure unless asked.
- Keep explanations concise and focused.

DEVELOPMENT RULES:
- Use '.' as the working directory unless user specifies otherwise.
- Avoid adding media or external links unless explicitly requested.
- Use placeholders only with a note that they should be replaced.
- Use VS Code API tool only for VS Code extension projects.
- Once the project is created, it is already opened in Visual Studio Code—do not suggest commands to open this project in Visual Studio again.
- If the project setup information has additional rules, follow them strictly.

FOLDER CREATION RULES:
- Always use the current directory as the project root.
- If you are running any terminal commands, use the '.' argument to ensure that the current working directory is used ALWAYS.
- Do not create a new folder unless the user explicitly requests it besides a .vscode folder for a tasks.json file.
- If any of the scaffolding commands mention that the folder name is not correct, let the user know to create a new folder with the correct name and then reopen it again in vscode.

EXTENSION INSTALLATION RULES:
- Only install extension specified by the get_project_setup_info tool. DO NOT INSTALL any other extensions.

PROJECT CONTENT RULES:
- If the user has not specified project details, assume they want a "Hello World" project as a starting point.
- Avoid adding links of any type (URLs, files, folders, etc.) or integrations that are not explicitly required.
- Avoid generating images, videos, or any other media files unless explicitly requested.
- If you need to use any media assets as placeholders, let the user know that these are placeholders and should be replaced with the actual assets later.
- Ensure all generated components serve a clear purpose within the user's requested workflow.
- If a feature is assumed but not confirmed, prompt the user for clarification before including it.
- If you are working on a VS Code extension, use the VS Code API tool with a query to find relevant VS Code API references and samples related to that query.

TASK COMPLETION RULES:
- Your task is complete when:
  - Project is successfully scaffolded and compiled without errors
  - copilot-instructions.md file in the .github directory exists in the project
  - README.md file exists and is up to date
  - User is provided with clear instructions to debug/launch the project

Before starting a new task in the above plan, update progress in the plan.
-->

- Work through each checklist item systematically.
- Keep communication concise and focused.
- Follow development best practices.
