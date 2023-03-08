                //    Exibir e ocultar Menu

const navMenu = document.querySelector(".nav-menu"),
    toggleMenu = document.querySelector(".nav-toggle"),
    closeMenu = document.querySelector(".nav-close");

    //Mostrar Menu
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
} )

    //Esconder Menu
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
} )

    //Remover MENU ao clicar na opção da NAV.
const navLink = document.querySelectorAll(".nav-link")

function linkAction()
{
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//Sessão de Scroll
const sections = document.querySelectorAll("section[id]");

function scrollActive()
{
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector(".nav-menu a[href*="+ sectionId +"]").classList.add('active')
        }
        else
        {
            document.querySelector(".nav-menu a[href*="+ sectionId +"]").classList.remove('active')
        }
    })
}
