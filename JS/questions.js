// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const timer = document.getElementById('timer');
const scoreDiv = document.getElementById("scoreContainer");
const backButton = document.getElementById('index');
const namePrompt = document.getElementById("names");
var interval;


//This is my 75 seconds timer
var time = 75; //75 seconds
var seconds = 0;
// create our questions
let questions = [
    {
        question : "Commonly used data types do NOT include?",
        imgSrc : "img/html.png",
        choiceA : "Strings",
        choiceB : "Booleans",
        choiceC : "Alerts",
        choiceD : "Numbers",
        correct : "B"
    },{
        question : "Arrays in JavaScript can be used to store:?",
        imgSrc : "img/css.png",
        choiceA : "Numbers and Strings",
        choiceB : "Other Arrays",
        choiceC : "Booleans",
        choiceD : "All of the above",
        correct : "D"
    },{
        question : "The condition in an if statement / else statement is enclose within _________?",
        imgSrc : "img/js.png",
        choiceA : "Quotes",
        choiceB : "Curly brackets",
        choiceC : "Parenthesis",
        choiceD : "Square brackets",
        correct : "C"
    },{
        question : "String values must be enclosed within ___________ when being assinged to variables?",
        imgSrc : "img/js.png",
        choiceA : "Quotes",
        choiceB : "Curly brackets",
        choiceC : "Commas",
        choiceD : "Parenthesis",
        correct : "B"
    },{
        question : "A very useful tool during development and debbuging for printing content to the debbuger is:",
        imgSrc : " img/js.png",
        choiceA : "JavaScript", 
        choiceB : "Terminal/Bash",
        choiceC : "For Loops",
        choiceD : "Console.log",
        correct : "C"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let scoreTime;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    startTimer();
}



// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        answerIsCorrect();
    }else{
        // answer is wrong
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        scoreRender();
        //clearInterval();
        location.replace("highscores.html");
    }
}

// answer is correct
function answerIsCorrect(){
    console.log("Answer is correct");
}

// answer is Wrong
function answerIsWrong(){
    console.log("Answer is wrong");
    time-= 5;
}

function startTimer() {
    document.getElementById('timer').innerHTML = "<b>Time Left: </b>" + ': ' + time;
    interval = setInterval(function(){
        time--
        document.getElementById('timer').innerHTML = "<b>Time Left: </b>" + ': ' + time;        
    }, 1000); 
}
//Score = remaing time after all questions answered
function scoreRender() {
    console.log("Render score")
    scoreTime = time;
    document.getElementById('scoreContainer').innerHTML = "<b>Your Score is: </b>" + ': ' + scoreTime; 
    //High scores record
    window.localStorage.setItem('scoreTime', JSON.stringify(scoreTime,));
}

// BACK button to Inde.html
function backToIndex (){
    location.replace("./index.html");
}

// Back to HighScores
function highScores(){
    location.replace("./highscores.html");
}

//CLEAR button to clear highscores
function clear(){
    localStorage.clear();
}
// Name input in prompt

    function name() {
        var person = prompt("Please enter your name", "Big Daddy");
        if (person != null) {
          document.getElementById("names").innerHTML =
          person + "Your Score:" + localStorage.getItem('scoreTime',);
          window.localStorage.setItem('person', JSON.stringify(person));

        }
      }
