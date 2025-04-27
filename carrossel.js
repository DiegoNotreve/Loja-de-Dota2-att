
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const cards = document.querySelectorAll(".card");
  const btnPrev = document.querySelector(".prev");
  const btnNext = document.querySelector(".next");

  const visibleCards = 5; // Número de cards visíveis
  let index = 0;

  function updateCarousel() {
      const cardWidth = cards[0].offsetWidth + 20; // Largura do card + gap
      carousel.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  btnNext.addEventListener("click", function () {
      if (index < cards.length - visibleCards) {
          index++;
      } else {
          index = 0; // Volta para o início (efeito infinito)
      }
      updateCarousel();
  });

  btnPrev.addEventListener("click", function () {
      if (index > 0) {
          index--;
      } else {
          index = cards.length - visibleCards; // Volta para o final
      }
      updateCarousel();
  });
});

