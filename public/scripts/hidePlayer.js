function mostrarElemento(elemento) {
    if (elemento instanceof HTMLElement) {
        elemento.style.visibility = "visible";
        elemento.style.display = "block";
        elemento.style.alignItems = "inherit";
    } else
        throw new TypeError();
}

function esconderElemento(elemento) {
    if (elemento instanceof HTMLElement) {
        elemento.style.display = "none";
        elemento.style.visibility = "hidden";

    } else
        throw new TypeError();
}

export function mostrar() {
    let videos = Array.from(document.getElementsByTagName("iframe"));
    videos.forEach(video => mostrarElemento(video));
    let diVisualizado = document.getElementById("visualizado") && document.getElementById("visualizado").children;
    let interação = diVisualizado.length;
    if (interação == 0) {
        gerarBotão("esconder");
        gerarBotão("mostrar");
    }
    let botõesInHTML = Array.from(diVisualizado).map((div) => div.children[1]);
    if (interação == 0) {
        botõesInHTML[1].addEventListener('click', () => mostrar());
        botõesInHTML[0].addEventListener('click', () => esconder());
    }

    for (let index = 0; index < botõesInHTML.length; index++) {
        let botão = botõesInHTML[index];
        if (botão.id == "mostrar") {
            esconderElemento(diVisualizado[index]);
        }

        if (botão.id == "esconder") {
            mostrarElemento(diVisualizado[index]);
        }
    }

    let iframe = document.querySelector('iframe');
    iframe.classList.add("border");
    iframe.classList.add("border-danger");
    iframe.classList.add("border-2");

}

function gerarBotão(id_button) {
    let changeButton = document.getElementById("visualizado");
    let button = document.createElement("div");
    button.innerHTML = ` <p>Para ${id_button} o video </p><button id="${id_button}" class="btn btn-light display-flex justify-content-center">Clique aqui</button>`;
    changeButton.appendChild(button);

}

export function esconder() {
    document.getElementsByTagName("iframe")[0].style.visibility = "hidden";
    document.getElementsByTagName("iframe")[0].style.display = "none";
    let diVisualizado = document.getElementById("visualizado") && document.getElementById("visualizado").children;
    let interação = diVisualizado.length;
    if (interação == 0) {
        gerarBotão("mostrar");
        gerarBotão("esconder");
    }
    let botõesInHTML = Array.from(diVisualizado).map((div) => div.children[1]);
    if (interação == 0) {
        botõesInHTML[0].addEventListener('click', () => mostrar());
        botõesInHTML[1].addEventListener('click', () => esconder());
    }

    for (let index = 0; index < botõesInHTML.length; index++) {
        let element = botõesInHTML[index];
        if (element.id == "mostrar")
            mostrarElemento(diVisualizado[index]);
        if (element.id == "esconder") {
            esconderElemento(diVisualizado[index]);
        }
    }

    let iframe = document.querySelector('iframe');
    iframe.classList.remove("border");
    iframe.classList.remove("border-danger");
    iframe.classList.remove("border-2");

}
window.onload = function() {
    if (window.localStorage) {
        if (window.localStorage.getItem("isVisualized") == 'true')
            hide.esconder();
        else
            hide.mostrar();
    }
};