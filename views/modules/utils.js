import { newUser } from '../index.js';

function clearInputs(){
    newUser.state = 0;
    document.querySelector('form').reset();
}

export {clearInputs};