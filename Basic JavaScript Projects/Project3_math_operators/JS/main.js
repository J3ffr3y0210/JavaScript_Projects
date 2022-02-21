function addition() {       //This function is additon
    var simple_Math=2+2;
    document.getElementById("math_addition").innerHTML="2 plus 2=" + simple_Math;
}

function subtraction() {    //This funtion is subtracton 
    var simple_Math=5-2;
    document.getElementById("math_subtraction").innerHTML="5 minus 2=" + simple_Math;
}

function multiplication() { //This function is multiplication
    var simple_Math=4*4;
    document.getElementById("math_multiplication").innerHTML="4 multiplied 4=" + simple_Math;
}

function division() {       //This function is division
    var simple_Math=64/8;
    document.getElementById("math_division").innerHTML="64/8=" + simple_Math;
}

function more_Math() {      //This function is more math
    var simple_Math=(1+2)*10/2-5;
    document.getElementById("math_more_Math").innerHTML="1 plus 2, multiplied by 10, divided in half and subtracted by 5 equals" + simple_Math;
}

function modulusOperator() {    //This function is modulusOperator
    var simple_Math=25 % 6;
    document.getElementById("math_modulusOperator").innerHTML="when you devide 25 by 6 you have a remainder of:" + simple_Math;
}

function negation_Operator() {      //This function is negationOperator
    var x=10;
    document.getElementById("math_negation_Operator").innerHTML= -x;
}


window.alert(Math.random()*50);     //This function is for random numbers

function Circumference() {          //This is value the of circumference of PI
    document.getElementById("math_Circumference").innerHTML=Math.PI;
}

var x=5;
x++;
document.write(x);

var x=5.25;
x--;
document.write(x);