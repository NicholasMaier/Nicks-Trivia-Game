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
var initals2 = document.querySelector("#initals2");
var initals3 = document.querySelector("#initals3");
var initals4 = document.querySelector("#initals4");
var initals5 = document.querySelector("#initals5");
var initals6 = document.querySelector("#initals6");
var initals7 = document.querySelector("#initals7");
var initals8 = document.querySelector("#initals8");
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
var score3 = document.querySelector("#score3");
var score4 = document.querySelector("#score4");
var score5 = document.querySelector("#score5");
var score6 = document.querySelector("#score6");
var score7 = document.querySelector("#score7");
var score8 = document.querySelector("#score8");

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
   answers: [false, false, true, false]  
  },
  //second question
  {"title": "question1",
  answers: [false, true, false, false]
  },
   //third question
   {"title": "question2",
   answers: [false, false, false, true]
  },
  //fourth question
   {"title": "question3",
   answers: [true, false, false, false]
  },
    //fifth question
    {"title": "question4",
    answers: [false, false, false, true]
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
      questionPara.innerHTML = "What is a Variable?";
      answerBtn1.innerHTML = "A cat";
      answerBtn2.innerHTML = "A place to store arrays and";
      answerBtn3.innerHTML = "An area that can vary and store values";
      answerBtn4.innerHTML = "-4";
    }

    else if (currentQuestion == allQuestions[1]) {
      questionPara.innerHTML = "What is an Array";
      answerBtn1.innerHTML = "22";
      answerBtn2.innerHTML = "3";
      answerBtn3.innerHTML = "69";
      answerBtn4.innerHTML = "-4";
    }

    else if (currentQuestion == allQuestions[2]) {
      questionPara.innerHTML = "What is a For Loop?";
      answerBtn1.innerHTML = "22";
      answerBtn2.innerHTML = "3";
      answerBtn3.innerHTML = "18";
      answerBtn4.innerHTML = "-4";
    }

    else if (currentQuestion == allQuestions[3]) {
      questionPara.innerHTML = "What is a String?";
      answerBtn1.innerHTML = "22";
      answerBtn2.innerHTML = "3";
      answerBtn3.innerHTML = "26";
      answerBtn4.innerHTML = "-4";
    }  

    else if (currentQuestion == allQuestions[4]) {
      questionPara.innerHTML = "What is Condition?";
      answerBtn1.innerHTML = "22";
      answerBtn2.innerHTML = "3";
      answerBtn3.innerHTML = "26";
      answerBtn4.innerHTML = "-4";
    } 

    else if (currentQuestion == allQuestions[5]) {
      questionPara.innerHTML = "What is a Boolean?";
      answerBtn1.innerHTML = "22";
      answerBtn2.innerHTML = "3";
      answerBtn3.innerHTML = "26";
      answerBtn4.innerHTML = "-4";
    } 

    else if (currentQuestion == allQuestions[6]) {
      questionPara.innerHTML = "What does Console.log do?";
      answerBtn1.innerHTML = "22";
      answerBtn2.innerHTML = "3";
      answerBtn3.innerHTML = "26";
      answerBtn4.innerHTML = "-4";
    } 

    else if (currentQuestion == allQuestions[7]) {
      questionPara.innerHTML = "What is a Object?";
      answerBtn1.innerHTML = "22";
      answerBtn2.innerHTML = "3";
      answerBtn3.innerHTML = "26";
      answerBtn4.innerHTML = "-4";
    } 

    else if (currentQuestion == allQuestions[8]) {
      questionPara.innerHTML = "What is Math.Random used for?";
      answerBtn1.innerHTML = "22";
      answerBtn2.innerHTML = "3";
      answerBtn3.innerHTML = "26";
      answerBtn4.innerHTML = "-4";
    } 

    else if (currentQuestion == allQuestions[9]) {
      questionPara.innerHTML = "What is += mean?";
      answerBtn1.innerHTML = "22";
      answerBtn2.innerHTML = "3";
      answerBtn3.innerHTML = "26";
      answerBtn4.innerHTML = "-4";
    } 

    else if (currentQuestion == allQuestions[10]) {
      questionPara.innerHTML = "Which one of these is a number variable?";
      answerBtn1.innerHTML = "22";
      answerBtn2.innerHTML = "3";
      answerBtn3.innerHTML = "26";
      answerBtn4.innerHTML = "-4";
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
  currentScorePara.innerHTML = currentScore;
  initalsSubmit.addEventListener("click", highscoreLeaderBoard);
}

function highscoreLeaderBoard() {
  // localStorage.clear();

  let rawLeaderboard = localStorage.getItem("leaderboard");
  let leaderboard = JSON.parse(rawLeaderboard);
    

  if (leaderboard == null){
    console.log("its nuuuuuuullllllll");

    leaderboard = [
      {"initals": initals.value,
       "score": currentScore}
    ];
  }

   else {
    leaderboard += {"initals": initals.value,
                    "score": currentScore};
  }
  var stringifedLeaderboard = JSON.stringify(leaderboard)
  localStorage.setItem("leaderboard", stringifedLeaderboard);

  console.log(leaderboard);


  

  initals1.innerHTML = leaderboard[0].initals;
  score1.innerHTML = leaderboard[0].score;

  if (leaderboard.length > 1) {
    initals2.innerHTML = leaderboard[1].initals;
    score2.innerHTML = leaderboard[1].score;
  }

  if (leaderboard.length > 2) {
    initals3.innerHTML = leaderboard[2].initals;
    score3.innerHTML = leaderboard[2].score;
  }

  if (leaderboard.length > 3) {
    initals4.innerHTML = leaderboard[3].initals;
    score4.innerHTML = leaderboard[3].score;
  }

  if (leaderboard.length > 4) {
    initals5.innerHTML = leaderboard[4].initals;
    score5.innerHTML = leaderboard[4].score;
  }

  if (leaderboard.length > 5) {
    initals6.innerHTML = leaderboard[5].initals;
    score6.innerHTML = leaderboard[5].score;
  }

  if (leaderboard.length > 6) {
    initals7.innerHTML = leaderboard[6].initals;
    score7.innerHTML = leaderboard[6].score;
  }

  if (leaderboard.length > 7) {
    initals8.innerHTML = leaderboard[7].initals;
    score8.innerHTML = leaderboard[7].score;
  }

  outroDiv.classList.add("hide");
  leaderboardDiv.classList.remove("hide");
  leaderboardDiv.classList.add("leaderboard");
}

