var bookCover = document.getElementById('bookCover');
var isOpen = false;
var isHovered = false;
var book = document.querySelector('.book');
var timer = 800;

book.addEventListener('mouseenter', function () {
    isHovered = true;
    setTimeout(function () {
        if (isHovered) {
            isOpen = true;
            updateBookCover();
        }
    }, timer);
});

book.addEventListener('mouseleave', function () {
    setTimeout(function () {
        isHovered = false;
        isOpen = false;
        updateBookCover();
    }, timer); 
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
