let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight -160;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    })
}
//Button Dragona
function HomeButton() {
    window.location.href ='/index.html';
}
//Button Hiden
const Button = document.querySelector('#This');
const Page = document.querySelector('.hiddenAbout');

Button.addEventListener("click", () => {
    Page.classList.add('active');
})
Page.addEventListener("click", () => {
    Page.classList.remove('active');
})
//Button Navbar 
const NavBtn = document.querySelector('.navbarbtn');
const NavBar = document.querySelector('.HiddenNavBar');
const NavBtnOff = document.querySelector('.navbarbtnoff');

NavBtn.addEventListener('click', () =>{
    NavBar.classList.add("show");
    NavBtn.classList.add("show");
    NavBtnOff.classList.add("show")
})
NavBtnOff.addEventListener('click', () =>{
    NavBar.classList.remove("show");
    NavBtn.classList.remove("show");
    NavBtnOff.classList.remove("show");
})
NavBar.addEventListener('click', () =>{
    NavBar.classList.remove("show");
    NavBtn.classList.remove("show");
    NavBtnOff.classList.remove("show");
})
//Button Dragona
function HomeButton() {
    window.location.href ='/index.html';
}