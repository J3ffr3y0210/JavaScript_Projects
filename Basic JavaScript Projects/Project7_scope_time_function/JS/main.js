var x=10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2(){
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();



function Add_numbers_1() {
    var x=10;
    document.write(20 + x + "<br>");
}
function Add_numbers_2(){
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();



function Add_numbers_1() {
    var x=10;
    console.log(15 + x );
}
function Add_numbers_2(){
    console.log(x + 100);
}
Add_numbers_1();
Add_numbers_2();



function get_Date() {
    if (new Date().getHours()<18) {
        document.getElementById("Greeting").innerHTML="How are you today";
    }
}


function Age_Function(){        //This function is else
    Age=document.getElementById("Age").value;
    if (Age >=18) {
        vote="You are old enough to vote!"
    }
    else {
        Vote="You are not old enough to vote!";
    }    
        document.getElementById("How_old_are_you?").innerHTML=vote;
}


function Time_Function() {      //This function is else if
    var Time=new Date().getHours();
    var Reply;
    if (Time < 12 == Time> 0) {
        Reply="It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply="It is the aftrnoon.";
    }
    else {
        Reply="It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}