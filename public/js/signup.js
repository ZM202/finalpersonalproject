function Toggle(){
    let pwdDisplay = document.querySelector("#pwdforsignup");
    if (pwdDisplay.type === "password"){
        pwdDisplay.type = "text";
    } else{
        pwdDisplay.type = "password";
    }
};

const signup_form = document.querySelector("#signup_form");

if(signup_form){
    signup_form.addEventListener('submit', validate_signup_form);
}

function validate_signup_form(){
    const signupnewuser = document.querySelector("#signupnewuser").value;
    const emailforsignup = document.querySelector("#emailforsignup").value;
    const pwdforsignup = document.querySelector("#pwdforsignup").value;
    console.log(signupnewuser);
    console.log(emailforsignup);
    console.log(pwdforsignup);

    if(signupnewuser.length > 12 || signupnewuser.length < 5){
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