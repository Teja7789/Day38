document.getElementById('reset-password-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const newPassword = document.getElementById('new-password').value;
    const token = localStorage.getItem('token'); // Retrieve the token from local storage

    // Make a POST request to the reset password API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Include the token in the request headers
        },
        body: JSON.stringify({ newPassword })
    });

    if (response.ok) {
        alert('Password reset successful!');
    } else {
        alert('Password reset failed. Please try again.');
    }
});
