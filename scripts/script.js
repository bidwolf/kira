import { mostrar, esconder } from './hidePlayer';
(function toggleButton() {

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
})();
window.onload = function() {
    if (window.localStorage) {
        if (window.localStorage.getItem("isVisualized") == 'true')
            esconder();
        else
            mostrar();
    }
};