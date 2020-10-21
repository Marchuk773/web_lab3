import {
    addTool
} from './crudUtils.js';


const submitButton = document.getElementById('add_tool');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    header = document.getElementById('add_title');
    description = document.getElementById('add_title');
    let user = {
        header: "header",
        description: "Web pls spare me",
        price: 228
    };
    addTool(user)
});