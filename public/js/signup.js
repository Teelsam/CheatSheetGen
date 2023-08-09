const signup = async (event) =>{
    event.preventDefault();

    const name = document.querySelector('#name-signup');
    const email = document.querySelector('#email-signup');
    const password = document.querySelector('#password-signup');
     if (name && email && password){
        const response = await fetch('/signup',{
            method : 'POST',
            body :JSON.stringify({name, password, email}),
            headers: {'Content-Type' :'application/json'},
        })
            if (response.ok) {
document.location.replace('/main');
            }
            else{
                alert(response.statusText)
            }
        
     }
}

document.querySelector('.signup-form').addEventListener("submit", signup);