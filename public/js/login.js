const loginForm = async (event) =>{
    event.preventDefault();

    const email = document.querySelector('#email-login');
    const password = document.querySelector('#password-login');
    if(email &&  password){
        const response = await fetch('/login',{
            method : 'POST',
            body: JSON.stringify({ email, password }),
           
            headers : {'Content-Type' : 'application/json'},
        });
        if(response.ok){
            document.location.replace('/');
console.log(response);
        }
        else{
            alert('check your details, please')
        }
    }
}
const login= document.querySelector('.login-form');
login.addEventListener("submit", loginForm);