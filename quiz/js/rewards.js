/**
 * Handles the reward distribution and display
 */

// Total reward to distribute across all questions in R$
const TOTAL_REWARD = 597.00;
// Usamos o tamanho real do array de perguntas em vez de fixar em 11

// Generate random reward distribution that sums to exactly TOTAL_REWARD
function generateRewards() {
  const NUM_QUESTIONS = (typeof quizQuestions !== 'undefined') ? quizQuestions.length : 9;
  const rewards = [];
  let remainingTotal = TOTAL_REWARD;
  let remainingQuestions = NUM_QUESTIONS;
  
  // Generate random values for each question
  for (let i = 0; i < NUM_QUESTIONS; i++) {
    if (i === NUM_QUESTIONS - 1) {
      // Last question gets the remaining amount to ensure exact total
      rewards.push(Math.round(remainingTotal * 100) / 100);
    } else {
      // Calculate a random portion of the remaining total
      const maxPortion = (remainingTotal / remainingQuestions) * 1.4;
      const minPortion = (remainingTotal / remainingQuestions) * 0.6;
      
      const reward = getRandomNumber(minPortion, maxPortion);
      const roundedReward = Math.round(reward * 100) / 100; // Round to 2 decimal places
      
      rewards.push(roundedReward);
      remainingTotal -= roundedReward;
      remainingQuestions--;
    }
  }
  
  // Shuffle the rewards for added randomness (except the last one, which is fixed)
  const shuffledRewards = shuffleArray(rewards.slice(0, -1));
  shuffledRewards.push(rewards[rewards.length - 1]);
  
  return shuffledRewards;
}

// Reward modal handling
const rewardModal = document.getElementById('reward-modal');
const rewardValue = document.getElementById('reward-value');
const continueRewardBtn = document.getElementById('continue-reward-btn');
const currentBalance = document.getElementById('current-balance');
const finalModal = document.getElementById('final-modal');
const totalReward = document.getElementById('total-reward');
const restartBtn = document.getElementById('restart-btn');

// Initialize rewards
let rewards = generateRewards();
let totalEarned = 0;

// Animate number counting for currency
function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const current = progress * (end - start) + start;
    element.textContent = formatCurrency(current);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Show the reward modal with animation and confetti
function showReward(questionIndex) {
  const reward = rewards[questionIndex] || 65.20;
  totalEarned += reward;
  
  // Update the current balance with animation
  animateValue(currentBalance, totalEarned - reward, totalEarned, 800);
  
  // Update the reward value in the modal with animation
  rewardValue.textContent = "0,00";
  
  // Show the modal with animation
  rewardModal.classList.add('active');
  setTimeout(() => {
    startConfetti();
    animateValue(rewardValue, 0, reward, 350);
  }, 10);
  
  // Add bounce animation to the reward amount
  animateElement(document.querySelector('.reward-amount'), 'bounce');
}

// Hide the reward modal
function hideReward() {
  rewardModal.classList.remove('active');
  stopConfetti();
}

// Show the final modal
function showFinalReward() {
  totalReward.textContent = "0,00";
  
  finalModal.classList.add('active');
  setTimeout(() => {
    startConfetti();
    animateValue(totalReward, 0, TOTAL_REWARD, 600);
  }, 10);
  
  // Add bounce animation to the final reward amount
  animateElement(document.querySelector('.final-content .reward-amount'), 'bounce');
}

// Hide the final modal
function hideFinalReward() {
  finalModal.classList.remove('active');
  stopConfetti();
}

// Event listeners
continueRewardBtn.addEventListener('click', () => {
  hideReward();
  nextQuestion();
});

restartBtn.addEventListener('click', () => {
  hideFinalReward();
  showPage('withdraw');
});
