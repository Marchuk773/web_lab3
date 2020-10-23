import {
    deleteTool,
    getUrlVars
} from './crudUtils.js';

const id = getUrlVars()["id"];
const deleteButton = document.getElementById("delete");
const modal = document.getElementById("myModal");
const modalMessage = document.getElementById("modalMessage");

deleteButton.addEventListener('click', (event) => {
    event.preventDefault();
    deleteTool(id);
    modal.style.color = 'rgb(94, 163, 206)';
    modal.style.display = "block";
    modalMessage.innerText = "Tool deleted!";
});

modal.onclick = function () {
    modal.style.display = "none";
}