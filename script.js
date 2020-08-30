var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 500;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " Time has been Expired";

  //var imgEl = document.createElement("img");

 // imgEl.setAttribute("src", "images/image_1.jpg");
  //mainEl.appendChild(imgEl);

}






function startTimer(){
document.getElementById("#mc").style.visibility="visible";

function check(){

var question2= document.quiz.question2.value;
var question3= document.quiz.question3.value;
var question4= document.quiz.question4.value;
var question5= document.quiz.question5.value;
var correct = 0;

if( question1 =="providence"){

    correct++;
}

if( question2=="Hartford"){

    correct++;
}

f( question3=="Albany"){

    correct++;
}

f( question4=="Albany"){

    correct++;
}
f( question4=="Albany"){

    correct++;
}

var messages = {" Great job!", " That'sjust okay", " You really need to do better next time"};
var pictures["img/win.gif" "img/okay.gif" "img/lose.gif"];

var range;

if ( correct = 1){
    range =2;
}
if (correct> 0 && correct< 3){
    range =1;
}

if (correct>2){
    range =0;
}

    document.getElementById("after_Submit").style.visibility="visible"

    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_Correct").innerHTML= "You got" + Correct + "correct";
    document.getElementById("picture").src=pictures[range];
    

}
}

















































/*// in this below example, we created a variable questions we asked three questions

var questions= [" what is 2+2"," what is 4+2", " what is 4+9"];
// then we store the correct answer under the variable correctAnswer
var correctAnswers=[ 4,6,9];

// here we loop the answer given by the user and making we stop the application after 3 answers
for (i = 0; i<3; i++)
{
    //here we change capture the first answer and the first questions also display
var answer= Number(prompt(questions[i],""));

// here we comparing the answer with the correctAnswer that we stored

if (answer== correctAnswers[i]) alert("Well Done!!");else alert("Sorry wrong answer");

}


// below example is not working correctly because the application is not looping for correctAnswer
// however the wrong answers are looping to the end of the application

// in this below example, we created a variable questions we asked three questions
var questions= [" what is 2+2"," what is 4+2", " what is 4+9"];
// then we store the correct answer under the variable correctAnswer
var correctAnswers=[ 4,6,9];

// here we added the score
var score =0;
for (i = 0; i<3; i++)
{
var answer= Number(prompt("Question"+(i+1)+":"+questions[i],""));
if( answer==correctAnswers[i])
{
aler("Well Done");
score++;
}
else
{
alert("Sorry wrong answer");
}
}

alert("Your answered" + score + " questions correctly");*/