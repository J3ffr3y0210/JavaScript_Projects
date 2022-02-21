document.write(typeof "Word");
        document.write(typeof 4); 

    function my_Function(){
        document.getElementById("Test").innerHTML=0/0;
    }

    function my_Function1(){    //This function is true
        document.getElementById("Test").innerHTML=isNaN('This is a string');
    }

    function my_Function2(){    //This function is false
        document.getElementById("Test").innerHTML=isNaN('007');
    }

    function my_Function3(){    //This funstion is for infinite
        document.getElementById("Test").innerHTML=(2E310);
    }

        function my_Function4(){    //This function is for negative infinite 
            document.getElementById("Test").innerHTML=(-3E310);
    }
    
    document.write(5>3);
    
    document.write(5<3);

   console.log(2>5);

    document.write("10" + 5);

    document.write(8==8);

    document.write(4==6);

    x=8;
    y=8;
    document.write(x===y);

    x=8;
    y='8';
    document.write(x===y);

    document.write(4>2 && 6>4);

    document.write(4>6 && 6>4);

    document.write(4>2 || 6>4);

    document.write(4>6 || 6>8);


    function not_Function(){        //This not functon is for false
        document.getElementById("Not").innerHTML=!(10>5);
    }

    function not_Function1(){       //This not function is for true
        document.getElementById("Not").innerHTML=!(2>5);
    }

