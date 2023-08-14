// Define the signup function that handles the signup form submission
const signup = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get user inputs from the form
    const username = document.querySelector('#name-signup').value;
    const email = document.querySelector('#email-signup').value;
    const password = document.querySelector('#password-signup').value;

    if (username && email && password) {
        // Send a POST request to the server for user registration
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password, email }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // Redirect to the homepage if signup is successful
            document.location.replace('/');
        } else {
            // Display an alert if signup fails
            alert(response.status);
        }
    }
};

// Get the signup form element and add an event listener for form submission
document.querySelector('.signup-form').addEventListener('submit', signup);
