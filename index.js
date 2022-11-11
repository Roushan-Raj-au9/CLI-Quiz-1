var readlineSync = require("readline-sync");
var score = 0;
var userName = "";

var highScores = [
  {
    name: "Raj",
    score: 3,
  },

  {
    name: "Dev",
    score: 2,
  },
]

var questions = [{
  question: "Which programming language does Roushan learnt first ? ",
  answer: "Java"
}, {
  question: "Roushan's favorite programming language ? ",
  answer: "Javascript"
},
{
  question: "Roushan's lives in which state ? ",
  answer: "Jharkhand"
},
{
  question: "Roushan's B.tech branch ? ",
  answer: "Mechnical"
},
{
  question: "Roushan's favourite game ? ",
  answer: "Badminton"
}
];

function welcome() {
 userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Roushan?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores: ");

  if(score === 5){
    highScores.push({"name": userName, "score": score })
  }
  
  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();