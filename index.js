// Retrieve HTML elements
let timeDisplay = document.getElementById('timeDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

// Initialize time variables
let msec = 0;
let sec = 0;
let min = 0;
let timerId = null;

// Function to update the display
function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
        }
    }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;

    timeDisplay.innerHTML = `${minString} : ${secString} : ${msecString}`;
}

// Event listeners for buttons
startBtn.addEventListener('click', function() {
    if (timerId != null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 100);
});

stopBtn.addEventListener('click', function() {
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function() {
    clearInterval(timerId);
    msec = 0;
    sec = 0;
    min = 0;
    timeDisplay.innerHTML = `00 : 00 : 00`;
});
