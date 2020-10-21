import {
    displayItem,
    Item
} from './item.js';

import {
    getTools
} from './crudUtils.js';


const sortButton = document.getElementById('sort-button');
const priceButton = document.getElementById('price-button');
const addToolButton = document.getElementById('add-item-button');
const searchButton = document.getElementById('search-button');
const itemsContainer = document.getElementById('main__container');
const showAll = document.getElementById('show-all');
let actualItemsList = [];


window.addEventListener('load', displayAll);

sortButton.addEventListener('click', (event) => {
    event.preventDefault();
    sortButton.classList.toggle('active');
    document.getElementById('sort-button-inner').classList.toggle('active');
    actualItemsList.sort((a, b) =>
        b.price - a.price
    );
    updateDOM(actualItemsList);
});

priceButton.addEventListener('click', (event) => {
    event.preventDefault();
    let totalPrice = actualItemsList.reduce((counter, item) => (counter + item.price), 0);
    document.getElementById('total-expenses').innerText = totalPrice + '$';
});

addToolButton.addEventListener('click', () => {
    sortButton.classList.remove('active');
    document.getElementById('sort-button-inner').classList.remove('active');
});

searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    let text = document.getElementById("search-text").value;
    let pattern = new RegExp(text, 'i');
    let filteredItems = actualItemsList.filter(item => pattern.test(item.header) || pattern.test(item.text));
    actualItemsList = filteredItems;
    updateDOM(filteredItems);
});

showAll.addEventListener('click', displayAll);

function updateDOM(givenList) {
    itemsContainer.innerHTML = '';
    for (const item of givenList) {
        displayItem(item);
    }
};

async function displayAll(event) {
    event.preventDefault();
    let data = await getTools();
    actualItemsList = data;
    updateDOM(actualItemsList);
}