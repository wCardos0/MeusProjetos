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
    
});