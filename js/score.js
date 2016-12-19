/* Add the code for the score page
		code to show the score
		code to add and show a name to the score
*/

var CC = 2;
var CW = 3;

var LC = 4;
var LW = 1;

var PC = 3;
var PW = 3;

var PN = PC - PW;
var LN = LC - LW;
var CN = CC - CW;
var TN = CN + LN + PN;
var TW = CW + LW + PW;
var TC = CC + LC + PC;

/*
function foo() {
	var cC = document.getElementById("0");
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
	lW.innerHTML=LW;pW.innerHTML=PW;tW.innerHTML=TW;cT.innerHTML=CN;lT.innerHTML=LN;
	pT.innerHTML=PN;tT.innerHTML=TN;

	cC.innerHTML = classroomCorrect;
}*/

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
