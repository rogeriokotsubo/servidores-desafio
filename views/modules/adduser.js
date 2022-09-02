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
}

function _addUser(_name, _email) {
    return new Promise((resolve, reject) => {
   
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
        
        fetch("/users", options)
            .then(resp => {
                if (resp.status===201) {
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

