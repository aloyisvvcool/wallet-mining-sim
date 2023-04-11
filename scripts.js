const timerDisplay = document.getElementById('timer');
const startStopBtn = document.getElementById('startStopBtn');
const consoleOutput = document.getElementById('consoleOutput');
const counterDisplay = document.getElementById('counter');

let startTime;
let elapsedTime = 0;
let timerInterval;
let randomNumberInterval;
let isRunning = false;
let counter = 0;

function formatTime(time) {
    const pad = (num) => (num < 10 ? '0' + num : num);
    const seconds = Math.floor(time / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    return pad(hours) + ':' + pad(minutes % 60) + ':' + pad(seconds % 60);
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerDisplay.textContent = formatTime(elapsedTime);
    }, 1000);
    consoleOutput.value += 'Starting Mining Programming 1337...\n';
    scrollConsoleToBottom();
}

function stopTimer() {
    clearInterval(timerInterval);
    consoleOutput.value += 'Stopping Mining Programming 1337...\n';
    scrollConsoleToBottom();
}

function toggleTimer() {
    if (isRunning) {
        stopTimer();
        clearInterval(randomNumberInterval);
        startStopBtn.textContent = 'Start Mining';
    } else {
        startTimer();
        randomNumberInterval = setInterval(appendRandomNumber, 400);
        startStopBtn.textContent = 'Stop Mining';
    }
    isRunning = !isRunning;
}

function appendRandomNumber() {
    function generateRandomString() {
        const alphanumeric = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let randomString = '0x';
        for (let i = 0; i < 40; i++) {
          const randomIndex = Math.floor(Math.random() * alphanumeric.length);
          randomString += alphanumeric[randomIndex];
        }
        return randomString;
      }

    const randomstr = generateRandomString()
    consoleOutput.value += `Wallet ${randomstr} Mined -- 0.0000ETH\n`;
    scrollConsoleToBottom();
}

function scrollConsoleToBottom() {
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

startStopBtn.addEventListener('click', () => {
    toggleTimer();
});
