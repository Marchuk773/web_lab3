import {
    addItem,
    Item
} from './item.js';

const sortButton = document.getElementById('sort-button');
const priceButton = document.getElementById('price-button');
const addToolButton = document.getElementById('add-item-button');
const searchButton = document.getElementById('search-button');
const itemsContainer = document.getElementById('main__container');
const itemsList = [];
var counter = 1;

sortButton.addEventListener('click', (event) => {
    event.preventDefault();
    sortButton.classList.toggle('active');
    document.getElementById('sort-button-inner').classList.toggle('active');
    itemsList.sort((a, b) =>
        b.price - a.price
    );
    updateDOM(itemsList);
});

priceButton.addEventListener('click', (event) => {
    event.preventDefault();
    var totalPrice = itemsList.reduce((counter, item) => (counter += item.price), 0);
    document.getElementById('total-expenses').innerText = totalPrice + '$';
});

addToolButton.addEventListener('click', (event) => {
    event.preventDefault();
    var id = counter;
    counter += 1;
    var header = `Basic Header ${id}`;
    var text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt inventore laudantium nulla, cupiditate fugit.';
    var price = Math.floor(Math.random() * 1000);
    var item = new Item(id, header, text, price);
    itemsList.push(item);
    addItem({
        id,
        header,
        text,
        price
    });
    sortButton.classList.remove('active');
    document.getElementById('sort-button-inner').classList.remove('active');
});

searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    var text = document.getElementById("search-text").value;
    var filteredItems = itemsList.filter(item => item.header == text || item.text == text);
    updateDOM(filteredItems);
});


function updateDOM(givenList) {
    var elements = itemsContainer.querySelectorAll('.main__item');
    for (var i = 0; i < elements.length; i++) {
        elements[i].remove();
    }
    for (var i = 0; i < givenList.length; i++) {
        var id = givenList.id;
        var header = givenList[i].header;
        var text = givenList[i].text;
        var price = givenList[i].price;
        addItem({
            id,
            header,
            text,
            price
        });
    }
};