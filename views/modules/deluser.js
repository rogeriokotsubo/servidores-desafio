import listUser from './listuser.js';
import { clearInputs } from './utils.js';

export default async function deleteUser(_id){
    const msg = document.querySelector("#msg-p");
    try {
        await _delUser(_id);
    }    
    catch (err) {
        msg.innerHTML=err;
        listUser();
        return false;
    }    
    listUser();
    clearInputs();
    msg.innerHTML=`&nbsp`;
    return true;
}

async function _delUser(_id) {
    const options = {method: "DELETE"}
    try {
        const response = await fetch("/users/"+_id, options);
        if (response.status===406){
            const message = await response.json();
            throw new Error(message.message);
        } else if (response.status===200) {
            const resp = await response.json();
            return resp;
        } else {
            throw new Error(`${[response.status]} - ${response.statusText}`);            
        }  
    }    
    catch(error) {
        throw new Error(error.message);
    }    
}    
