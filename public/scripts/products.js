let quantidadeDeProdutos = 12;
let produtos = Array.from(document.getElementById('produtos').children[0].children);
produtos.forEach(produto => produto.classList.add("visually-hidden"));
for (let i = 0; i < quantidadeDeProdutos; i++) {
    if (produtos[i]) produtos[i].classList.remove("visually-hidden");
}
let carregarMais = document.createElement('div');
carregarMais.innerHTML = `<button class="btn btn-dark rounded-pill ">Carregar Mais</button>`;
carregarMais.className = "d-grid justify-content-center";
carregarMais.addEventListener('click', (e) => {
    for (let i = quantidadeDeProdutos; i < quantidadeDeProdutos + 12; i++) {
        if (produtos[i]) produtos[i].classList.remove("visually-hidden");
        else break;
    }
    if (quantidadeDeProdutos <= produtos.length) quantidadeDeProdutos = quantidadeDeProdutos + 12;
    else carregarMais.classList.add("visually-hidden");
});
document.querySelector('footer').insertAdjacentElement('beforebegin', carregarMais);