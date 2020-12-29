// menu show 

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// active and remove menu 

const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    // ative link 
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // remove menu mobile 
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// =====scroll reveal=====
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// scroll home 
sr.reveal('.home-title', {})
sr.reveal('.button', { delay: 100 })
sr.reveal('.home-img', { delay: 200 })
sr.reveal('.home-social-icon', { interval: 100 })

// scroll skills
sr.reveal('.about-img', {})
sr.reveal('.about-subtitle', { delay: 100 })
sr.reveal('.about-text', { delay: 200 })

// scroll skills
sr.reveal('.skills-subtitle', {})
sr.reveal('.skills-text', { delay: 100 })
sr.reveal('.skills-data', { interval: 100 })
sr.reveal('.skills-img', { delay: 200 })

// scroll work 
sr.reveal('.work-img', { interval: 200 })

// scroll contact 
sr.reveal('.contact-input', { interval: 300 })