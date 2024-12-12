/*------------------Prapti code*--------------------------------*/
window.onscroll = function() {
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
