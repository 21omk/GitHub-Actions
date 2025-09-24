# Login & Registration System

[![CI/CD Pipeline](https://github.com/om-katyarmal_gavsgslb/GitHub_Actions/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/om-katyarmal_gavsgslb/GitHub_Actions/actions/workflows/ci-cd.yml)

A simple, responsive login and registration system built with HTML, CSS, and JavaScript.

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
