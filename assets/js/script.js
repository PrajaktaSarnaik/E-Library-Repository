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
document.getElementById('search-icon').addEventListener('click', function(event) {
    event.preventDefault();
    var searchInput = document.getElementById('search-input');
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
        searchInput.style.display = 'block';
    } else {
        searchInput.style.display = 'none';
    }
});
