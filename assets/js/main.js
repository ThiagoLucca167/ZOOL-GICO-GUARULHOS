document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var menu = document.querySelector('.menu');

    menuToggle.addEventListener('change', function () {
        menu.style.display = this.checked ? 'flex' : 'none';
    });
});
