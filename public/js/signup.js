const signup = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#name-signup').value;
    const email = document.querySelector('#email-signup').value;
    const password = document.querySelector('#password-signup').value;
    if (username && email && password) {
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password, email }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            document.location.replace('/');
        }
        else {
            alert(response.status)
        }

    }
}

document.querySelector('.signup-form').addEventListener("submit", signup);