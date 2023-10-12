// chess.js
document.addEventListener("DOMContentLoaded", function () {
    
    const gameModeSelect = document.getElementById("game-mode");
    const timerElement = document.getElementById("timer");
  
    let gameMode = "bullet"; // Пуля по умолчанию
    let timeLeft = 600; // Время в секундах (10 минут) по умолчанию
    let timerInterval;
  
    const updateTimer = () => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };
  
    const startTimer = () => {
      timerInterval = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
          updateTimer();
        } else {
          clearInterval(timerInterval);
        }
      }, 1000);
    };
  
    const handleGameModeChange = () => {
      gameMode = gameModeSelect.value;
      switch (gameMode) {
        case "bullet":
          timeLeft = 180;
          break;
        case "blitz":
          timeLeft = Math.floor(180 + Math.random() * 420); // От 3 до 10 минут
          break;
        case "rapid":
          timeLeft = 600;
          break;
      }
      updateTimer();
      clearInterval(timerInterval);
      startTimer();
    };
  
    gameModeSelect.addEventListener("change", handleGameModeChange);
    handleGameModeChange();
  });
  