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