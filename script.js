var options001 = ["<button class=buttons001 onclick=q1i()>True</button><br /><br /><button class=buttons001 onclick=q1c()>False</button>"];
var options002 = ["<button class=buttons001 onclick=q2c()>False</button><br /><br /><button class=buttons001 onclick=q2i()>True</button>"];
var options003 = ["<button class=buttons001 onclick=q3c()>True</button><br /><br /><button class=buttons001 onclick=q3i()>False</button>"];
var start01="",
var a = 0;
a++;
var b = 0;
b++;
var question001 = ["What is a function that call itself.",
"A regular binding where the value of the biding is a function.",
"When statements on a program are executed from top to botton, it is an example of.","What type of data use to represent text?",
"Blank is a fragment that produces a value?"
]

function start01() {
    c = 200;
    disappear001.innerHTML = "";
    message001.innerHTML = question001[0];
    message002.innerHTML = options001;
    number001.innerHTML = a++;
    }
    
    function q1c() {
    message003.innerHTML = "Correct. Function.";
    message002.innerHTML = "";
    score001.innerHTML = a++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }
    
    function q1i() {
    message003.innerHTML = "Incorrect.function.";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }
    
    function q2c() {
    message003.innerHTML = "Correct. Recursion.";
    message002.innerHTML = "";
    score001.innerHTML = a++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }
    
    function q2i() {
    message003.innerHTML = "Incorrect. recursion.";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }
    
    function q3c() {
    message003.innerHTML = "Correct. string";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }
    
    function q3i() {
    message003.innerHTML = "Incorrect. string.";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    }
    
    
    function next001() {
    if (a == "2") {
        message001.innerHTML = question001[1];
        message002.innerHTML = options002;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }
    
    else if (a == "3") {
        message001.innerHTML = question001[2];
        message002.innerHTML = options003;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }
    
    }
    
    update = setInterval("timer001()", 1000);
    
    function repeat001() {
    location.reload();

function check(){
var question1= document.quiz.question1.value;
var question2= document.quiz.question2.value;
var question3= document.quiz.question3.value;
var question4= document.quiz.question4.value;
var question5= document.quiz.question5.value;
var correct = 0;

if( question1 ==" Recurcion"){

    correct++;
}

if( question2=="Function"){

    correct++;
}

f( question3=="Control"){

    correct++;
}

f( question4=="String"){

    correct++;
}
f( question4=="Expression"){

    correct++;
}


var range;

if ( correct = 1){
    
if (correct> 0 && correct< 3){
 
}

if (correct>2){
  
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