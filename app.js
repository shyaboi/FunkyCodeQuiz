// timer func
function startTimer(duration, display) {
    // vars
    var timer = duration,
        minutes, seconds;
// timer interval count down
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        // min/sec countdown
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        // display for timer
        display.textContent = minutes + ":" + seconds;
        // if timer runs out
        if (--timer < 0) {
            prompt('you done son!, enter your initials:')
        }
    }, 1000);
}

// timer start function
window.onload = function() {
    var loadDisp = 60 * 20,
    // push timer disp to span
        display = document.querySelector('#time');
    startTimer(loadDisp, display);
};

const startBtn = document.getElementById('startBtn')
const qContainerEl = document.getElementById('qContainer')

startBtn.addEventListener('click', quizStart)

function quizStart() {
    startBtn.classList.add('hide')
    qContainerEl.classList.remove('hide')
}


function nextQuest(){

}


function answerSelec(){

}
