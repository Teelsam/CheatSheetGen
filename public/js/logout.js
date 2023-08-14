// Define the logout function
const logout = async () => {
    // Send a POST request to the server to log the user out
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // Redirect to the homepage if logout is successful
        document.location.replace('/');
    } else {
        // Display an alert if logout fails
        alert(response.statusText);
    }
};

// Add an event listener to the element with ID 'logout'
document.querySelector('#logout').addEventListener('click', logout);
