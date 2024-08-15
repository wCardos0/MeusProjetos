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

document.getElementById('popupOpen1').addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById('popup').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click', function(){
    document.getElementById('popup').style.display = 'none';
});
document.addEventListener('click', function(event) {
    if (event.target === document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});
