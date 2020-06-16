const usersInput = document.querySelectorAll('.contactContainer input');

form.addEventListener('submit', (event) =>{
    for (i = 0; i < usersInput.length; i++){
        let input = usersInput[i];
        if (!(input.value.length > 0)){
            event.preventDefault() 
            error.innerText = messages.join(', ');
            break
        } 
    }   
    






