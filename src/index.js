import validator from 'validator';
import './index.css';

const inputField = document.querySelector('#value');
const selector = document.querySelector('#selector');
const button = document.querySelector('#validate');
const responseText = document.querySelector('#answer');
const UUID = 4;

button.addEventListener('click', (event) => {
    event.preventDefault();

    const fields = {
        cpf: validator.isTaxID(inputField.value, 'pt-BR'),
        hexColor: validator.isHexColor(inputField.value),
        email: validator.isEmail(inputField.value),
        uuid: validator.isUUID(inputField.value, UUID),
        url: validator.isURL(inputField.value),
    };
    responseText.innerHTML = `Validation returned ${fields[selector.value]}`;
});
