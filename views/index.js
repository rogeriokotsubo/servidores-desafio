import listUser from './modules/listuser.js';
import addNewUser from './modules/adduser.js';
import updateUser from './modules/edituser.js';
import UserState from './modules/UserState.js';

const newUser = new UserState(0);

document.querySelector('#btn-input').addEventListener('click', () => {
        if (newUser.state===0){
            addNewUser();
        } else {
            updateUser(newUser.state);
        }    
    });

listUser();

export { newUser };
