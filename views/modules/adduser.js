import listUser from "./listuser.js";
import { clearInputs } from "./utils.js";

export default async function addNewUser(){
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
        await _addUser(_name, _email);
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

async function _addUser(_name, _email) { 
    const data = {
        "name": _name,
        "email": _email
    };

    const options = {
        method: "POST",
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
        } else if (response.status===201) {
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

