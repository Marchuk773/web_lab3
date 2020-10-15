const sortButton = document.getElementById('sort-button');
const priceButton = document.getElementById('price-button');
var globalPrice = 3;

sortButton.addEventListener('click', () => {
    sortButton.classList.toggle('active');
    document.getElementById('sort-button-inner').classList.toggle('active');
});

priceButton.addEventListener('click', () => {
    document.getElementById('total-expenses').innerText = globalPrice + '$';
});