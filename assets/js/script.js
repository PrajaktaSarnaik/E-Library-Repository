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
    console.log(query);
    if (query === '') {
        clearResults();
        console.log('clear');
        return;
    }
    const book = books.find(book => 
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query)
    );
    console.log(book);
    if (book) {
        jumpToBook(book.id);
        console.log('jump');
    }
});

// Function to jump to the book card
function jumpToBook(bookId) {
    const bookElement = document.getElementById(`${bookId}`);
    console.log(bookElement);
    if (bookElement) {
        bookElement.scrollIntoView({ behavior: 'smooth' });
        bookElement.classList.add('highlight'); // Optionally add a highlight class
        setTimeout(() => {
            bookElement.classList.remove('highlight');
        }, 6000); // Remove highlight after 6 seconds
    }
}

// Function to clear search results
function clearResults() {
    searchResults.innerHTML = '';
}

let isLoggedIn = false; // This should be set to true when the user logs in
const borrowedBooks = [];

// Add event listener to all borrow buttons
document.querySelectorAll('.borrow-btn').forEach((button, index) => {
    button.addEventListener('click', function() {
        if (!isLoggedIn) {
            showModal();
            return;
        }

        const book = books[index];
        if (book) {
            if (book.borrowed) {
                // Return the book
                book.borrowed = false;
                this.textContent = 'Borrow';
                const borrowedIndex = borrowedBooks.findIndex(b => b.id == book.id);
                if (borrowedIndex > -1) {
                    borrowedBooks.splice(borrowedIndex, 1);
                }
            } else {
                // Borrow the book
                book.borrowed = true;
                this.textContent = 'Return';
                borrowedBooks.push(book);
            }
            updateBorrowedBooksList();
        }
    });
});

// Function to update the borrowed books list
function updateBorrowedBooksList() {
    const borrowedBooksList = document.getElementById('borrowedBooksList');
    borrowedBooksList.innerHTML = '';
    borrowedBooks.forEach(book => {
        const bookElement = document.createElement('li');
        bookElement.textContent = `${book.title} by ${book.author}`;
        borrowedBooksList.appendChild(bookElement);
    });
}

// Function to show the modal
function showModal() {
    const modalMessage = new bootstrap.Modal(document.getElementById('messageModal'));
    modalMessage.show();
}

var timesClicked = 0;

// function btnClick() {
//   timesClicked++;
//   if (timesClicked === 1) {
//     var elem = document.querySelector('i');
//     elem.classList.remove('fa-heart-o');
//     elem.classList.add('fa-heart');
//   }
//   document.getElementById('timesClicked').innerHTML = timesClicked;
//   return true
// }

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbar = document.getElementById('nav');

    navbarToggler.addEventListener('click', function() {
        navbar.classList.toggle('toggled');
    });
});

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
        // Praptis Code starts
        isLoggedIn = true;
        // Praptis Code ends
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



