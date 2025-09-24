// Application State
let currentUser = null;

// DOM Elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const welcomeSection = document.getElementById('welcomeSection');
const loginMessage = document.getElementById('loginMessage');
const registerMessage = document.getElementById('registerMessage');
const welcomeMessage = document.getElementById('welcomeMessage');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showWelcome();
    }

    // Add event listeners to forms
    document.getElementById('login').addEventListener('submit', handleLogin);
    document.getElementById('register').addEventListener('submit', handleRegister);
});

// Show/Hide form functions
function showLogin() {
    hideAllSections();
    loginForm.style.display = 'block';
    clearMessages();
}

function showRegister() {
    hideAllSections();
    registerForm.style.display = 'block';
    clearMessages();
}

function showWelcome() {
    hideAllSections();
    welcomeSection.style.display = 'block';
    if (currentUser) {
        welcomeMessage.textContent = `Hello, ${currentUser.name}! You are successfully logged in.`;
    }
}

function hideAllSections() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    welcomeSection.style.display = 'none';
}

function clearMessages() {
    loginMessage.textContent = '';
    loginMessage.className = 'message';
    registerMessage.textContent = '';
    registerMessage.className = 'message';
}

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Find user with matching email and password
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        showMessage(loginMessage, 'Login successful!', 'success');
        setTimeout(() => {
            showWelcome();
        }, 1000);
    } else {
        showMessage(loginMessage, 'Invalid email or password. Please try again.', 'error');
    }
}

// Handle registration form submission
function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validate form data
    if (!validateRegistration(name, email, password, confirmPassword)) {
        return;
    }
    
    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user already exists
    if (users.some(u => u.email === email)) {
        showMessage(registerMessage, 'An account with this email already exists.', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now().toString(),
        name: name,
        email: email,
        password: password,
        createdAt: new Date().toISOString()
    };
    
    // Add user to users array and save to localStorage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    showMessage(registerMessage, 'Registration successful! You can now login.', 'success');
    
    // Clear form and switch to login after 2 seconds
    setTimeout(() => {
        document.getElementById('register').reset();
        showLogin();
    }, 2000);
}

// Validate registration form
function validateRegistration(name, email, password, confirmPassword) {
    if (name.trim().length < 2) {
        showMessage(registerMessage, 'Name must be at least 2 characters long.', 'error');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showMessage(registerMessage, 'Please enter a valid email address.', 'error');
        return false;
    }
    
    if (password.length < 6) {
        showMessage(registerMessage, 'Password must be at least 6 characters long.', 'error');
        return false;
    }
    
    if (password !== confirmPassword) {
        showMessage(registerMessage, 'Passwords do not match.', 'error');
        return false;
    }
    
    return true;
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show message helper
function showMessage(element, message, type) {
    element.textContent = message;
    element.className = `message ${type}`;
}

// Logout function
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showLogin();
}

// Clear all data function (for demo purposes)
function clearAllData() {
    localStorage.clear();
    currentUser = null;
    showLogin();
}