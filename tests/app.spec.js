const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('Login and Registration System', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test
    await page.goto('file://' + path.resolve('index.html'));
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('Login page loads correctly', async ({ page }) => {
    await page.goto('file://' + path.resolve('index.html'));
    
    // Check if login form is visible
    await expect(page.locator('h2')).toContainText('Login');
    await expect(page.locator('#loginEmail')).toBeVisible();
    await expect(page.locator('#loginPassword')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('Can switch to registration form', async ({ page }) => {
    await page.goto('file://' + path.resolve('index.html'));
    
    // Click on register link
    await page.click('text=Register here');
    
    // Check if registration form is visible
    await expect(page.locator('h2')).toContainText('Register');
    await expect(page.locator('#registerName')).toBeVisible();
    await expect(page.locator('#registerEmail')).toBeVisible();
    await expect(page.locator('#registerPassword')).toBeVisible();
    await expect(page.locator('#confirmPassword')).toBeVisible();
  });

  test('Can switch back to login form', async ({ page }) => {
    await page.goto('file://' + path.resolve('index.html'));
    
    // Go to register form first
    await page.click('text=Register here');
    await expect(page.locator('h2')).toContainText('Register');
    
    // Switch back to login
    await page.click('text=Login here');
    await expect(page.locator('h2')).toContainText('Login');
  });

  test('Registration validation works', async ({ page }) => {
    await page.goto('file://' + path.resolve('index.html'));
    await page.click('text=Register here');
    
    // Try to submit empty form
    await page.click('button[type="submit"]');
    
    // Check for HTML5 validation (browser will prevent submission)
    const nameInput = page.locator('#registerName');
    await expect(nameInput).toHaveAttribute('required');
  });

  test('Registration with valid data works', async ({ page }) => {
    await page.goto('file://' + path.resolve('index.html'));
    await page.click('text=Register here');
    
    // Fill registration form
    await page.fill('#registerName', 'Test User');
    await page.fill('#registerEmail', 'test@example.com');
    await page.fill('#registerPassword', 'password123');
    await page.fill('#confirmPassword', 'password123');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Check for success message
    await expect(page.locator('#registerMessage')).toContainText('Registration successful');
  });

  test('Login with registered user works', async ({ page }) => {
    await page.goto('file://' + path.resolve('index.html'));
    
    // First register a user
    await page.click('text=Register here');
    await page.fill('#registerName', 'Test User');
    await page.fill('#registerEmail', 'test@example.com');
    await page.fill('#registerPassword', 'password123');
    await page.fill('#confirmPassword', 'password123');
    await page.click('button[type="submit"]');
    
    // Wait for redirect to login
    await page.waitForTimeout(2500);
    
    // Login with the registered user
    await page.fill('#loginEmail', 'test@example.com');
    await page.fill('#loginPassword', 'password123');
    await page.click('button[type="submit"]');
    
    // Check for welcome message
    await expect(page.locator('#welcomeMessage')).toContainText('Hello, Test User');
  });

  test('Login with invalid credentials shows error', async ({ page }) => {
    await page.goto('file://' + path.resolve('index.html'));
    
    // Try to login with invalid credentials
    await page.fill('#loginEmail', 'nonexistent@example.com');
    await page.fill('#loginPassword', 'wrongpassword');
    await page.click('button[type="submit"]');
    
    // Check for error message
    await expect(page.locator('#loginMessage')).toContainText('Invalid email or password');
  });

  test('Logout functionality works', async ({ page }) => {
    await page.goto('file://' + path.resolve('index.html'));
    
    // Register and login
    await page.click('text=Register here');
    await page.fill('#registerName', 'Test User');
    await page.fill('#registerEmail', 'test@example.com');
    await page.fill('#registerPassword', 'password123');
    await page.fill('#confirmPassword', 'password123');
    await page.click('button[type="submit"]');
    
    await page.waitForTimeout(2500);
    await page.fill('#loginEmail', 'test@example.com');
    await page.fill('#loginPassword', 'password123');
    await page.click('button[type="submit"]');
    
    // Wait for welcome page and logout
    await page.waitForTimeout(1500);
    await page.click('text=Logout');
    
    // Check if back to login page
    await expect(page.locator('h2')).toContainText('Login');
  });
});