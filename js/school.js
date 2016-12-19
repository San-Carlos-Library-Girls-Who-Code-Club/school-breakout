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
  return true;
}
