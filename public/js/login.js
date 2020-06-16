const login_form = document.querySelector("#login_form");

if(login_form){
    login_form.addEventListener('submit', validate_login_form);
}

function validate_login_form(){
    const loginusername = document.querySelector("#username").value;
    const loginpassword = document.querySelector("#password").value;
    console.log(loginusername);
    console.log(loginpassword);

    if(loginusername.length > 12 || loginusername.length < 5){
        let error_div = document.querySelector('#error');
        error_div.innerHTML = '<h4> The username must be between 5-12 characters <h4>'
        event.preventDefault();
    }

    if(pwdforsignup.length > 12 || pwdforsignup.length < 5){
        let error_div = document.querySelector('#error');
        error_div.innerHTML = '<h4> The password must be between 5-12 characters <h4>'
        event.preventDefault();
    }
}
