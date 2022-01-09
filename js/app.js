// NAVBAR
// abrir y cerrar menú
const navSlide = () => {
  const burger = document.querySelector('.hamburger');
  const cabecera = document.querySelector('.cabecera');
  const menu = document.querySelector('.navbar__menu');
  const titulo = document.querySelector('.cabecera__titulo a');
  const mainContent = document.querySelector('.main-portfolio');
  const galeria = document.querySelectorAll('.gallery');


  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    cabecera.classList.toggle('active');
    menu.classList.toggle('active');
    if (cabecera.classList.contains('active')) {
          titulo.style.color ="#f8f6f1";
          cabecera.style.color = "#ff6347";
          mainContent.style.zIndex = "-1";
          galeria.style.zIndex = -"-1";
    } else {
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