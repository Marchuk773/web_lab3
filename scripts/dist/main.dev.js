"use strict";

var _item = require("./item.js");

var sortButton = document.getElementById('sort-button');
var priceButton = document.getElementById('price-button');
var addToolButton = document.getElementById('add-item-button');
var searchButton = document.getElementById('search-button');
var itemsContainer = document.getElementById('main__container');
var itemsList = [];
var actualItemsList = [];
var counter = 0;
sortButton.addEventListener('click', function (event) {
  event.preventDefault();
  sortButton.classList.toggle('active');
  document.getElementById('sort-button-inner').classList.toggle('active');
  actualItemsList.sort(function (a, b) {
    return b.price - a.price;
  });
  updateDOM(actualItemsList);
});
priceButton.addEventListener('click', function (event) {
  event.preventDefault();
  var totalPrice = actualItemsList.reduce(function (counter, item) {
    return counter + item.price;
  }, 0);
  document.getElementById('total-expenses').innerText = totalPrice + '$';
});
addToolButton.addEventListener('click', function (event) {
  event.preventDefault();
  var id = counter;
  counter += 1;
  var header = "Basic Header ".concat(id);
  var text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt inventore laudantium nulla, cupiditate fugit.';
  var price = Math.floor(Math.random() * 1000);
  var item = new _item.Item(id, header, text, price);
  itemsList.push(item);
  actualItemsList.push(item);
  (0, _item.addItem)({
    id: id,
    header: header,
    text: text,
    price: price
  });
  sortButton.classList.remove('active');
  document.getElementById('sort-button-inner').classList.remove('active');
});
searchButton.addEventListener('click', function (event) {
  event.preventDefault();
  var text = document.getElementById("search-text").value;
  var pattern = new RegExp(text);
  var filteredItems = itemsList.filter(function (item) {
    return pattern.test(item.header) || pattern.test(item.text);
  });
  updateDOM(filteredItems);
});

function updateDOM(givenList) {
  itemsContainer.innerHTML = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = itemsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      (0, _item.addItem)(item);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

;