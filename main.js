const aboutbtn = document.getElementById("about");
const worksbtn = document.getElementById("works");
const contactbtn = document.getElementById("contact");
const followbtn = document.getElementById("follow");
const footer__arrow = document.getElementById("footer__arrow");
const header__arrow = document.getElementById("header__arrow");
const about = document.querySelector('.about')

headerarrow = () => {
    about.scrollIntoView({
        behavior: 'smooth'
    })
}

arrow = () => {
    const header = document.querySelector('.header').scrollIntoView({
        behavior: 'smooth'
    })
}


abouts = () => {
    about.scrollIntoView({
        behavior: 'smooth'
    })
}

works = () => {
    const works = document.querySelector('.works').scrollIntoView({
        behavior: 'smooth'
    })
}

contact = () => {
    const contact = document.querySelector('.contact').scrollIntoView({
        behavior: 'smooth'
    })
}

follow = () => {
    const follow = document.querySelector('.follow').scrollIntoView({
        behavior: 'smooth'
    })
}

aboutbtn.addEventListener("click", abouts)
worksbtn.addEventListener("click", works)
contactbtn.addEventListener("click", contact)
followbtn.addEventListener("click", follow)
footer__arrow.addEventListener("click", arrow)
header__arrow.addEventListener("click", headerarrow)