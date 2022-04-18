function gerarBotão(onclickFunction) {
    let changeButton = document.getElementById("visualizado");
    let button = document.createElement("div");
    button.innerHTML = ` Para ${onclickFunction} o video <button onclick="${onclickFunction}()" class="btn btn-light display-flex justify-content-center">Clique aqui</button>`;
    changeButton.appendChild(button);
}

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
    if (diVisualizado.length == 0) {
        gerarBotão("esconder");
        gerarBotão("mostrar");
    }
    let botõesInHTML = Array.from(diVisualizado).map((botão) => getOnloadFunctionName(botão));
    for (let index = 0; index < botõesInHTML.length; index++) {
        const element = botõesInHTML[index];
        if (element == "mostrar()")
            esconderElemento(diVisualizado[index]);
        if (element == "esconder()") {
            mostrarElemento(diVisualizado[index]);
        }
    }

    let iframe = document.querySelector('iframe');
    iframe.classList.add("border");
    iframe.classList.add("border-danger");
    iframe.classList.add("border-2");

}

function setIsVisualized(state) {
    if (window.localStorage) {
        window.localStorage.setItem("isVisualized", state);
        console.log("SAVE STATE WITH : " + state);
    }
}

function getOnloadFunctionName(botão) {
    if (botão instanceof HTMLElement) {
        botão = botão.innerHTML;
        return botão.substring(botão.indexOf("\"") + 1, botão.indexOf(")") + 1);
    } else
        throw new TypeError();
}

export function esconder() {
    document.getElementsByTagName("iframe")[0].style.visibility = "hidden";
    document.getElementsByTagName("iframe")[0].style.display = "none";
    let diVisualizado = document.getElementById("visualizado") && document.getElementById("visualizado").children;
    if (diVisualizado.length == 0) {
        gerarBotão("esconder");
        gerarBotão("mostrar");
    }
    let botõesInHTML = Array.from(diVisualizado).map(botão => getOnloadFunctionName(botão));
    for (let index = 0; index < botõesInHTML.length; index++) {
        const element = botõesInHTML[index];
        if (element == "mostrar()")
            mostrarElemento(diVisualizado[index]);
        if (element == "esconder()")
            esconderElemento(diVisualizado[index]);
    }

    let iframe = document.querySelector('iframe');
    iframe.classList.remove("border");
    iframe.classList.remove("border-danger");
    iframe.classList.remove("border-2");

}