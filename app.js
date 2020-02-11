// timer func stolen from this fella https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer cause i cant maths like this and a simple countdown that i can do was lame 
function startTimer(duration, display) {
    // vars
    var timer = duration,
        minutes, seconds;
    // timer interval count down
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        // min/sec countdown
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        // display for timer
        display.textContent = minutes + ":" + seconds;
        // if timer runs out
        if (--timer < 0) {
            alert('Oof')
            window.location.href = "index.html";
        }
    }, 1000);
}

// timer start function
window.onload = function () {
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
var nexBtn = document.getElementById('nxtBtn')
var score = 0;
var body = document.getElementById('aKey')
var scoreD = document.getElementById('score')
var nameArr = []
var scoreArr = []
function init() {
    var storedName = JSON.parse(localStorage.getItem("Name"))
    if (storedName !== null)
        nameArr = storedName
    var storedScore = JSON.parse(localStorage.getItem("score"))
    if (storedScore !== null)
        scoreArr = storedScore
}
function storedNS() {
    localStorage.setItem("Name", JSON.stringify(storedName))
    localStorage.setItem("score", JSON.stringify(storedScore))

}
// --------------------------------------------------------------------------------------------------------------
// start/next button even listener
startBtn.addEventListener('click', quizStart)
nxtBtn.addEventListener('click', () => {
    qIndex++
    checkAnswer()
    nextQuest()
    init()
})
// quiz start button function
function quizStart() {
    // hide start/next btn
    startBtn.classList.add('hide')
    // shuffle the question array
    qShuffle = questions.sort(() => Math.random() - 5)
    // set question index
    qIndex = 0
    // remove hidden class on question and asnswers
    aContainerEl.classList.remove('hide')
    // finally exe next questions function
    nextQuest()
    // storedNS()
}

// next question function
function nextQuest() {
    resetJumbo()
    qPop(qShuffle[qIndex])
}
// question and answer box text replacement
function qPop(question) {
    // replace q el, with q array index'
    qEl.innerText = question.question
    // for each answer loop to replace answers with new ones in array
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', answerSelec)
        answerBtnsEl.appendChild(button)
    })
}
// reset questions function
function resetJumbo() {
    nxtBtn.classList.add('hide')
    while (answerBtnsEl.firstChild) {
        answerBtnsEl.removeChild
            (answerBtnsEl.firstChild)
    }
}
// answer selections
function answerSelec(e) {
    var selBtn = e.target
    var correct = selBtn.dataset.correct
    correctStatus(document.body, correct)
    Array.from(answerBtnsEl.children).forEach(button => {
        correctStatus(button, button.dataset.correct)
    })
    if (qShuffle.length > qIndex + 1) {
        nxtBtn.classList.remove('hide')
    } else {
        // game finish promt

        storedName = prompt('enter your initials champ!')
        // score amalg
        // highScore = highScoreArr[0] + ":" + score
        // local storage high score saved
        var scorage = score

        // console.log(highScore)
        nameArr.push(storedName) // TODO
        scoreArr.push(scorage)
        localStorage.setItem('Name', JSON.stringify(nameArr))
        localStorage.setItem('score', JSON.stringify(scoreArr))
        alert(name + ':' + scorage)
        window.location.href = "highScores.html";
    }
}

function corCount(answer) {
    if (answer == qShuffle[qIndex].correct) {
    }
}
function correctStatus(el, correct) {
    clearCS(el)
    if (correct) {
        el.classList.add('correct')
    } else {
        el.classList.add('wrong')

    }
}
// check answer function....finally working.----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function checkAnswer() {
    //     alert('test')
    //     document.body.classList.contains('correct')
    //     score++;   
    if (document.body.className.match('correct')) {
        score++
        scoreD.innerText = score
    }
}
// check answer function....finally working.----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function clearCS(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
var questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            { text: 'Strings', },
            { text: 'Booleans', },
            { text: 'Alerts', correct: true },
            { text: 'Numbers', }
        ]
    },
    {
        question: 'The condition in an if/else statement is enclosed within___.',
        answers: [
            { text: 'Quotes', },
            { text: 'Currly Brackets', },
            { text: 'Parentheses', correct: true },
            { text: 'square brackets', }
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store___.',
        answers: [
            { text: 'Numbers and strings', correct: true },
            { text: 'Other Arrays', correct: true },
            { text: 'Booleans', correct: true },
        ]
    },
    {
        question: 'String values must be enclosed within__ when being assigned to variables.',
        answers: [
            { text: 'Quotes', correct: true },
            { text: 'Currley Bois', },
            { text: 'Commas', },
            { text: 'Parentheses', }
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            { text: 'Javascript', },
            { text: 'Terminal/Bash', },
            { text: 'For Loops', },
            { text: 'Console.log', correct: true }
        ]
    },
]