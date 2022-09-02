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
}

function _editUser(_id, _name, _email) {
    return new Promise((resolve, reject) => {
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
        fetch("/users", options)
            .then(resp => {
                if (resp.status===200) {
                    resolve(resp.json());  
                } else {
//                    return Promise.reject(resp);
                    return Promise.reject(`${resp.status} - ${resp.statusText}`);
                } 
            })
            .catch(err => {
                reject(err);
            });
    })
}