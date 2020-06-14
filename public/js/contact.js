const usersInput = document.querySelectorAll('.contactContainer input');
// const name = document.querySelector('#name');
// const email = document.querySelector('#email');
// const subject = document.querySelector('#subject');
// const message = document.querySelector('#message');
const error = document.querySelector('#error');

form.addEventListener('submit', (event) =>{
    for (i = 0; i < usersInput.length; i++){
        let input = usersInput[i];
        if (!(input.value.length > 0)){
            event.preventDefault() 
            error.innerText = messages.join(', ')
            break
        } 
    }   
    });
    
    








