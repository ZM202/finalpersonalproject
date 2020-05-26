//beginner 10 mins lesson starts here...

let syntaxbutton = document.getElementById("syntax-add");
syntaxbutton.addEventListener('click', function(){
   mySyntax();
});

function mySyntax(){
    let x = document.getElementById("syntaxResults");
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

let variablesbutton = document.getElementById("variables-add");
variablesbutton.addEventListener('click', function(){
    myVariables();
});

function myVariables(){
    let x = document.getElementById("variablesResults");
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

let datatypesbutton = document.getElementById("dataTypes-add");
datatypesbutton.addEventListener('click', function(){
    myDataTypes();
});

function myDataTypes(){
    let x = document.getElementById("dataTypesResults");
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}





