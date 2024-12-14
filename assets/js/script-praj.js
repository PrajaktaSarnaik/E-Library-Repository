document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar');
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');
    const closeSearch = document.getElementById('close-search');

    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight - navbar.offsetHeight) {
            navbar.classList.remove('transparent');
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.add('transparent');
            navbar.classList.remove('scrolled');
        }
    });

    const users = [
        { email: "prajakta@e-library.com", password: "praj" },
        { email: "p@p", password: "p" },
        { email: "prapti@e-library.com", password: "prapti" },
        { email: "mitali@e-library.com", password: "mitali" }
    ]; // Array to store users
    document.getElementById('buttonUser').style.display = "none";
    // Switch to Register Modal
    document.getElementById('registerLink').addEventListener('click', function () {
        const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        loginModal.hide();
        const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));
        registerModal.show();
    });

    // Register Form Submission
    document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            alert('User already exists!');
            return;
        }

        users.push({ email, password });
        alert('Registration successful!');

        const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
        registerModal.hide();
        document.getElementById('buttonLogin').style.display = "none";
        document.getElementById('buttonUser').style.display = "block";
    });

    // Login Form Submission
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            alert('Login successful!');
            const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
            loginModal.hide();
            document.getElementById('buttonLogin').style.display = "none";
            document.getElementById('buttonUser').style.display = "block";

        } else {
            alert('Invalid email or password!');
        }
    });

    // Logout
    document.getElementById('logout').addEventListener('click', function() {
    alert('You have been logged out.');
    document.getElementById('buttonLogin').style.display = "none";
            document.getElementById('buttonUser').style.display = "block";
    // Simulate logout by redirecting to a login page or performing other actions
    window.location.href = 'home.html'; // Redirect to login page
});

});