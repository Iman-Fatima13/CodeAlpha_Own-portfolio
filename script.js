
window.addEventListener("scroll", function(){

  const header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 0);

});



const cards = document.querySelectorAll(".card, .project-card");

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";

    }

  });

});
cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.6s";

});