/*********************Prapti code Starts**********************/
// window.onscroll = function () {
//     var navbar = document.getElementById("nav");
//     if (window.pageYOffset > 0) {
//         navbar.classList.add("scrolled");
//     } else {
//         navbar.classList.remove("scrolled");
//     }
// };

//Book Database
const books = [
    { id: 0, title: "Whispers of The Wild", author: "Areaina Greens", genre: "Comedy", borrowed: false, favorite: false },
    { id: 1, title:"The Crystal Shards" ,author:"Arlen Wynd" ,genre:"Fantasy",image:'assets/images/fantasy1.jpeg', borrowed: false, favorite: false },
    { id: 2, title: "Embers of Sorcery" ,author:"Sylas Raven" ,genre:"Fantasy",image:'assets/images/fantasy2.jpeg', borrowed: false, favorite: false },
    { id: 3, title: "The Dragon's Heir", author: "Elara Wind", genre: "Fantasy",image:'assets/images/fantasy3.jpeg', borrowed: false, favorite: false },
    { id: 4, title: "Wings of the Star", author: "Elysaa Thorn", genre: "Fantasy",image:'assets/images/fantasy4.jpeg', borrowed: false, favorite: false },
    { id: 5, title: "The Forgotten Gods", author: "Cealan Storm", genre: "Fantasy",image:'assets/images/fantasy5.jpeg', borrowed: false, favorite: false },
    { id: 6, title: "Veil of Eternity", author: "Roderick", genre: "Fantasy",image:'assets/images/fantasy5.jpeg', borrowed: false, favorite: false },
    { id: 7, title: "Oops I Did It Again", author: "Max Droll", genre: "Comedy",image:'assets/images/comedy1.jpeg', borrowed: false, favorite: false },
    { id: 8, title: "Laughing Through Chaos", author: "Benny High", genre: "Comedy", borrowed: false, favorite: false },
    { id: 9, title: "The Unlikaly Heros Guide", author: "Sally Quick", genre: "Comedy", borrowed: false, favorite: false },
    { id: 10, title: "Mildred & Milte's Misadventures", author: "Clara Tickle", genre: "Comedy", borrowed: false, favorite: false },
    { id: 11, title: "How to Loose Friends", author: "Holly Laugh", genre: "Comedy", borrowed: false, favorite: false },
    { id: 12, title: "Coffee & Chaos", author: "Jake Giggle", genre: "Comedy", borrowed: false, favorite: false },
    { id: 13, title: "Missing Girl", author: "Gillian Flynn", genre: "Mystery", borrowed: false, favorite: false },
    { id: 14, title: "Bluebird,Bluebird", author: "Attica Locke", genre: "Mystery", borrowed: false, favorite: false },
    { id: 15, title: "In the Woods", author: "Tana French", genre: "Mystery", borrowed: false, favorite: false },
    { id: 16, title: "The Woman in White", author: "Wilie Collins", genre: "Mystery", borrowed: false, favorite: false },
    { id: 17, title: "Sharp Objects", author: "Gillian Flynn", genre: "Mystery", borrowed: false, favorite: false },
    { id: 18, title: "The Name of the Rose", author: "Umberto Eco", genre: "Mystery", borrowed: false, favorite: false },
    { id: 19, title: "Lord of Light", author: "Roger Zelangzy", genre: "Science-Fiction", borrowed: false, favorite: false },
    { id: 20, title: "Station Eleven", author: "Emily St. John Mandal", genre: "Science-Fiction", borrowed: false, favorite: false },
    { id: 21, title: "Ascension", author: "Martin Maclnness", genre: "Science-Fiction", borrowed: false, favorite: false },
    { id: 22, title: "Project Hair Mary", author: "Andy Weir", genre: "Science-Fiction", borrowed: false, favorite: false },
    { id: 23, title: "An Unkidness of the Ghosts", author: "Rivers Solomon", genre: "Science-Fiction", borrowed: false, favorite: false },
    { id: 24, title: "The Calculating Stars", author: "Mary Robinette Kowal", genre: "Science-Fiction", borrowed: false, favorite: false }
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
document.querySelectorAll('.borrow-btn').forEach((button,index) => {
    button.addEventListener('click', function() {
        if (!isLoggedIn) {
            showModal();
            return;
        }
console.log(index); 
        const book = books[index];
        console.log(book);
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

const favorites = [];
// Favourite book 
// Add event listener to all favorite buttons
document.querySelectorAll('.favorite-btn').forEach((button, index) => {
    button.addEventListener('click', function() {
        console.log(index);
        if (!isLoggedIn) {
            console.log('Please log in first.');
            showModal();
            return;
        }

        const book = books[index];
        if (book) {
            if (book.favorite) {
                // Remove from favorites
                book.favorite = false;
                // this.textContent = 'Add to Favorites';
                this.classList.remove('favorite');
                console.log('Removed from favorites');
                const favoriteIndex = favorites.findIndex(b => b.id == book.id);
                if (favoriteIndex > -1) {
                    favorites.splice(favoriteIndex, 1);
                }
            } else {
                // Add to favorites
                book.favorite = true;
               // this.textContent = 'Remove from Favorites';
                this.classList.add('favorite');
                console.log(this.classList);
                console.log('Added to favorites');

                favorites.push(book);
            }
            updateFavoritesList();
        }
    });
});

// Function to update the favorites list in the dropdown menu
function updateFavoritesList() {
    const favoritesList = document.getElementById('favouritesList');
    favoritesList.innerHTML = ''; // Clear the current list

    favorites.forEach(book => {
        const listItem = document.createElement('li');
        listItem.textContent = `${book.title}`; // Assuming book has a title property
        favoritesList.appendChild(listItem);
    });
}

// document.addEventListener('DOMContentLoaded', function() {
//     const navbarToggler = document.querySelector('.navbar-toggler');
//     const navbar = document.getElementById('nav');

//     navbarToggler.addEventListener('click', function() {
//         navbar.classList.toggle('toggled');
//     });
// });

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
// Logout Form Submission
document.getElementById('logout').addEventListener('click', logout);
function logout() {
    
        document.getElementById('buttonLogin').style.display = "block";
        document.getElementById('buttonUser').style.display = "none";
        isLoggedIn = false;
      
};
/*******************Prajakta code Ends*******************/

/**
 * Resets form fields
 */
function clearForm() {
    document.getElementById('enquiryForm').reset();
};

/**
 * Clears session after logout
 */
function afterLogOut() {
    location.reload();
};