// NAVBAR
// abrir y cerrar menú
const navSlide = () => {
  const burger = document.querySelector('.cabecera__btn');
  const closeIcon = document.querySelector(".cabecera__btn--close");
  const openIcon = document.querySelector('.cabecera__btn--menu')
  const cabecera = document.querySelector('.cabecera');
  const menu = document.querySelector('.navbar__menu');
  const titulo = document.querySelector('.cabecera__titulo a');
  const mainContent = document.querySelector('.main-portfolio');
  const galeria = document.querySelectorAll('.gallery');


  burger.addEventListener('click', () => {
    cabecera.classList.toggle('active')
    menu.classList.toggle('active');
    if (cabecera.classList.contains('active')) {
          closeIcon.style.display = "block";
          openIcon.style.display = "none";
          titulo.style.color ="#f8f6f1";
          closeIcon.style.color = "#f8f6f1"
          cabecera.style.color = "#ff6347"
          mainContent.style.zIndex = "-1";
          galeria.style.zIndex = -"-1";
    } else {
          closeIcon.style.display = "none";
          openIcon.style.display = "block";
          titulo.style.color ="#323232";
          mainContent.style.zIndex = "1";
          galeria.style.heigth = "100px";
        }
    
  });

}
navSlide();


// Galeria baguette box 
window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
  });