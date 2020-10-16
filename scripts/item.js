export class Item {
    constructor(id, header, text, price) {
        this.id = id;
        this.header = header;
        this.text = text;
        this.price = price;
    }
}

const itemTemplate = ({
    id,
    header,
    text,
    price
}) => `<div class="main__item" id="${id}">
            <span class="main__item-header">${header}</span>
            <div class="main__item-text">${text}</div>
            <div class="main__item-footer">
                <div class="main__item-price">
                    <h4>Price:</h4>
                    <h4>${price}$</h4>
                </div>
                <div class="main__item-buttons-container">
                    <button class="main__item-button-edit">Edit</button>
                    <button class="main__item-button-remove">Remove</button>
                </div>
            </div>
        </div>`;

export const addItem = ({
    id,
    header,
    text,
    price
}) => {
    var itemContainer = document.getElementById('main__container');
    itemContainer.insertAdjacentHTML('beforeend', itemTemplate({
        id,
        header,
        text,
        price
    }));
};