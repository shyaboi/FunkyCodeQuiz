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
// --------------------------------------------------------------------------------------------------------------
// var dec
const startBtn = document.getElementById('startBtn')
const aContainerEl = document.getElementById('aContainer')
var answerBtnsEl = document.getElementById('answerBtns')
var qIndex
var qEl = document.getElementById('question')
let qShuffle
// --------------------------------------------------------------------------------------------------------------
// start button even listener
startBtn.addEventListener('click', quizStart)
// quiz start button function
function quizStart() {
    // hide start/next btn
    startBtn.classList.add('hide')
    nxtBtn.classList.add('hide')
    // shuffle the question array
    qShuffle = questions.sort(()=> Math.random() - 5)
    // set question index
    qIndex = 0
    // remove hidden class on question and asnswers
    aContainerEl.classList.remove('hide')
// finally exe next questions function
    nextQuest()
}

// next question function
function nextQuest(){
    qPop(qShuffle[qIndex])        
    }
// question and answer box text replacement
function qPop(question){
    qEl.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', answerSelec)
        answerBtnsEl.appendChild(button)
    })
}

function answerSelec(e){

}

var questions = [
    {
        question: 'question the first',
        answers: [
        {text:'yes', correct:true },
        {text:'no', correct:false}
    ]
}
]
