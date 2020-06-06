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
    
    

// form.addEventListener('submit', (event) =>{
//     let messages = []
//     if (password.value.length <= 5){
//         messages.push('Password needs to be at least 5 characters')
//     }
//     if (password.value.length >= 15){
//         messages.push('Password must be less than 15 characters')
//     }
//     if (messages.length > 0){
//         event.preventDefault()
//         error.innerText = messages.join(', ')
//     }
// });
    






