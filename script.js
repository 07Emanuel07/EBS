// Navbar
const navbar = document.getElementById('navbar')
let scrolled = false;
window.onscroll = function () {
    if (window.pageYOffset > 100) {
        navbar.classList.remove('top');
        if (!scrolled) {
            navbar.style.transform = 'translateY (-70)'
        }
    } else {
        navbar.classList.add('top')
    }
}

// Projekte 

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')

    })
}
