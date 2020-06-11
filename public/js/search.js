function userSearch(){
    // console.log("testing");
    if (event.key === "Enter"){
        const displayResults = event.target.value.toLowerCase();
        console.log(displayResults);
        window.location.href = '/search/' + displayResults; 
    };
};



    // console.log(event);
    // const displayResults = event.target.value.toLowerCase();
    // console.log(displayResults);
    // let usersInput = document.getElementById('search');
    // document.getElementById('search').addEventListener('click', function(){
    //     userResults();
    // }) 
    // usersInput.addEventListener('keyup', function(e){
    //     const displayResults = e.target.value.toLowerCase();
    // })

