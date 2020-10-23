import {
    addTool,
    checkParams
} from './crudUtils.js';


const modal = document.getElementById("myModal");
const modalMessage = document.getElementById("modalMessage");
const submitButton = document.getElementById('add_tool');
const span = document.getElementsByClassName("close")[0];

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let header = document.getElementById('add_title').value;
    let description = document.getElementById('add_description').value;
    let price = document.getElementById('add_price').value;
    if (checkParams(header, description, price)) {
        let user = {
            header: header,
            description: description,
            price: price
        };
        addTool(user);
        modal.style.color = 'rgb(94, 163, 206)';
        modal.style.display = "block";
        modalMessage.innerText = "Tool added!";
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