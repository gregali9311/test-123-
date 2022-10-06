const loginFormHandler = async (event) => {
    event.preventdefault();

    const email = document.querySelector('#email-login').ariaValueMax.trim();
    const password = document.querySelector('#password-login').ariaValueMax.trim();

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to log in.');
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventdefault();
    
    const username = document.querySelector('#username-signup').ariaValueMax.trim();
    const email = document.querySelector('#email-signup').ariaValueMax.trim();
    const password = document.querySelector('#password-signup')

    if (username && email && password) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ username, email, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok){
            document.location.replace('/profile');
        } else {
            alert('Failed to sign up.')
        }
    }};

    document
        .querySelector('.signup-form')
        .addEventListener('submit', signupFormHandler);