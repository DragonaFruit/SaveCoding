//Intro
let halaman = document.querySelector('.background');
let navbar = document.querySelector('.nav');
setTimeout(() => {
    halaman.style.top = '0';
    navbar.style.opacity = '1';
}, 4200);

//Laman Baru
const Popup = document.querySelector('#ClickButton');
const HiddenPage = document.querySelector('.hidden-page');

Popup.addEventListener('click', () =>{
    HiddenPage.classList.toggle('active');
})
HiddenPage.addEventListener('click', () =>{
    HiddenPage.classList.toggle('active');
})
//navbar 
const NavBar = document.querySelector('.NavBar-Hidden');
const NavButtonOpen = document.querySelector('#btnOpen');
const ButtonCloseShow = document.querySelector('#btnClose');

NavButtonOpen.addEventListener('click', () =>{
    NavBar.classList.add('active');
    NavButtonOpen.classList.add('active');
    ButtonCloseShow.classList.add('active');
})
ButtonCloseShow.addEventListener('click', () =>{
    NavBar.classList.remove('active');
    NavButtonOpen.classList.remove('active');
    ButtonCloseShow.classList.remove('active');
})
//Button(about)
function HiddenContact() {
    window.location.href ="www.youtube.com";
}
//Scroll About Page
let sections = document.querySelectorAll('section');

windows.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    })
}