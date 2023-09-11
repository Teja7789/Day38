document.getElementById('forgot-password-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('reset-email').value;

    // Make a POST request to the forgot password API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    });

    if (response.ok) {
        alert('Password reset email sent!');
    } else {
        alert('Password reset request failed. Please try again.');
    }
});
