export class Item {
    constructor(id, header, description, price) {
        this.id = id,
            this.header = header,
            this.description = description,
            this.price = price;
    }
}

const itemTemplate = ({
    id,
    header,
    description,
    price
}) => `<div class="main__item" id="${id}">
            <span class="main__item-header">${header}</span>
            <div class="main__item-text">${description}</div>
            <div class="main__item-footer">
                <div class="main__item-price">
                    <h4>Price:</h4>
                    <h4>${price}$</h4>
                </div>
                <div class="main__item-buttons-container">
                    <button class="main__item-button-edit" onclick="
                    let id = parentNode.parentNode.parentNode.id;
                    window.location.href='edit.html'+'?id='+'${id}&'+'?header='+'${header}&'+'?description='+'${description}&'
                    +'?price='+'${price}';">Edit</button>
                    <button class="main__item-button-remove" onclick="
                        let id = parentNode.parentNode.parentNode.id;
                        window.location.href='delete.html'+'?id='+'${id}';">Remove</button>
                </div>
            </div>
        </div>`;

export const displayItem = ({
    id,
    header,
    description,
    price
}) => {
    let itemContainer = document.getElementById('main__container')
    itemContainer.insertAdjacentHTML('beforeend', itemTemplate({
        id,
        header,
        description,
        price
    }))
};