import './commands'

// cypress/support/e2e.js

// Import commands.js using ES2015 syntax:

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Hide fetch/XHR requests in command log
const app = window.top

if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
    const style = app.document.createElement('style')
    style.innerHTML =
        '.command-name-request, .command-name-xhr { display: none }'
    style.setAttribute('data-hide-command-log-request', '')

    app.document.head.appendChild(style)
}

// Optional: Add global error handling
Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false
})

// Optional: Add hooks for all tests
beforeEach(() => {
    // Run before each test
})

afterEach(() => {
    // Run after each test
})