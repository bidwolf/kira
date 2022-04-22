let quantidadeDeProdutos = 12;
let produtos = Array.from(document.getElementById('produtos').children[0].children);
produtos.forEach(produto => produto.classList.add("visually-hidden"));
for (let i = 0; i < quantidadeDeProdutos; i++) {
    if (produtos[i]) produtos[i].classList.remove("visually-hidden");
}
let carregarMais = document.createElement('div');
let loadButton = document.createElement('button');
loadButton.id = "loadMore";
loadButton.innerHTML = `Carregar Mais`;
loadButton.className = 'btn btn-dark rounded-pill';
carregarMais.insertAdjacentElement('afterbegin', loadButton);
carregarMais.className = "d-grid justify-content-center";
loadButton.addEventListener('click', (e) => {
    for (let i = quantidadeDeProdutos; i < quantidadeDeProdutos + 12; i++) {
        if (produtos[i]) produtos[i].classList.remove("visually-hidden");
        else break;
    }
    if (quantidadeDeProdutos <= produtos.length) quantidadeDeProdutos = quantidadeDeProdutos + 12;
    else carregarMais.classList.add("visually-hidden");
});
document.querySelector('footer').insertAdjacentElement('beforebegin', carregarMais);