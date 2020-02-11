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
var nexBtn = document.getElementById('nxtBtn')
var score = 0;
var body = document.getElementById('aKey')
// --------------------------------------------------------------------------------------------------------------
// start/next button even listener
startBtn.addEventListener('click', quizStart)
nxtBtn.addEventListener('click', () => {
    qIndex++
    checkAnswer()
    nextQuest()
})
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
    resetJumbo()
    qPop(qShuffle[qIndex])        
    }
// question and answer box text replacement
function qPop(question){
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
function answerSelec(e){
    var selBtn = e.target
    var correct = selBtn.dataset.correct
    correctStatus(document.body, correct)
    Array.from(answerBtnsEl.children).forEach(button => {
        correctStatus(button, button.dataset.correct)
    })
    if (qShuffle.length > qIndex +1){
    nxtBtn.classList.remove('hide')
    } else {
        prompt('enter your initials champ!')
    startBtn.innerText = 'Restart Test'
    startBtn.classList.remove('hide')
    }
}

function corCount(answer) {
    if (answer == qShuffle[qIndex].correct){
    }
}
function correctStatus(el, correct){
    clearCS(el)
    if(correct){
        el.classList.add('correct')
    } else {
        el.classList.add('wrong')

    }
}
// check answer function....finally working.
    function checkAnswer() {
    //     alert('test')
    //     document.body.classList.contains('correct')
    //     score++;   
    if( document.body.className.match('correct') ) { 
        score++
        alert('test')
        console.log(score)
     }
    }


 function clearCS(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
var questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
        {text:'Strings',},
        {text:'Booleans',},
        {text:'Alerts', correct:true},
        {text:'Numbers',}    
    ]
},
{
    question: 'The condition in an if/else statement is enclosed within___.',
    answers: [
    {text:'Quotes',},
    {text:'Currly Brackets',},
    {text:'Parentheses', correct:true},
    {text:'square brackets',}    
]
},
{
    question: 'Arrays in JavaScript can be used to store___.',
    answers: [
    {text:'Numbers and strings', correct:true},
    {text:'Other Arrays', correct:true},
    {text:'Booleans', correct:true},    
]
},
{
    question: 'String values must be enclosed within__ when being assigned to variables.',
    answers: [
    {text:'Quotes', correct:true},
    {text:'Currley Bois',},
    {text:'Commas',},
    {text:'Parentheses',}    
]
},
{
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    answers: [
    {text:'Javascript',},
    {text:'Terminal/Bash',},
    {text:'For Loops',},
    {text:'Console.log', correct:true}    
]
},
]


console.log(score)
