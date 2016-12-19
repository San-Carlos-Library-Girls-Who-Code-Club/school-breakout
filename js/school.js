/* Add the code for math and language arts
*/

var CLASSROOM_TOTAL = 4;
var PLAYGROUND_TOTAL = 4;
var LOCKER_TOTAL = 4;
var classroomAsked = 0;
var classroomCorrect = 0;

var lockerAsked = 0;
var lockerCorrect = 0;

var playgroundAsked = 0;
var playgroundCorrect = 0

function classroomQuestion() {
  if (askQuestion()) {
    classroomCorrect += 1;
  }
  classroomAsked += 1;
  if (classroomAsked == CLASSROOM_TOTAL) {
    if (classroomCorrect >= (CLASSROOM_TOTAL / 2)) {
      alert("You broke out of the classroom!");
      window.location.href = "../locker-room/index.html";
    } else {
      alert("The teacher caught you, Game Over...");
      window.location.href = "../index.html"
    }
  }
}

function lockerQuestion() {
  if (askQuestion()) {
    lockerCorrect += 1;
  }
  lockerAsked += 1;
  if (lockerAsked == LOCKER_TOTAL) {
    if (lockerCorrect >= (LOCKER_TOTAL / 2)) {
      alert("You broke out of the locker room!");
      window.location.href = "../playground/index.html";
    } else {
      alert("The P.E. teacher caught you, Game Over...");
    }
  }
}


function playgroundQuestion() {
  if (askQuestion()) {
    playgroundCorrect += 1;
  }
  playgroundAsked += 1;
  if (playgroundAsked == PLAYGROUND_TOTAL) {
    if (playgroundCorrect >= (PLAYGROUND_TOTAL / 2)) {
      alert("You escaped from school!");
      window.location.href = "../score/index.html";
    } else {
      alert("The gate blocked your path, Game Over...");
    }
  }
}

function askQuestion(){
  number1 = Math.random();
  operator = Math.random();
  number2 =Math.random();
  var answer = 0;
  if (operator < 0.25) {
    // addition
    number1 *= 100; number2 *= 100;
    number1 = Math.round(number1); number2 = Math.round(number2);
    var answer = parseInt(prompt("What is " + number1 + " + " + number2 + "?"));
    if (answer == (number1 + number2)) {
      return true;
    }
    return false;
  } else if (operator < 0.5) {
    // subtraction
    number1 *= 50; number2 *= 50;
    number1 = Math.round(number1); number2 = Math.round(number2);
    var answer = prompt("What is " + number1 + " - " + number2 + "?");
    if (answer == (number1 - number2)) {
      return true;
    }
    return false;
  } else if (operator <0.75) {
    //multiplication
    number1 *= 10; number2 *= 10;
    number1 = Math.round(number1); number2 = Math.round(number2);
    var answer = prompt("What is " + number1 + " x " + number2 + "?");
    if (answer == number1 *number2) {
      return true;
    }
    return false;

  } else {
    number1 *=8; number2 *= 8;
    number1 = Math.round(number1); number2 = Math.round(number2);
    if (number2 == 0) {
      number2 = 1;
    }
    answerReal = number1;
    number1 *= number2;
    var answer = prompt("What is " + number1 + " ÷ " + number2 + "?");
    if (answer == answerReal) {
      return true;
    }
    return false;

  }

}


var CC = classroomCorrect;
var CW = classroomAsked - classroomCorrect;

var LC = lockerCorrect;
var LW = lockerAsked - LC;

var PC = playgroundCorrect;
var PW = playgroundAsked - PC;

var PN = PC - PW;
var LN = LC - LW;
var CN = CC - CW;
var TN = CN + LN + PN;
var TW = CW + LW + PW;
var TC = CC + LC + PC;


function cc() {
	var cC = document.getElementById("30");
	cC.innerHTML = CC;
}
function lc() {
	var cC = document.getElementById("1");
	cC.innerHTML = LC;
}
function pc() {
	var cC = document.getElementById("2");
	cC.innerHTML = PC;
}
function tc() {
	var cC = document.getElementById("3");
	cC.innerHTML = TN;
}
function cw() {
	var cC = document.getElementById("10");
	cC.innerHTML = CW;
}
function lw() {
	var cC = document.getElementById("11");
	cC.innerHTML = LW;
}
function pw() {
	var cC = document.getElementById("12");
	cC.innerHTML = PW;
}
function tw() {
	var cC = document.getElementById("13");
	cC.innerHTML = TW;
}
function ct() {
	var cC = document.getElementById("20");
	cC.innerHTML = CN;
}
function lt() {
	var cC = document.getElementById("21");
	cC.innerHTML = LN;
}
function pt() {
	var cC = document.getElementById("22");
	cC.innerHTML = PN;
}
function tt() {
	var cC = document.getElementById("23");
	cC.innerHTML = TN;
}

function table() {
	cc();
	pc();
	lc();
	tc();
	cw();
	pw();
	lw();
	tw();
	ct();
	lt();
	pt();
	tt();
}

if(window.addEventListener) {
	window.addEventListener("load", table, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", table);
}
