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
}

function _delUser(_id) {
    return new Promise((resolve, reject) => {
        const options = {method: "DELETE"}
        fetch("/users/"+_id, options)
            .then(resp => {
                if (resp.status===200) {
                    resolve(resp.json());  
                } else {
                    return Promise.reject(`${resp.status} - ${resp.statusText}`);
                }
            })
            .catch(err => {
                reject(err);
            });
    })
}    
