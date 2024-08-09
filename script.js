let startTime;
let timer;
const input = document.getElementById('input');
const textElement = document.getElementById('text');
const timeElement = document.getElementById('time');
const wpmElement = document.getElementById('wpm');

input.addEventListener('focus', startTest);
input.addEventListener('input', calculateWPM);

function startTest() {
    if (!startTime) {
        startTime = new Date();
        timer = setInterval(updateTime, 1000);
    }
}

function updateTime() {
    const elapsed = Math.floor((new Date() - startTime) / 1000);
    timeElement.textContent = elapsed;
}

function calculateWPM() {
    const elapsed = (new Date() - startTime) / 60000;
    const wordsTyped = input.value.trim().split(/\s+/).length;
    const wpm = Math.round(wordsTyped / elapsed);
    wpmElement.textContent = wpm;
}
