//beginner 20 mins lesson starts here...

let comparisonbutton = document.getElementById("comparison-add");
comparisonbutton.addEventListener('click', function(){
   myComparison();
});

function myComparison(){
    let x = document.getElementById("comparisonResults");
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

let logicalbutton = document.getElementById("logical-add");
logicalbutton.addEventListener('click', function(){
    myLogical();
});

function myLogical(){
    let x = document.getElementById("logicalResults");
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

let conditionalbutton = document.getElementById("conditional-add");
conditionalbutton.addEventListener('click', function(){
    myConditional();
});

function myConditional(){
    let x = document.getElementById("conditionalResults");
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}