const hamburger = document.getElementById('hamb');
const navLinks = document.getElementById('navlink');
const links = document.querySelectorAll('#navlink a')
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open')
    
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});
