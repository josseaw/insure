const slideNav = () => {
    const menu = document.querySelector('.menu');
    const scroll = document.querySelector('.collapse.navbar-collapse');

    menu.addEventListener('click', () => {
        scroll.classList.toggle('active');
        menu.classList.toggle('toggle');
    });
}

slideNav();