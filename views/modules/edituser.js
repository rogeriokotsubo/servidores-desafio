import { clearInputs } from "./utils.js";
import listUser from "./listuser.js";

export default async function updateUser(_id){
    const msg = document.querySelector("#msg-p");
    const _name = document.querySelector("#name").value;
    const _email = document.querySelector("#email").value;

    if (_name===""){
        msg.innerHTML=`Nome: informação obrigatória`;
        return false;
    }
    if (_email===""){
        msg.innerHTML=`E-mail: informação obrigatória`;
        return false;
    }

    try {
        await _editUser(_id, _name, _email);
    }    
    catch (err) {
        msg.innerHTML=err;
        listUser();
        return false;
    }
    clearInputs();
    listUser();
    msg.innerHTML=`&nbsp`;
    return true;
}

async function _editUser(_id, _name, _email) {
    const data = {
        "id": _id,
        "name": _name,
        "email": _email
    };
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };
    try {
        const response = await fetch("/users", options);
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