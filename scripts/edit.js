import {
    editTool,
    getUrlVars,
    checkParams
} from './crudUtils.js';


const modal = document.getElementById("myModal");
const modalMessage = document.getElementById("modalMessage");
const submitButton = document.getElementById('edit_tool');
const span = document.getElementsByClassName("close")[0];
const id = getUrlVars()["id"];
const header = getUrlVars()["header"];
const description = getUrlVars()["description"];
const price = getUrlVars()["price"];


window.addEventListener('load', () => {
    document.getElementById("edit_title").value = header;
    document.getElementById("edit_description").value = description;
    document.getElementById("edit_price").value = price;
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let editedHeader = document.getElementById('edit_title').value;
    let editedDescription = document.getElementById('edit_description').value;
    let editedPrice = document.getElementById('edit_price').value;
    if (checkParams(editedHeader, editedDescription, editedPrice)) {
        let user = {
            header: editedHeader,
            description: editedDescription,
            price: editedPrice
        };
        editTool(id, user);
        modal.style.color = 'rgb(94, 163, 206)';
        modal.style.display = "block";
        modalMessage.innerText = "Tool edited!";
    } else {
        modal.style.color = 'red';
        modal.style.display = "block";
        modalMessage.innerText = "All fields are required!";
    }
});

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}