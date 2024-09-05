const theme = document.getElementById('trilho');
const body = document.body;
theme.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    if (theme.classList.contains("dark")) {
        this.textContent = 'On';
    }
    else {
        this.textContent = 'Off';
    }
});document.addEventListener('DOMContentLoaded', function() {
    const openPopupLinks = document.querySelectorAll('.open-popup');
    const popups = document.querySelectorAll('.popup-container');
    const closeButtons = document.querySelectorAll('.close');

    // Abrir Popup
    openPopupLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const popupId = this.getAttribute('data-popup');
            document.getElementById(popupId).style.display = 'block';
        });
    });

    // Fechar Popup
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.popup-container').style.display = 'none';
        });
    });

    // Fechar Popup ao clicar fora
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('popup-container')) {
            e.target.style.display = 'none';
        }
    });
});