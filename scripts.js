// Add a custom scrolling behavior to the navigation links
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.hash);
        target.scrollIntoView({ behavior: 'smooth' });
    });
});