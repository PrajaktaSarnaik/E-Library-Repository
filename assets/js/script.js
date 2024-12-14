/*------------------Prapti code*--------------------------------*/
window.onscroll = function() {
    var navbar = document.getElementById("nav");
    if (window.pageYOffset > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

// ACTIVATE SEARCH BAR WHEN CLICKED ON SEARCH ICON
document.getElementById('search-bar').addEventListener('click', function(event) {
    event.preventDefault();
    var searchInput = document.getElementById('search-input');
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
        searchInput.style.display = 'block';
    } else {
        searchInput.style.display = 'none';
    }
});

function searchBooks() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const books = document.querySelectorAll('#book-list .book');
    let firstVisibleBook = null;

    books.forEach(book => {
        const title = book.getAttribute('data-title').toLowerCase();
        const author = book.getAttribute('data-author').toLowerCase();
        const genre = book.getAttribute('data-genre').toLowerCase();

        if (title.includes(query) || author.includes(query) || genre.includes(query)) {
            book.style.display = 'block';
            if (!firstVisibleBook) {
                firstVisibleBook = book;
            }
        } else {
            book.style.display = 'none';
        }
    });

    if (firstVisibleBook) {
        firstVisibleBook.scrollIntoView({ behavior: 'smooth' });
    }
}

document.getElementById('search-bar').addEventListener('input', searchBooks);

document.getElementById('search-bar').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchBooks();
    }
});
