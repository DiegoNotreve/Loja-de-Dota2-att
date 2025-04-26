document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const fecharBtn = document.getElementById("fecharBtn");

  // Captura todas as imagens dos cards
  const imagens = document.querySelectorAll(".card img");

  imagens.forEach((img) => {
    img.addEventListener("click", function () {
      const src = img.getAttribute("data-img") || img.src;
      modalImg.src = src;
      modal.showModal(); // Usa o método correto para abrir o modal
    });
  });

  // Fecha o modal ao clicar no botão
  fecharBtn.addEventListener("click", function () {
    modal.close(); // Usa o método correto para fechar
  });

  // Também fecha o modal se clicar fora da imagem
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.close();
    }
  });
});
