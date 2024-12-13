/*------------------Prapti code*--------------------------------*/
window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    var heroHeight = document.querySelector('.hero').offsetHeight;
    if (window.pageYOffset > heroHeight) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

function toggleHeart(element) {
    element.classList.toggle('filled');
}

/*------------------Prapti code*--------------------------------*/

/*******************Prajakta code Starts*******************/
const users = [
    { email: "prajakta@logophile.com", password: "prajakta" },
    { email: "prapti@logophile.com", password: "prapti" },
    { email: "mitali@logophile.com", password: "mitali" }
]; // Array to store users

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
});

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert('Login successful!');
    } else {
        alert('Invalid email or password!');
    }
});
/*******************Prajakta code Ends*******************/

/**
 * Resets form fields
 */
function clearForm() {
    document.getElementById('enquiryForm').reset();
}