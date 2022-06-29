var startGameBtn = document.querySelector("#startGame");
var rulesPara = document.querySelector("#rulesPara");
var questionPara = document.querySelector("#questionPara");
var answerBtn1 = document.querySelector("#answerBtn1");
var answerBtn2 = document.querySelector("#answerBtn2");
var answerBtn3 = document.querySelector("#answerBtn3");
var answerBtn4 = document.querySelector("#answerBtn4");
var statsDiv = document.querySelector("#statsDiv");
var timerPara = document.querySelector("#timerPara");
var questionValidation = document.querySelector("#questionValidation");
var currentScoreKeeper = document.querySelector("#currentScoreKeeper");
var outroDiv = document.querySelector("#outroDiv");
var currentScorePara = document.querySelector("#currentScorePara");
var initalsSubmit = document.querySelector("#initalsSubmit");
var initals = document.querySelector("#initals");
var leaderboardDiv = document.querySelector("#leaderboardDiv");
var initals1 = document.querySelector("#initals1");
// var initals2 = document.querySelector("#initals2");
// var initals3 = document.querySelector("#initals3");
// var initals4 = document.querySelector("#initals4");
// var initals5 = document.querySelector("#initals5");
// var initals6 = document.querySelector("#initals6");
// var initals7 = document.querySelector("#initals7");
// var initals8 = document.querySelector("#initals8");
var score1 = document.querySelector("#score1");
// var score2 = document.querySelector("#score2");
// var score3 = document.querySelector("#score3");
// var score4 = document.querySelector("#score4");
// var score5 = document.querySelector("#score5");
// var score6 = document.querySelector("#score6");
// var score7 = document.querySelector("#score7");
// var score8 = document.querySelector("#score8");

var currentScore = 0;

startGameBtn.addEventListener("click", askQuestion);
answerBtn1.addEventListener("click", function() {
  decider(0);
  nextQuestion();
});
answerBtn2.addEventListener("click", function() {
  decider(1);
  nextQuestion();
});
answerBtn3.addEventListener("click", function() {
  decider(2);
  nextQuestion();
});
answerBtn4.addEventListener("click", function() {
  decider(3);
  nextQuestion();
});

let allQuestions = [
  //first question
  {"title": "question0",
   answers: [true, false, false, false]  
  },
  //second question
  {"title": "question1",
  answers: [true, false, false, false]
  },
    //third question
   {"title": "question2",
   answers: [false, true, false, false]
  },
    //fourth question
   {"title": "question3",
   answers: [true, false, false, false]
  },
     //fifth question
    {"title": "question4",
    answers: [false, false, true, false]
  },
     //sixth question
    {"title": "question5",
     answers: [false, false, true, false]
  },
    //seventh question
   {"title": "question6",
   answers: [false, false, true, false]
  },
     //eighth question
    {"title": "question7",
    answers: [true, false, false, false]
  },
     //nineth question
    {"title": "question8",
     answers: [false, true, false, false]
  },
    //tenth question
   {"title": "question9",
   answers: [false, false, true, false]
  },
    //eleventh question
    {"title": "question10",
    answers: [true, false, false, false]
   }
  ];


var questionSelector;

function nextQuestion () {

    questionSelector = Math.floor(Math.random() * allQuestions.length);
    console.log(questionSelector);
    var currentQuestion = allQuestions[questionSelector];
    console.log(currentQuestion);

    if (currentQuestion == allQuestions[0]) {
      questionPara.innerHTML = "Javascript is an _______ language?";
      answerBtn1.innerHTML = "Object-Oriented";
      answerBtn2.innerHTML = "Object-Based";
      answerBtn3.innerHTML = "Procedural";
      answerBtn4.innerHTML = "None of the above";
    }

    else if (currentQuestion == allQuestions[1]) {
      questionPara.innerHTML = "Which of the following keywords is used to define a variable in Javascript?";
      answerBtn1.innerHTML = "var";
      answerBtn2.innerHTML = "let";
      answerBtn3.innerHTML = "Both A and B";
      answerBtn4.innerHTML = "None of the above";
    }

    else if (currentQuestion == allQuestions[2]) {
      questionPara.innerHTML = "Which of the following methods is used to access HTML elements using Javascript?";
      answerBtn1.innerHTML = "getElementsByClassName()";
      answerBtn2.innerHTML = "getElementbyId()";
      answerBtn3.innerHTML = "Both A and B";
      answerBtn4.innerHTML = "None of the above";
    }

    else if (currentQuestion == allQuestions[3]) {
      questionPara.innerHTML = "Upon encountering empty statements, what does the Javascript Interpreter do?";
      answerBtn1.innerHTML = "Throws an error";
      answerBtn2.innerHTML = "Gives a warning";
      answerBtn3.innerHTML = "Ignores the statements";
      answerBtn4.innerHTML = "None of the above";
    }  

    else if (currentQuestion == allQuestions[4]) {
      questionPara.innerHTML = "Which of the following methods can be used to display data in some form using Javascript?";
      answerBtn1.innerHTML = "document.write()";
      answerBtn2.innerHTML = "console.log()";
      answerBtn3.innerHTML = "window.alert()";
      answerBtn4.innerHTML = "All of the above";
    } 

    else if (currentQuestion == allQuestions[5]) {
      questionPara.innerHTML = "What is a Boolean?";
      answerBtn1.innerHTML = "A number";
      answerBtn2.innerHTML = "A piece of text";
      answerBtn3.innerHTML = "A true or false value";
      answerBtn4.innerHTML = "None of the above";
    } 

    else if (currentQuestion == allQuestions[6]) {
      questionPara.innerHTML = "How can a datatype be declared to be a constant type?";
      answerBtn1.innerHTML = "const";
      answerBtn2.innerHTML = "var";
      answerBtn3.innerHTML = "let";
      answerBtn4.innerHTML = "constant";
    } 

    else if (currentQuestion == allQuestions[7]) {
      questionPara.innerHTML = "When the switch statement matches the expression with the given labels, how is the comparison done?";
      answerBtn1.innerHTML = "Only the datatype of the expression is compared";
      answerBtn2.innerHTML = "Both the datatype and the result of the expression are compared";
      answerBtn3.innerHTML = "Only the value of the expression is compared";
      answerBtn4.innerHTML = "None of the above";
    } 

    else if (currentQuestion == allQuestions[8]) {
      questionPara.innerHTML = "What keyword is used to check whether a given property is valid or not?";
      answerBtn1.innerHTML = "exists";
      answerBtn2.innerHTML = "is in";
      answerBtn3.innerHTML = "in";
      answerBtn4.innerHTML = "lies";
    } 

    else if (currentQuestion == allQuestions[9]) {
      questionPara.innerHTML = "What is the use of the <noscript> tag in Javascript?";
      answerBtn1.innerHTML = "The contents are displayed by non-JS-based browsers";
      answerBtn2.innerHTML = "Clears all the cookies and cache";
      answerBtn3.innerHTML = "Both A and B";
      answerBtn4.innerHTML = "None of the above";
    } 

    else if (currentQuestion == allQuestions[10]) {
      questionPara.innerHTML = "When an operators value is NULL, the typeof returned by the unary operator is:";
      answerBtn1.innerHTML = "Boolean";
      answerBtn2.innerHTML = "Undefined";
      answerBtn3.innerHTML = "Object";
      answerBtn4.innerHTML = "Integer";
    } 
}


// This function is going to decide if the question that was previously
// asked is correct or incorrect and display that top the user :)
function decider (btnNumber) {

 if (allQuestions[questionSelector].answers[btnNumber]) {
  questionValidation.innerHTML = "Correct";
  currentScore += 100;
 }
  
 else {
  questionValidation.innerHTML = "Incorrect";
  counter--;
  counter--;
  counter--;
  counter--;
  counter--;
 }

 currentScoreKeeper.innerHTML = currentScore;
}

let counter;

function startCountdown(seconds) {
    counter = seconds;
      
    const interval = setInterval(() => {
      console.log(counter);
      timerPara.innerHTML = (counter);
      counter--;
        
      if (counter < 0 ) {
        console.log("Timer is Done");
        clearInterval(interval);
        endOfGame();
      }
    }, 1000);
  }

function askQuestion () {
    console.log("Game Started");

    introDiv.classList.add("hide");

    questionDiv.classList.remove("hide");
    statsDiv.classList.remove("hide");
    startCountdown(100);
    nextQuestion ();

}

function endOfGame() {
  questionDiv.classList.add("hide");
  statsDiv.classList.add("hide");
  outroDiv.classList.remove("hide");
  // currentScorePara.innerHTML = currentScore;
  initalsSubmit.addEventListener("click", highscoreLeaderBoard);
}

function highscoreLeaderBoard() {
  // localStorage.clear();
  var enteredInitals = initals.value;
  // let rawLeaderboard = localStorage.getItem("leaderboard");
  // let leaderboard = JSON.parse(rawLeaderboard);
  let highScore = localStorage.getItem("highScore");
  let highScoreInitals = localStorage.getItem("highScoreInitals");

  if (highScore == null){
    console.log("its nuuuuuuullllllll");

    localStorage.setItem("highScore", currentScore);
    localStorage.setItem("highScoreInitals", enteredInitals);
    initals1.innerHTML = enteredInitals;
    score1.innerHTML = currentScore;
    console.log(enteredInitals);
    // leaderboard = [
    //   {"highScoreInitals": initals.value,
    //    "highScore": currentScore}

    // ];
  }

//If there was a previous player this if statement checks if the old score is greater then the new score
  else if (currentScore >= highScore) {

    localStorage.setItem("highScore", currentScore);
    localStorage.setItem("highScoreInitals", enteredInitals);
    console.log(enteredInitals);
    initals1.innerHTML = enteredInitals;
    score1.innerHTML = currentScore;
  
  }

  else {
    initals1.innerHTML = highScoreInitals;
    score1.innerHTML = highScore;

    console.log(enteredInitals);
  }

  // var stringifedLeaderboard = JSON.stringify(leaderboard)
  // localStorage.setItem("leaderboard", stringifedLeaderboard);

  console.log("Its highscore time!!!");


  
  outroDiv.classList.add("hide");
  leaderboardDiv.classList.remove("hide");
  leaderboardDiv.classList.add("leaderboard");

}

