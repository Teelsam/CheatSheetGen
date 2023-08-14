// Define the loginForm function that handles the login form submission
const loginForm = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get user inputs from the form
    const email = document.querySelector('#email-login').value;
    const password = document.querySelector('#password-login').value;

    // Log the user inputs for testing
    console.log({ email, password });

    if (email && password) {
        // Send a POST request to the server for user authentication
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // Redirect to the homepage if login is successful
            document.location.replace('/');
            console.log(response);
        } else {
            // Alert the user if login fails and redirect to the signup page
            alert('Account does not exist. Please sign up first.');
            document.location.replace('/signup'); // Change the path to '/signup'
        }
    }
};

// Get the login form element and add an event listener for form submission
const login = document.querySelector('.login-form');
login.addEventListener('submit', loginForm);
