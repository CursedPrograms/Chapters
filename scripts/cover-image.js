var bookCover = document.getElementById('bookCover');
var isOpen = false;


var book = document.querySelector('.book');


book.addEventListener('mouseenter', function () {
    isOpen = true;
    updateBookCover();
});

book.addEventListener('mouseleave', function () {
    isOpen = false;
    updateBookCover();
});

function updateBookCover() {
    var closedCover = bookCover.querySelector('[alt="Closed Book Cover"]');
    var openCover = bookCover.querySelector('[alt="Open Book Cover"]');

    if (isOpen) {

        closedCover.style.display = 'none';
        openCover.style.display = 'block';
    } else {

        closedCover.style.display = 'block';
        openCover.style.display = 'none';
    }
}