function my_Dictionary() {
    var Animal= {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;    //This is delete key before value is displayed
    document.getElementById("Dictionary").innerHTML=Animal.Sound;
}
