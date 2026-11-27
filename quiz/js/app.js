/**
 * Main application initialization
 */

// Initialize the quiz
document.addEventListener('DOMContentLoaded', () => {
  // Start with the first question
  renderQuestion(0);
  
  // Initialize pages navigation
  initializePages();
});

// Global function called by SACAR button in header
function continueToWithdraw() {
    const modalSaque = document.getElementById('modalsaque');
    if (modalSaque) {
        modalSaque.style.display = 'flex';
    }
}