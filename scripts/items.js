const itemTemplate = ({id, header, text}) => `
<div class="main__item" id=""${id}>
            <span class="main__item-header">${header}</span>
            <div class="main__item-text">${text}</div>
            <div class="main__item-buttons-container">
                <button class="main__item-button-edit">Edit</button>
                <button class="main__item-button-remove">Remove</button>
            </div>
        </div>
`;

