// Check if user is logged in
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('userLoggedIn') === 'true') {
        // If logged in, show Account and hide Sign In / Sign Up
        document.getElementById('signinBtn').style.display = 'none';
        document.getElementById('signupBtn').style.display = 'none';
        document.getElementById('accountBtn').style.display = 'block';
        document.getElementById('accountLink').innerText = 'Account (Log Out)';
    }

    // Log Out functionality
    document.getElementById('accountLink')?.addEventListener('click', function () {
        if (confirm('Do you want to log out?')) {
            localStorage.setItem('userLoggedIn', 'false');
            window.location.href = 'index.html'; // Refresh to go back to home page
        }
    });
});

//sidebar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => { nav.classList.add('active') });
}
if (close) {
    close.addEventListener('click', () => { nav.classList.remove('active') });
}