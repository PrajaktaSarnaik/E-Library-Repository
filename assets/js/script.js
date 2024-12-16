// Check if the current page is children.html and initialize children's books functionality
if (window.location.pathname.includes('children.html')) {
    initChildrenBooks();

}

/**
 * Book Database
 */
const books = [
    { id: 0, title: "Whispers of The Wild", author: "Areaina Greens", genre: "Comedy", borrowed: false, favorite: false },
    { id: 1, title: "The Crystal Shards", author: "Arlen Wynd", genre: "Fantasy", image: 'assets/images/fantasy1.jpeg', borrowed: false, favorite: false },
    { id: 2, title: "Embers of Sorcery", author: "Sylas Raven", genre: "Fantasy", image: 'assets/images/fantasy2.jpeg', borrowed: false, favorite: false },
    { id: 3, title: "The Dragon's Heir", author: "Elara Wind", genre: "Fantasy", image: 'assets/images/fantasy3.jpeg', borrowed: false, favorite: false },
    { id: 4, title: "Wings of the Star", author: "Elysaa Thorn", genre: "Fantasy", image: 'assets/images/fantasy4.jpeg', borrowed: false, favorite: false },
    { id: 5, title: "The Forgotten Gods", author: "Cealan Storm", genre: "Fantasy", image: 'assets/images/fantasy5.jpeg', borrowed: false, favorite: false },
    { id: 6, title: "Veil of Eternity", author: "Roderick", genre: "Fantasy", image: 'assets/images/fantasy5.jpeg', borrowed: false, favorite: false },
    { id: 7, title: "Oops I Did It Again", author: "Max Droll", genre: "Comedy", image: 'assets/images/comedy1.jpeg', borrowed: false, favorite: false },
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


/**
 * Add an event listener to the search bar
 */
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

/**
 * Function to jump to the book card
 */ 
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

/**
 * Function to clear search results
 */ 
function clearResults() {
    searchResults.innerHTML = '';
}

let isLoggedIn = false; // This should be set to true when the user logs in
const borrowedBooks = [];


/**
 * Add event listener to all borrow buttons
 */ 
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
                if (borrowedBooks.length >= 3) {
                    alert('You cannot borrow more than 3 books.');
                    return;
                }else{
                    book.borrowed = true;
                this.textContent = 'Return';
                borrowedBooks.push(book);
                }
            }
            updateBorrowedBooksList();
            localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks)); // Save borrowed books to localStorage
        }
    });
});
// Check login state and borrowed books on page load
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        document.getElementById('buttonLogin').style.display = "none";
        document.getElementById('buttonUser').style.display = "block";
        isLoggedIn = true;

        const storedBorrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks'));
        if (storedBorrowedBooks) {
            storedBorrowedBooks.forEach(book => {
                const bookIndex = books.findIndex(b => b.id === book.id);
                if (bookIndex > -1) {
                    books[bookIndex].borrowed = true;
                    borrowedBooks.push(books[bookIndex]);
                    document.querySelectorAll('.borrow-btn')[bookIndex].textContent = 'Return'; // Update button text
                }
            });
            updateBorrowedBooksList();
        }
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        if (storedFavorites) {
            storedFavorites.forEach(book => {
                const bookIndex = books.findIndex(b => b.id === book.id);
                if (bookIndex > -1) {
                    books[bookIndex].favorite = true;
                    favorites.push(books[bookIndex]);
                    document.querySelectorAll('.favorite-btn')[bookIndex].classList.add('favorite'); // Update button state
                }
            });
            updateFavoritesList();
            
        }
    }
});
/**
 * Function to update the borrowed books list
 */ 
function updateBorrowedBooksList() {
    const borrowedBooksList = document.getElementById('borrowedBooksList');
    borrowedBooksList.innerHTML = '';
    borrowedBooks.forEach(book => {
        const bookElement = document.createElement('li');
        bookElement.textContent = `${book.title} by ${book.author}`;
        borrowedBooksList.appendChild(bookElement);
    });
}

/**
 * Function to show the modal
 */ 
function showModal() {
    const modalMessage = new bootstrap.Modal(document.getElementById('messageModal'));
    modalMessage.show();
}

const favorites = [];
// Favourite book 
// Add event listener to all favorite buttons
document.querySelectorAll('.favorite-btn').forEach((button, index) => {
    button.addEventListener('click', function () {
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
                
                this.classList.remove('favorite');
                console.log('Removed from favorites');
                const favoriteIndex = favorites.findIndex(b => b.id == book.id);
                if (favoriteIndex > -1) {
                    favorites.splice(favoriteIndex, 1);
                }
            } else {
                if (favorites.length >= 3) {
                    alert('You cannot have more than 3 favorite books.');
                    return;
                }
                   else{ // Add to favorites
                    book.favorite = true;
                   // this.textContent = 'Remove from Favorites';
                    this.classList.add('favorite');
                    console.log(this.classList);
                    console.log('Added to favorites');
                    favorites.push(book);
                   }
            }
            updateFavoritesList();
            localStorage.setItem('favorites', JSON.stringify(favorites)); // Save favorites to localStorage
        }
    });
});

/**
 * Function to update the favorites list in the dropdown menu
 */ 
function updateFavoritesList() {
    const favoritesList = document.getElementById('favouritesList');
    favoritesList.innerHTML = ''; // Clear the current list

    favorites.forEach(book => {
        const listItem = document.createElement('li');
        listItem.textContent = `${book.title}`; // Assuming book has a title property
        favoritesList.appendChild(listItem);
    });
}

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

/**
 * Register Form Submission
 */ 
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

/**
 * Login Form Submission
 */
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
        localStorage.setItem('isLoggedIn', 'true'); // Save login state
        localStorage.setItem('loggedInUser', email); // Save logged-in user email

    } else {
        alert('Invalid email or password!');
    }
});


/**
 * Logout Form Submission
 */ 

document.getElementById('logout').addEventListener('click', logout);
function logout() {
    localStorage.removeItem('isLoggedIn'); // Remove login state
    localStorage.removeItem('loggedInUser'); // Remove logged-in user email
    document.getElementById('buttonLogin').style.display = "block";
    document.getElementById('buttonUser').style.display = "none";
    isLoggedIn = false;
    borrowedBooks.length = 0; // Clear the borrowed books array
    favorites.length = 0; // Clear the favorites array
    updateBorrowedBooksList();
    updateFavoritesList();
};

// Children's Books Database
/**
 *  Function to initialize children's books functionality
 */
function initChildrenBooks() {
    const childrenBooks = {
        book1: [
            {
                text: `Once upon a time there was a little red hen who lived with her friends, the cow, the horse, and the cat.  In the springtime the flowers were blossoming, the leaves were appearing on the trees once more, and the farmers were busy planting their fields.  The little red hen was delighted to find some seeds of wheat and she hurried home to show them to her friends.
   
   The little red hen said, “Who will help me plant the wheat?”
   
   “Moooo.  Not I,” said the cow.
   
   “Neigh.  Not I,” said the horse.
   
   “Meow.  Not I,” said the kitty cat.
   
   So the little red hen said, “Then I will plant the seeds of wheat all by myself.”  And so she planted the seeds of wheat.`, img: "assets/images/red-hen.jpg"
            },
            {
                text: `In the summertime, the sun glowed bright and hot, the fields and gardens were growing and growing, and everywhere was green.  The wheat grew tall and golden in the sun, and the little red hen asked her friends, “Who will help me cut the wheat?”
   
   “Moooo.  Not I,” said the cow.
   
   “Neigh.  Not I,” said the horse.
   
   “Meow.  Not I,” said the kitty cat.
   
   So the little red hen said, “Then I will cut the wheat all by myself.”  And so she cut the stalks of wheat.
   
   In the autumn, the days grew cooler, the leaves turned beautiful shades of red and orange, gold and brown, and the farmers were busy bringing in the harvest.  The little red hen asked her friends, “Who will help me take the wheat to the mill?”
   
   “Moooo.  Not I,” said the cow.
   
   “Neigh.  Not I,” said the horse.
   
   “Meow.  Not I,” said the kitty cat.
   
   So the little red hen said, “Then I will take the wheat to the mill all by myself.”  And so she took the wheat to the mill.  The miller ground the wheat into flour, and then the little red hen brought the big bags of flour back home.`, img: "assets/images/red-hen2.jpeg"
            },
            {
                text: `In the winter the snow fell and the days were short and very cold.  The little red hen asked her friends, “Who will help me bake the bread?”
   
   “Moooo.  Not I,” said the cow.
   
   “Neigh.  Not I,” said the horse.
   
   “Meow.  Not I,” said the kitty cat.
   
   So the little red hen said, “Then I will bake the bread all by myself.”  And so she took the flour, mixed it and kneaded it and put it in the oven.  And while the bread was baking, it smelled wonderful!  The cow and the horse and the cat came running when they smelled that fresh bread.
   
   The little red hen took the bread out of the oven and asked her friends, “Who will help me eat the bread?”
   
   “Moooo.  I will!” said the cow.
   
   “Neigh.  I will!” said the horse.
   
   “Meow.  I will!” said the kitty cat.
   
   But the little red hen said, “Oh, no, no, no!  I planted the seeds of wheat, I cut the wheat, I took the wheat to the mill and brought home the flour, and I baked the bread, all by myself.  Now I will eat the bread - all by myself!”  And so she did, and it was delicious!`, img: "assets/images/red-hen3.jpeg"
            }
        ],
        book2: [
            { text: `Once upon a time, in a cozy burrow under a big tree, lived a brave little rabbit named Ruby. Ruby was known for her curious nature and adventurous spirit. Every day, she would venture into the forest, exploring new paths and meeting new friends.
One sunny morning, Ruby decided to explore a part of the forest she had never been to before. As she hopped along, she heard a faint chirping sound. Following the sound, Ruby discovered a tiny bird trapped in a thorny bush. The poor bird was scared and unable to free itself.`, img: "assets/images/rabbit1.jpeg" },
            { text: `With her gentle paws, Ruby carefully pushed the thorns aside, creating a small opening for the bird to escape. The bird flapped its wings and flew out, chirping joyfully. "Thank you, brave rabbit!" the bird sang. "You saved me!"
Ruby smiled, happy to have helped. The bird, whose name was Twinkle, became Ruby's best friend. Every day, they would explore the forest together, helping other animals in need and sharing many adventures.`, img: "assets/images/rabbit2.jpeg" },
            { text: `One day, a big storm hit the forest, and all the animals were frightened. Ruby and Twinkle worked together to guide their friends to safety, finding shelter in a large cave. Thanks to their bravery and quick thinking, everyone was safe and sound.
From that day on, Ruby and Twinkle were known as the heroes of the forest. Their bond grew stronger with each passing day, and they continued to bring joy and kindness to all the creatures around them.
And so, in their cozy burrow under the big tree, Ruby and Twinkle lived happily ever after, always ready for their next adventure.`, img: "assets/images/rabbit3.jpeg" }
        ],
      
    };

    // Current page trackers
    const currentPage = {
        book1: 0,
        book2: 0       
    };

    // Text-to-Speech functionality
    let synth = window.speechSynthesis;
    let utterance;
    let currentPosition = 0; // Tracks where to resume

    function startReading(contentId) {
        const text = document.getElementById(contentId).textContent;
        const remainingText = text.slice(currentPosition);

        utterance = new SpeechSynthesisUtterance(remainingText);
        utterance.lang = "en-US";
        utterance.pitch = 1;
        utterance.rate = 1;

        utterance.onboundary = (event) => {
            currentPosition = event.charIndex;
        };

        synth.speak(utterance);
    }

    function stopReading() {
        if (synth.speaking) {
            synth.cancel(); // Stop speaking
        }
    }

    // Change page function
    function changePage(bookId, direction) {
        stopReading(); // Stop reading when changing pages
        const book = childrenBooks[bookId];
        const newPage = currentPage[bookId] + direction;

        if (newPage >= 0 && newPage < book.length) {
            currentPage[bookId] = newPage;
            const content = document.getElementById(`content${bookId.slice(-1)}`);
            const img = document.querySelector(`#${bookId} img`);
            content.textContent = book[currentPage[bookId]].text;
            img.src = book[currentPage[bookId]].img;

            // Play page flip sound
            const pageFlipSound = document.getElementById('pageFlipSound');
            pageFlipSound.play();

            // Reset reading position
            currentPosition = 0;
        }
    }

    // Open story function
    function openStory(bookId) {
        // Hide all books
        document.querySelectorAll('.book').forEach(book => {
            book.style.display = 'none';
        });

        // Show the selected book
        document.getElementById(bookId).style.display = 'block';
    }



    // Add event listeners to story buttons
    document.getElementById('buttonBook1').addEventListener('click', () => openStory('book1'));
    document.getElementById('buttonBook2').addEventListener('click', () => openStory('book2'));
   

    // Add event listeners to book controls
    document.getElementById('prevBook1').addEventListener('click', () => changePage('book1', -1));
    document.getElementById('nextBook1').addEventListener('click', () => changePage('book1', 1));
    document.getElementById('prevBook2').addEventListener('click', () => changePage('book2', -1));
    document.getElementById('nextBook2').addEventListener('click', () => changePage('book2', 1));
    

    // Add event listeners to reading buttons
    document.getElementById('startReadingBook1').addEventListener('click', () => startReading('content1'));
    document.getElementById('stopReadingBook1').addEventListener('click', stopReading);
    document.getElementById('startReadingBook2').addEventListener('click', () => startReading('content2'));
    document.getElementById('stopReadingBook2').addEventListener('click', stopReading);
   

    // Stop reading voice on page unload
    window.addEventListener('beforeunload', stopReading);
}



/**
 * Resets form fields
 */
function clearForm() {
    document.getElementById('enquiryForm').reset();
}

/**
 * Clears session after logout
 */
function afterLogOut() {
    location.reload();
}