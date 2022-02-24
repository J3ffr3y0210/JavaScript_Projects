function full_sentence(){               //This function is for full sentence
    var part_1=" I Have ";
    var part_2=" made this ";
    var part_3=" into a complete ";
    var part_4=" sentence. ";
    var whole_sentence=part_1.concat(part_2, part_3, part_4 );
    document.getElementById("Concatenate").innerHTML=whole_sentence;
}

function slice_Method(){                //This function for slice method
    var Sentence="All work and no play makes Jonhy a dull boy.";
    var Section=Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML= Section;
}

function toUpperCase_Method(){          //This function is for toUpperCase
    var text = "Hello World!";
    var result = text.toUpperCase();
    document.getElementById("toUpperCase").innerHTML = result;
}

function search_Method(){               //This function is for search method
    var text = "Mr. Blue has a blue house"
    var position = text.search("Blue");
    document.getElementById("search").innerHTML = position;
}  

function string_Method(){               //This function is for string method
    var x=182;
    document.getElementById("Numbers_to_string").innerHTML=x.toString();
}

function precision_Method(){             //This function is for precision
    var x=12938.3012987376112;
    document.getElementById("Precision").innerHTML=x.toPrecision(10);
}

function fixed_Method(){                //This functio is for fixd method
    var num = 5.56789;
    var n = num.toFixed();
    document.getElementById("fixed").innerHTML = n;
}

function valueOf_Method(){              //This function is for valueOf method
    var text = "Hello World!";
    var result = text.valueOf();
    document.getElementById("valueOf").innerHTML = result;
}