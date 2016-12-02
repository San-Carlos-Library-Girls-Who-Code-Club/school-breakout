/* Add the code for the score page
		code to show the score
		code to add and show a name to the score
*/

var CC = 0;
var CW = 0;
var CN = CC - CW;

var LC = 0;
var LW = 0;
var LN = LC - LW;

var PC = 0;
var PW = 0;
var PN = PC - PW;


function foo() {
	var cC = document.getElementById(0);
	var lC = document.getElementById(1);
	var pC = document.getElementById(2);
	var tC = document.getElementById(3);
	var cW = document.getElementById(10);
	var lW = document.getElementById(11);
	var pW = document.getElementById(12);
	var tW = document.getElementById(13);
	var cT = document.getElementById(20);
	var lT = document.getElementById(21);
	var pT = document.getElementById(22);
	var tT = document.getElementById(23);
	
	cC.innerHTML = CC; lC.innerHTML=LC;pC.innerHTML=PC;tC.innerHTML=TC;cW.innerHTML=CW;
	lW.innerHTML=LW;pW.innerHTML=PW;tW.innerHTML=TW;cT.innerHTML=CN;.innerHTML=LN;
	pT.innerHTML=PN;tT.innerHTML=TN;

	cC.innerHTML = classroomCorrect;
	
}
if(window.addEventListener) {
	window.addEventListener("load", foo, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", foo);
}
