const signup = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value;
    const email = document.querySelector('#email-signup').value;
    const password = document.querySelector('#password-signup').value;
    if (name && email && password) {
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ name, password, email }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            document.location.replace('/main');
        }
        else {
            alert(response.statusText)
        }

    }
}

document.querySelector('.signup-form').addEventListener("submit", signup);