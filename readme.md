# Login & Registration System

[![CI/CD Pipeline](https://github.com/21omk/GitHub-Actions/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/21omk/GitHub-Actions/actions/workflows/ci-cd.yml)

A simple, responsive login and registration system built with HTML, CSS, and JavaScript. This project demonstrates modern web development practices with comprehensive CI/CD integration, automated testing, and quality assurance.

🔗 **[Live Demo](https://21omk.github.io/GitHub-Actions/)** | 📚 **[Workflows Documentation](WORKFLOWS.md)**

## Table of Contents

- [Features](#features)
- [How to Use](#how-to-use)
- [Files](#files)
- [Demo](#demo)
- [Technical Details](#technical-details)
- [GitHub Actions CI/CD Pipeline](#github-actions-cicd-pipeline)
- [Local Development](#local-development)
- [Contributing](#contributing)

## Features

- ✅ User registration with form validation
- ✅ User login with credential verification
- ✅ Responsive design with gradient styling
- ✅ Client-side data storage using localStorage
- ✅ Form validation and error handling
- ✅ Smooth animations and user feedback
- ✅ Session management with logout functionality

## How to Use

1. Open `index.html` in your web browser or serve it with a local web server
2. **Register**: Click "Register here" to create a new account
   - Fill in your full name, email, and password
   - Password must be at least 6 characters
   - Confirm password must match
3. **Login**: Use your registered credentials to log in
4. **Logout**: Click the logout button when logged in

## Files

- `index.html` - Main HTML structure with login/registration forms
- `styles.css` - Responsive CSS styling with gradient theme
- `script.js` - JavaScript functionality for form handling and validation

## Demo

The application includes:
- Login page with email and password fields
- Registration page with name, email, password, and confirm password fields
- Welcome page shown after successful login
- Error messages for invalid credentials or registration issues
- Automatic form switching and session persistence

## Technical Details

- Uses localStorage to store user data (for demo purposes only)
- Client-side validation for all form fields
- Responsive design that works on desktop and mobile
- No backend required - runs entirely in the browser

## GitHub Actions CI/CD Pipeline

This repository includes a comprehensive GitHub Actions workflow that provides:

### 🔍 Code Quality & Validation
- **HTML Validation**: Uses HTMLHint to validate HTML structure and best practices
- **CSS Linting**: Uses Stylelint with standard configuration for CSS code quality
- **JavaScript Linting**: Uses ESLint to catch JavaScript errors and enforce coding standards

### 🔒 Security Scanning
- **Trivy Scanner**: Scans for security vulnerabilities and uploads results to GitHub Security tab
- **SARIF Integration**: Security findings are integrated into GitHub's security dashboard

### 🧪 Browser Testing
- **Playwright Tests**: Cross-browser testing on Chrome, Firefox, and Safari
- **E2E Testing**: Comprehensive end-to-end tests covering:
  - Login form functionality
  - Registration form validation
  - User authentication flow
  - Form switching and navigation
  - Error handling scenarios

### 🚀 Deployment
- **GitHub Pages**: Automatic deployment to GitHub Pages on main branch pushes
- **Staging**: Pull requests trigger validation without deployment

### ⚡ Performance Monitoring
- **Lighthouse CI**: Automated performance, accessibility, and SEO audits
- **Performance Reports**: Generated after each deployment

### Workflow Triggers
- **Push**: Triggers on pushes to `main` or `master` branches
- **Pull Request**: Validates code quality and runs tests on pull requests

The workflow ensures code quality, security, and functionality before any deployment, providing confidence in the application's reliability.

## Local Development

To set up this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/21omk/GitHub-Actions.git
   cd GitHub-Actions
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   - Open `index.html` directly in your browser, or
   - Use the development server: `npm run serve`

4. **Run tests:**
   ```bash
   npm test
   ```

5. **Run linting:**
   ```bash
   npm run lint
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting to ensure quality
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

All contributions are subject to our CI/CD pipeline which includes code quality checks, security scanning, and automated testing.
