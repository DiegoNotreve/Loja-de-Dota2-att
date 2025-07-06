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
        card.style.display = 'none';
      }
    });
  });
});

