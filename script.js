//------------------------------------------------------------------------------------------
var countDown;

// pos is position of where the user in the test or which question they're up to
var pos = 0,
  test,
  test_status,
  question,
  choice,
  choices,
  chA,
  chB,
  chC,
  correct = 0;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
var questions = [
  {
    question: 'What is a function that call itself?',
    a: 'Array',
    b: 'Recursion',
    c: 'Object',
    answer: 'B',
  },
  {
    question: 'A regular binding where the value of the biding is a function?',
    a: 'Recursion',
    b: 'Array',
    c: 'Function',
    answer: 'C',
  },
  {
    question:
      'When statements on a program are executed from top to botton, it is an example of?',
    a: 'Control Flow',
    b: 'Object',
    c: 'Map Flow',
    answer: 'A',
  },
  {
    question: 'Blank is a fragment that produces a value?',
    a: 'Binding',
    b: 'Array',
    c: 'Expression',
    answer: 'C',
  },
  {
    question: '___________ are nothing more than properties that hold function values',
    a: 'Array',
    b: 'Recursion',
    c: 'Object',
    answer: 'B',
  },
  {
    question: 'A measure of dependency between statistical variation is called?',
    a: 'Recursion',
    b: 'Array',
    c: 'Correlation',
    answer: 'C',
  },
  {
    question:
      'The _______ keyword generally refers to the object it belongs and could have different meaning?',
    a: 'this',
    b: 'Object',
    c: 'Map Flow',
    answer: 'A',
  },
  {
    question: 'All of these are keyword reserved forjavascript, except?',
    a: 'abstract',
    b: 'break',
    c: 'defile',
    answer: 'C',
  },
  {
    question:
      'When an operator is ________, it means that the operator only has a single operand?',
    a: 'Unary',
    b: 'Binary',
    c: 'Ternay',
    answer: 'A',
  },
  {
    question: 'When an operator is ________, it means that the operator only has a single operand',
    a: 'Unary',
    b: 'Ternary',
    c: 'Binary',
    answer: 'C',
  },
];
// this get function is short for the getElementById function
function get(x) {
  return document.getElementById(x);
}

// this function renders a question for display on the page
function renderQuestion() {
  test = get('test');
  if (pos >= questions.length) {
    test.innerHTML =
      '<h2>You got ' +
      correct +
      ' of ' +
      questions.length +
      ' questions correct</h2>';
    get('test_status').innerHTML = 'Test completed';
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get('test_status').innerHTML =
    'Question ' + (pos + 1) + ' of ' + questions.length;

  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  // display the question
  test.innerHTML = '<h3>' + question + '</h3>';
  // display the answer options
  // the += appends to the data we started on the line above
  test.innerHTML +=
    "<label> <input type='radio' name='choices' value='A'> " +
    chA +
    '</label><br>';
  test.innerHTML +=
    "<label> <input type='radio' name='choices' value='B'> " +
    chB +
    '</label><br>';
  test.innerHTML +=
    "<label> <input type='radio' name='choices' value='C'> " +
    chC +
    '</label><br><br>';
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer() {
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName('choices');
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if (choice == questions[pos].answer) {
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();

  // hide timer when quiz is completed
  if (pos === 0) {
    document.getElementById('displayTime').style.display = 'none';
  }
}

// diplay time countdown
function startQuiz() {
  // Display time countdown
  document.getElementById('displayTime').innerHTML =
    'Time:<text id="time01">50.00</text></text>';

  countDown = 50.00;

  var interval = setInterval(function () {
    time01.innerHTML = countDown;
    countDown--;
    if (countDown === 0) {
      clearInterval(interval);
      time01.innerHTML = 'Time Up!!!';
      time01.style.color = 'red';

      // Display result
      test.innerHTML =
        '<h2>You got ' +
        correct +
        ' of ' +
        questions.length +
        ' questions correct</h2>';
    }
  }, 1000);

  // Hide start button
  document.getElementById('start').style.display = 'none';

  renderQuestion();
}

// Add event listener (to start button) to call start quiz and renderQuestion
document.getElementById('start').addEventListener('click', startQuiz);

//-------------------------------------------------------------------------------