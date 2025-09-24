# GitHub Actions Workflows Documentation

This repository now includes a comprehensive GitHub Actions CI/CD setup with three different workflows:

## 🚀 Main CI/CD Pipeline (`ci-cd.yml`)

**Triggers:** Push to main/master, Pull Requests
**Purpose:** Complete CI/CD pipeline with deployment

### Jobs:

1. **Code Quality & Validation**
   - HTML validation using HTMLHint
   - CSS linting using Stylelint with standard config
   - JavaScript linting using ESLint
   - Fails if any code quality issues are found

2. **Security Scanning**
   - Trivy vulnerability scanner for filesystem
   - Results uploaded to GitHub Security tab
   - SARIF format for integration with GitHub

3. **Browser Testing**
   - Playwright end-to-end testing
   - Tests on Chromium browser
   - Uploads test reports as artifacts
   - Continues on failure for now (non-blocking)

4. **Build & Deploy**
   - Prepares files for GitHub Pages deployment
   - Only runs after successful validation and testing
   - Deploys to GitHub Pages (main/master only)

5. **Performance Auditing**
   - Lighthouse CI performance testing
   - Runs after successful deployment
   - Generates performance reports

## 🔍 Pull Request Validation (`pr-validation.yml`)

**Triggers:** Pull Requests only
**Purpose:** Fast validation without deployment

### Features:
- Quick code quality checks
- Basic browser testing
- Automatic PR comments with results
- No deployment (validation only)

## 📦 Dependency Check (`dependency-check.yml`)

**Triggers:** Weekly schedule (Mondays 2 AM) + Manual dispatch
**Purpose:** Security and dependency management

### Features:
- NPM audit for security vulnerabilities
- Check for outdated packages
- Generate dependency reports
- Upload reports as artifacts

## 🛠️ Configuration Files

- **package.json**: Dependencies and npm scripts
- **.htmlhintrc**: HTML validation rules
- **.stylelintrc.js**: CSS linting configuration
- **.eslintrc.js**: JavaScript linting rules
- **playwright.config.js**: Browser testing setup
- **.gitignore**: Excludes build artifacts and dependencies

## 📋 NPM Scripts

- `npm run lint`: Run all linting tools
- `npm run lint:html`: HTML validation only
- `npm run lint:css`: CSS linting only
- `npm run lint:js`: JavaScript linting only
- `npm test`: Run Playwright tests
- `npm run serve`: Local development server

## 🔧 Local Development

1. Install dependencies: `npm install`
2. Run linting: `npm run lint`
3. Run tests: `npm test`
4. Start dev server: `npm run serve`

## 🚀 Deployment

The application automatically deploys to GitHub Pages when code is pushed to the main branch and all checks pass.

## 🎯 Benefits

- **Quality Assurance**: Automated code quality checks
- **Security**: Regular vulnerability scanning
- **Testing**: Cross-browser compatibility testing
- **Performance**: Lighthouse auditing for web vitals
- **Automation**: Zero-touch deployment pipeline
- **Feedback**: PR comments and detailed reporting

The workflow ensures that only high-quality, secure, and tested code reaches production.