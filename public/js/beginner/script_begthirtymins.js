let functionsbutton = document.getElementById("functions-add");
functionsbutton.addEventListener('click', function(){
   myfunctions();
});

function myfunctions(){
    let x = document.getElementById("functionsResults");
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

let callingfunctionsbutton = document.getElementById("callingfunctions-add");
callingfunctionsbutton.addEventListener('click', function(){
   mycallingFunctions();
});

function mycallingFunctions(){
    let x = document.getElementById("callingfunctionsResults");
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
