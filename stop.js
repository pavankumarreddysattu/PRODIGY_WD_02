let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const recordButton = document.getElementById("record");
const recordsContainer = document.getElementById("records");

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const milliseconds = Math.floor(elapsedTime % 1000);

    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}

function start() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 1000);
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    display.textContent = "00:00:00";
}

function record() {
    if (isRunning) {
        const recordTime = display.textContent;
        const recordElement = document.createElement("li");
        recordElement.textContent = recordTime;
        recordsContainer.appendChild(recordElement);
    }
}

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);
recordButton.addEventListener("click",record)