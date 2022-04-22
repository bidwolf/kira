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
        if (toggleElements.classList.contains("show")) {
            toggleElements.classList.remove("show");
            toggleButton.setAttribute('aria-expanded', 'false');
            toggleButton.classList.add("collapsed");
        }
    });
}
window.onload = function() {
    toggleButton();
};