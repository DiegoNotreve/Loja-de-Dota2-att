document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal"); // Seleciona o modal
  const modalImg = document.getElementById("modalImg"); // Seleciona a imagem no modal
  const fecharBtn = document.getElementById("fecharBtn"); // Seleciona o botão de fechar

  // Captura todas as imagens dos cards
  const imagens = document.querySelectorAll(".card img");

  imagens.forEach((img) => {
    img.addEventListener("click", function () {
      const gifSrc = img.getAttribute("data-img"); // Pega o GIF do atributo "data-img"
      
      // Exibe o GIF de carregamento ou algo similar, se necessário
      modalImg.src = gifSrc; // Define a imagem no modal
      modal.showModal(); // Abre o modal
    });
  });

  // Fecha o modal ao clicar no botão "Fechar"
  fecharBtn.addEventListener("click", function () {
    modal.close(); // Fecha o modal
  });

  // Fecha o modal se clicar fora da imagem
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.close(); // Fecha o modal se clicar fora
    }
  });
});
