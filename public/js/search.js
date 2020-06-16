function userSearch(){
    // console.log("testing");
    if (event.key === "Enter"){
        const displayResults = event.target.value.toLowerCase();
        console.log(displayResults);
        window.location.href = '/search/' + displayResults; 
    };
};



