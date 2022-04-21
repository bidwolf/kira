import * as hide from './hidePlayer.js';

function toggleButton() {

    let toggleButton = document.querySelector('[class="navbar-toggler collapsed"]');
    let toggleElements = document.getElementById(toggleButton.getAttribute('aria-controls'));
    toggleButton.addEventListener("click", function(e) {
        if (this.getAttribute('aria-expanded') === 'false') {
            toggleElements.classList.add("show");
            this.setAttribute('aria-expanded', 'true');
            this.classList.remove("collapsed");
        } else {
            toggleElements.classList.remove("show");
            this.setAttribute('aria-expanded', 'false');
            this.classList.add("collapsed");
        }

    });
    toggleElements.addEventListener('mouseleave', (e) => {
        toggleElements.classList.remove("show");
        toggleButton.setAttribute('aria-expanded', 'false');
        toggleButton.classList.add("collapsed");
        console.log(e.target);
    });
}
window.onload = function() {
    if (window.localStorage) {
        if (window.localStorage.getItem("isVisualized") == 'true')
            hide.esconder();
        else
            hide.mostrar();
    }
    toggleButton();
};