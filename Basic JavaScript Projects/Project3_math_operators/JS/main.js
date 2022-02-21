function addition() {
    var simple_Math=2+2;
    document.getElementById("math_addition").innerHTML="2 plus 2=" + simple_Math;
}

function subtraction() {
    var simple_Math=5-2;
    document.getElementById("math_subtraction").innerHTML="5 minus 2=" + simple_Math;
}

function multiplcation() {
    var simple_Math=8*8;
    document.getElementById("math_multipication").innerHTML="8 multiply 8=" + simple_Math;
}

function division() {
    var simple_Math=64/8;
    document.getElementById("math_division").innerHTML="64/8=" + simple_Math;
}

function more_Math() {
    var simple_Math=(1+2)*10/2-5;
    document.getElementById("math_more_Math").innerHTML="1 plus 2, multiplied by 10, divided in half and subtracted by 5 equals" + simple_Math;
}

function modulusOperator() {
    var simple_Math=25 % 6;
    document.getElementById("math_modulusOperator").innerHTML="when you devide 25 by 6 you have a remainder of:" + simple_Math;
}

function negation_Operator() {
    var x=10;
    document.getElementById("math_negation_Operator").innerHTML= -x;
}

var x=5;
x++;
document.write(x);

var x=5.25;
x--;
document.write(x);

window.alert(Math.random()*50);

document.getElementById("Circumference").innerHTML=Math.PI;