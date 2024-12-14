/*********************Prapti code Starts**********************/
window.onscroll = function () {
    var navbar = document.getElementById("nav");
    if (window.pageYOffset > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

// ACTIVATE SEARCH BAR WHEN CLICKED ON SEARCH ICON
// document.getElementById('search-bar').addEventListener('click', function (event) {
//     event.preventDefault();
//     var searchInput = document.getElementById('search-input');
//     if (searchInput.style.display === 'none' || searchInput.style.display === '') {
//         searchInput.style.display = 'block';
//     } else {
//         searchInput.style.display = 'none';
//     }
// });

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
// Function to display book list
function displayBooks(books, category) {
	const bookSection = document.getElementById(`${category.toLowerCase()}-books`);
	bookSection.innerHTML = "";
	books.forEach(book => {
		const bookHTML = `
			<div class="book">
				<img src="${book.image}" alt="${book.title}">
				<div>
					<h2 class="title">${book.title}</h2>
					<p class="author">${book.author}</p>
				</div>
			</div>
		`;
		bookSection.insertAdjacentHTML("beforeend", bookHTML);
	});
}

// Function to search books
function searchBooks(searchTerm) {
	const filteredBooks = books.filter(book => {
		return book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			   book.author.toLowerCase().includes(searchTerm.toLowerCase());
	});
	displayBooks(filteredBooks, "Fantasy");
	displayBooks(filteredBooks, "Comedy");
	displayBooks(filteredBooks, "Biographies");
	displayBooks(filteredBooks, "Self-Help");
}

// Event listener for search button
document.getElementById("search-bar").addEventListener("input", () => {
	const searchTerm = document.getElementById("search-bar").value.trim();
	if (searchTerm) {
		searchBooks(searchTerm);
	} else {
		displayBooks(books.filter(book => book.category === "Fantasy"), "Fantasy");
		displayBooks(books.filter(book => book.category === "Comedy"), "Comedy");
		displayBooks(books.filter(book => book.category === "Biographies"), "Biographies");
		displayBooks(books.filter(book => book.category === "Self-Help"), "Self-Help");
	}
});

// Display initial book list
displayBooks(books.filter(book => book.category === "Fantasy"), "Fantasy");
displayBooks(books.filter(book => book.category === "Comedy"), "Comedy");
displayBooks(books.filter(book => book.category === "Biographies"), "Biographies");
displayBooks(books.filter(book => book.category === "Self"), "Self-Help");

//    // Function to handle search and filtering
//    document.getElementById("search-bar").addEventListener("input", () => {
//     const searchedBook = document.getElementById("search-bar").value.toLowerCase();
//   console.log(searchedBook);

//     const filteredBooks = books.filter(book => {
//       return (
//         (book.title === "" || book.title.toLowerCase().includes(searchedBook)) &&
//         (book.author === "" || book.author.toLowerCase().includes(searchedBook)) &&
//         (book.genre === "" || book.genre.toLowerCase().includes(searchedBook))
//       );
//     });
//   console.log(filteredBooks);
//     renderBooks(filteredBooks);
//   });

//    // Function to render books
// //    function renderBooks(bookList) {
// //     const bookListDiv = document.getElementById("bookList");
// //     bookListDiv.innerHTML = ''; // Clear the current book list
  
// //     bookList.forEach(book => {
// //       const bookCard = document.createElement("div");
// //       bookCard.classList.add("book-card");
  
// //       const bookTitle = document.createElement("h3");
// //       bookTitle.textContent = book.title;
  
// //       const bookAuthor = document.createElement("p");
// //       bookAuthor.textContent = `By: ${book.author}`;
  
// //       const bookGenre = document.createElement("p");
// //       bookGenre.textContent = `Genre: ${book.genre}`;
  
// //       const borrowBtn = document.createElement("button");
// //       borrowBtn.textContent = book.borrowed ? "Already Borrowed" : "Borrow";
// //       borrowBtn.onclick = () => handleBorrow(book);
  
// //       const favBtn = document.createElement("button");
// //       favBtn.textContent = book.favorite ? "Unfavorite" : "Add to Favorites";
// //       favBtn.classList.add("fav-btn");
// //       favBtn.onclick = () => toggleFavorite(book);
  
// //       bookCard.append(bookTitle, bookAuthor, bookGenre, borrowBtn, favBtn);
// //       bookListDiv.append(bookCard);
// //     });
// //   }

//   function displayBooks(filteredBooks) {
//     const bookContainer = document.getElementById('book-container');
//     bookContainer.innerHTML = ''; // Clear previous results
//     filteredBooks.forEach(book => {
//         const bookCard = document.createElement('div');
//         bookCard.className = 'col-12 col-sm-6 col-md-4 col-lg-2';
//         bookCard.innerHTML = `
//             <div class="card" id="bookcard">
//                 <img src="assets/images/${book.id}.jpeg" class="card-img-top" alt="Book Image">
//                 <div class="card-body">
//                     <h5 class="card-title">${book.title}</h5>
//                     <p class="card-text">Author: ${book.author}<br>Genre: ${book.genre}</p>
//                     <a href="#" class="btn btn-primary">Borrow</a>
//                     <i class="fa-regular fa-heart"></i>
//                 </div>
//             </div>
//         `;
//         bookContainer.appendChild(bookCard);
//     });
// }

// // Initial display of all books
// displayBooks(books);

// // Search functionality
// document.getElementById('search-input').addEventListener('input', function(event) {
//     const query = event.target.value.toLowerCase();
//     const filteredBooks = books.filter(book => 
//         book.title.toLowerCase().includes(query) ||
//         book.author.toLowerCase().includes(query) ||
//         book.genre.toLowerCase().includes(query)
//     );
//     displayBooks(filteredBooks);
// });



// function searchBooks() {
//     console.log('searchBooks called');
//     const query = document.getElementById('search-bar').value.toLowerCase();
//     console.log(query);
//     const books = document.querySelectorAll('#book-list .book');
//     console.log(books);
//     let firstVisibleBook = null;

//     books.forEach(book => {
//         const title = book.getAttribute('data-title').toLowerCase();
//         const author = book.getAttribute('data-author').toLowerCase();
//         const genre = book.getAttribute('data-genre').toLowerCase();

//         if (title.includes(query) || author.includes(query) || genre.includes(query)) {
//             book.style.display = 'block';
//             if (!firstVisibleBook) {
//                 firstVisibleBook = book;
//             }
//         } else {
//             book.style.display = 'none';
//         }
//     });

    // if (firstVisibleBook) {
    //     firstVisibleBook.scrollIntoView({ behavior: 'smooth' });
    // }
//}

//document.getElementById('search-bar').addEventListener('input', searchBooks);

// document.getElementById('search-bar').addEventListener('keydown', function (event) {
//     if (event.key === 'Enter') {
//         event.preventDefault();
//         searchBooks();
//         console.log('Enter pressed');
//     }
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

