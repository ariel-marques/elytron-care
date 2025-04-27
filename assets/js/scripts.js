// FAKE COUNTDOWN (MINUTES:SECONDS)
let countdown = 9 * 60 + 59; // 9 minutes and 59 seconds
const timerEl = document.getElementById('timer');
function updateTimer() {
  const min = String(Math.floor(countdown / 60)).padStart(2, '0');
  const sec = String(countdown % 60).padStart(2, '0');
  timerEl.textContent = `${min}:${sec}`;
  if (countdown > 0) countdown--;
}
setInterval(updateTimer, 1000);
updateTimer();

// FAKE VIEWERS
let viewers = Math.floor(1553 + Math.random() * 50);
const viewersEl = document.getElementById('viewers');
setInterval(() => {
  viewers += Math.floor(Math.random() * 3 - 1); // +/- 1
  viewersEl.textContent = viewers;
}, 3000);
viewersEl.textContent = viewers;

// FAKE STOCK COUNTDOWN CONTROLADO
let stock = 150;
const stockEl = document.getElementById('stock');

function updateStock() {
  if (stock > 18 && Math.random() < 0.3) {
    stock--;
  }
  stockEl.textContent = stock;
}

setInterval(updateStock, 4000);

stockEl.textContent = stock;

// TRIGGER OFFER AFTER A SET TIMEOUT (E.G., SIMULATE VIDEO TIME)
setTimeout(() => {
  document.getElementById('offer').classList.remove('hidden');
  document.getElementById('offer').scrollIntoView({ behavior: 'smooth' });
}, 7 * 1 * 1000); // 3 minutes as placeholder

// EXIT INTENT POPUP
let exitPopupShown = false;

function showExitPopup() {
  if (!exitPopupShown) {
    document.getElementById('exit-popup').classList.remove('hidden');
    exitPopupShown = true;
  }
}

document.addEventListener('mouseout', function (e) {
  if (e.clientY < 10) {
    showExitPopup();
  }
});

document.getElementById('close-exit-popup').addEventListener('click', function () {
  document.getElementById('exit-popup').classList.add('hidden');
});

// FUNÇÃO PARA ABRIR O POPUP DE BÔNUS VTURB
function showBonusPopup() {
  const bonusPopup = document.getElementById('bonus-popup');
  if (bonusPopup) {
    bonusPopup.classList.remove('hidden');
  }
}

// Função para fechar o popup de bônus
function closeBonusPopup() {
  const bonusPopup = document.getElementById('bonus-popup');
  if (bonusPopup) {
    bonusPopup.classList.add('hidden');
  }
}

// Fecha o popup ao clicar no botão "X"
document.addEventListener('DOMContentLoaded', function() {
  const closeBtn = document.getElementById('close-bonus-popup');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeBonusPopup);
  }
});

// --- SIMULAÇÃO PARA TESTAR AGORA ---
// Depois substituímos isso pela trigger real do VTurb
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(showBonusPopup, 2000); // apenas para teste: aparece 2 segundos depois de abrir a página
});

// --- INTEGRAÇÃO REAL COM VTURB ---
// (para depois quando o vídeo for assistido até o final)

// Exemplo que vamos usar com a API do VTurb:
// player.on('complete', () => {
//    showBonusPopup();
// });
