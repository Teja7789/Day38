document.getElementById('registration-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    // Make a POST request to the registration API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        const data = await response.json();
        // Store the token in local storage
        localStorage.setItem('token', data.token);
        alert('Registration successful!');
    } else {
        alert('Registration failed. Please try again.');
    }
});
