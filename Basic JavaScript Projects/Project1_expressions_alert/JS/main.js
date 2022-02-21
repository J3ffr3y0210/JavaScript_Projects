alert("Hello, World!");

window.alert("Hello, World!");

document.write("Hello, World!");

var green="This is a string";
var green=green.fontcolor("green");
document.write(green);

document.write("Lisa told Bart, \"Knock it off! Or I'll tell dad!\"<br> \"Eat my shorts!\" Bart responded.");

document.write("\"Be who you are and say what you feel," 
+ " because those who mind don\'t matter and those who matter don\'t mind.\"" 
+ "-Dr. Seuss" );

var red = "Concatenated" + " String"
var red=red.fontcolor("red");
document.write(red);

var Family="The Fosters", Dad="Jez", Mom="Riz", Daughter="Jer", Son="Jil";
document.write(Dad);

var blues="I have the blues.";
var blues=blues.fontcolor("blue");
document.write(blues);

document.write(4+4);

function My_First_Function(){          //Defining a function and naming it
    var str="This text is green";      //Defining a variable and giving it a 
                                       //String value
    var result=str.fontcolor("green"); //Using the fontcolor method on
                                       //str variable
    document.getElementById("Green_Text").innerHTML=result;  //Putting the value
}                                      //of result into HTML element with the "Green_Text" id
