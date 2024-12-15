/*********************Prapti code Starts**********************/
window.onscroll = function () {
    var navbar = document.getElementById("nav");
    if (window.pageYOffset > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};


//Book Database
const books = [
    { id: 1, title:"The crystal shards" ,author:"Arlen Wynd" ,genre:"Fantasy",image:'assets/images/fantasy1.jpeg', borrowed: false, favorite: false },
    { id: 2, title: "Embers of Sorcery" ,author:"Sylas Raven" ,genre:"Fantasy",image:'assets/images/fantasy2.jpeg', borrowed: false, favorite: false },
    { id: 3, title: "The Dragon's heir", author: "Elara Wind", genre: "Fantasy",image:'assets/images/fantasy3.jpeg', borrowed: false, favorite: false },
    { id: 4, title: "Wings of the star", author: "Elysaa Thorn", genre: "Fantasy",image:'assets/images/fantasy4.jpeg', borrowed: false, favorite: false },
    { id: 5, title: "Veil of Eternity", author: "Roderick", genre: "Fantasy",image:'assets/images/fantasy5.jpeg', borrowed: false, favorite: false },
    { id: 6, title: "Oops I did it again", author: "Max Droll", genre: "Comedy",image:'assets/images/comedy1.jpeg', borrowed: false, favorite: false },
    { id: 7, title: "Laughing through chaos", author: "Benny high", genre: "Comedy", borrowed: false, favorite: false },
    { id: 8, title: "The unlikaly heros guide", author: "Max Droll", genre: "Comedy", borrowed: false, favorite: false },
    { id: 9, title: "Oops I did it again", author: "Sally Quick", genre: "Comedy", borrowed: false, favorite: false },
    { id: 10, title: "Oops I did it again", author: "Max Droll", genre: "Comedy", borrowed: false, favorite: false },
    { id: 11, title: "Oops I did it again", author: "Max Droll", genre: "Comedy", borrowed: false, favorite: false },
    { id: 12, title: "Oops I did it again", author: "Max Droll", genre: "Comedy", borrowed: false, favorite: false },
    { id: 13, title: "Oops I did it again", author: "Max Droll", genre: "Comedy", borrowed: false, favorite: false },
    { id: 14, title: "Oops I did it again", author: "Max Droll", genre: "Comedy", borrowed: false, favorite: false },
    { id: 15, title: "Oops I did it again", author: "Max Droll", genre: "Comedy", borrowed: false, favorite: false },
    { id: 16, title: "Oops I did it again", author: "Max Droll", genre: "Comedy", borrowed: false, favorite: false },
    { id: 17, title: "Oops I did it again", author: "Max Droll", genre: "Comedy", borrowed: false, favorite: false }
  ];

  // Get the search bar element
const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('searchResults');

// Add an event listener to the search bar
searchBar.addEventListener('input', function() {
    const query = searchBar.value.toLowerCase();
    if (query === '') {
        clearResults();
        return;
    }
    const book = books.find(book => 
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query)
    );
    if (book) {
        jumpToBook(book.id);
    }
});

// Function to jump to the book card
function jumpToBook(bookId) {
    const bookElement = document.getElementById(`${bookId}`);
    if (bookElement) {
        bookElement.scrollIntoView({ behavior: 'smooth' });
        bookElement.classList.add('highlight'); // Optionally add a highlight class
        setTimeout(() => {
            bookElement.classList.remove('highlight');
        }, 6000); // Remove highlight after 2 seconds
    }
}

// Function to clear search results
function clearResults() {
    searchResults.innerHTML = '';
}
/*********************Prapti code Ends**********************/

/*******************Prajakta code Starts*******************/
const users = [
    { email: "prajakta@e-library.com", password: "prajakta" },
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
/*******************Prajakta code Ends*******************/

/**
 * Resets form fields
 */
function clearForm() {
    document.getElementById('enquiryForm').reset();
}



