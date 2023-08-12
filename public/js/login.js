const loginForm = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value;
    const password = document.querySelector('#password-login').value;
    console.log({ email, password });
    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),

            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/');
            console.log(response);
        }
        else {
            alert('check your details, please')
        }
    }
}
const login = document.querySelector('.login-form');
login.addEventListener("submit", loginForm);