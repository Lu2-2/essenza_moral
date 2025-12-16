const caixa = document.querySelector('#caixa');
const botoes = document.querySelectorAll('button[data-prato]');
const h1 = document.querySelector('#caixa_texto')

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const prato = botao.dataset.prato;
    h1.innerHTML = `${prato}`;

    // aplica o fade-out
    caixa.classList.add('fade-out');
    h1.classList.add('fade-out');

    // troca a imagem após o fade-out
    setTimeout(() => {
      caixa.src = `./images/pratos/itens/${prato}.png`;

      // espera um pouco a imagem carregar e aplica fade-in
      caixa.onload = () => {
        caixa.classList.remove('fade-out');
        h1.classList.remove('fade-out')
      };
    }, 400); // tempo antes de trocar (metade da transição)
  });
});
