// Fake countdown (minutes:seconds)
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

    // Fake viewers
    let viewers = Math.floor(1553 + Math.random() * 50);
    const viewersEl = document.getElementById('viewers');
    setInterval(() => {
      viewers += Math.floor(Math.random() * 3 - 1); // +/- 1
      viewersEl.textContent = viewers;
    }, 3000);
    viewersEl.textContent = viewers;

    // Fake stock countdown
    let stock = 27;
    const stockEl = document.getElementById('stock');
    setInterval(() => {
      if (stock > 12 && Math.random() < 0.3) stock--;
      stockEl.textContent = stock;
    }, 4000);
    stockEl.textContent = stock;

    // Trigger offer after a set timeout (e.g., simulate video time)
    setTimeout(() => {
      document.getElementById('offer').classList.remove('hidden');
      document.getElementById('offer').scrollIntoView({ behavior: 'smooth' });
    }, 7 * 1 * 1000); // 3 minutes as placeholder