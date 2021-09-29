const burger = () => {
const burgerBtn = document.querySelector('#js-hamburger')
const nav = document.querySelector('.header__nav')
const navLink = document.querySelectorAll('.header__nav-link')
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('activate')
    if (burgerBtn.classList.contains('activate')) {
        nav.classList.add('active')
        document.body.style.overflow = 'hidden'
    } else {
        nav.classList.remove('active')
        document.body.style.overflow = ''
    }
})
navLink.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        nav.classList.remove('active')
        burgerBtn.classList.remove('activate')
    })
})
}
export default burger