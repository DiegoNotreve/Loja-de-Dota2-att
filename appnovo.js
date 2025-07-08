// CARRINHO
document.getElementById("btnCarrinho").addEventListener("click", function () {
  const carrinho = document.getElementById("comprasid");
  carrinho.style.display = carrinho.style.display === "block" ? "none" : "block";
});

const carrinho = document.querySelector(".produtos");

function atualizarQuantidade(botao, operacao) {
  const contador = botao.parentElement;
  let quantidadeSpan = contador.querySelector(".quantidade");
  let quantidade = parseInt(quantidadeSpan.textContent);

  if (operacao === "mais") {
    quantidade++;
  } else if (operacao === "menos" && quantidade > 1) {
    quantidade--;
  }

  quantidadeSpan.textContent = quantidade;
}

carrinho.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-mais")) {
    atualizarQuantidade(event.target, "mais");
  }

  if (event.target.classList.contains("btn-menos")) {
    atualizarQuantidade(event.target, "menos");
  }

  if (event.target.classList.contains("remover_carrinho")) {
    const produto = event.target.closest(".produto");
    produto.remove();
  }
});

document.querySelectorAll(".adicionar_carrinho").forEach((botao) => {
  botao.addEventListener("click", function () {
    const card = botao.closest(".card");
    const nome = card.querySelector("h3").textContent;
    const preco = card.querySelector("p").textContent;
    const imagem = card.querySelector("img").src;

    const produtoHTML = `
      <div class="produto">
        <img src="${imagem}" alt="${nome}" />
        <h4>${nome}</h4>
        <p>${preco}</p>
        <div class="contador">
          <button class="btn-menos">−</button>
          <span class="quantidade">1</span>
          <button class="btn-mais">+</button>
        </div>
        <button class="remover_carrinho">Remover</button>
      </div>
    `;

    carrinho.insertAdjacentHTML("beforeend", produtoHTML);
  });
});

/* BOTÃO FINALIZAR */
document.querySelector(".botao_finalizar").addEventListener("click", function () {
  const produtos = document.querySelectorAll(".produto");
  if (produtos.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  let mensagem = "*Olá! Quero finalizar a compra com os seguintes itens:*\n\n";
  let total = 0;

  produtos.forEach((produto) => {
    const nome = produto.querySelector("h4").textContent;
    const precoTexto = produto.querySelector("p").textContent;
    const quantidade = parseInt(produto.querySelector(".quantidade").textContent);
    const preco = parseFloat(precoTexto.replace("R$", "").replace(",", "."));
    const subtotal = preco * quantidade;
    total += subtotal;

    mensagem += `• ${nome} - ${precoTexto} (x${quantidade})\n`;
  });

  const totalFormatado = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  mensagem += `\n*Total:* ${totalFormatado}`;
  const numeroVendedor = "5581998080374";
  const link = `https://wa.me/${numeroVendedor}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
});

/* CARROSSEL */
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const cards = document.querySelectorAll(".card");
  const btnPrev = document.querySelector(".prev");
  const btnNext = document.querySelector(".next");

  const visibleCards = 5;
  let index = 0;

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 20;
    carousel.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  btnNext.addEventListener("click", function () {
    if (index < cards.length - visibleCards) {
      index++;
    } else {
      index = 0;
    }
    updateCarousel();
  });

  btnPrev.addEventListener("click", function () {
    if (index > 0) {
      index--;
    } else {
      index = cards.length - visibleCards;
    }
    updateCarousel();
  });
});

/* FILTRO POR HERÓI */
const filtros = document.querySelectorAll('.filtro-heroi');
const cards = document.querySelectorAll('.card');

filtros.forEach(filtro => {
  filtro.addEventListener('change', () => {
    const selecionados = Array.from(filtros)
      .filter(f => f.checked)
      .map(f => f.value);

    cards.forEach(card => {
      const heroi = card.dataset.hero;
      if (selecionados.length === 0 || selecionados.includes(heroi)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

/* MODAL DE IMAGEM */
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const fecharBtn = document.getElementById("fecharBtn");
  const imagens = document.querySelectorAll(".card img");

  imagens.forEach((img) => {
    img.addEventListener("click", function () {
      const gifSrc = img.getAttribute("data-img");
      modalImg.src = gifSrc;
      modal.showModal();
    });
  });

  fecharBtn.addEventListener("click", function () {
    modal.close();
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.close();
    }
  });
});


document.getElementById("btnContato").addEventListener("click", function () {
  document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
});
