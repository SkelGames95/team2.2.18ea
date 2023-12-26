document.addEventListener('DOMContentLoaded', function () {
    var preHeader = document.querySelector('.pre-header');
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            preHeader.classList.add('hide');
            navbar.style.top = '0';
        } else {
            preHeader.classList.remove('hide');
            navbar.style.top = preHeader.offsetHeight + 'px';
        }
    });
});