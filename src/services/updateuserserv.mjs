import fs from "fs";
import { userList, dbPath } from './index.mjs';
import checkEmail from "./checkemail.mjs";

export default function update (data)
{
    const id = parseInt(parseInt(data.id));
    if (id===undefined){
        throw new Error('Id inválido!');
    }
    if (data.name===undefined){
        throw new Error('Nome inválido!');
    }
    if (data.email===undefined){
        throw new Error('Email inválido!');
    }
    if (isNaN(id)){
        throw new Error('Id inválido!');
    }
    if (data.name===""){
        throw new Error('Nome inválido!');
    }
    if (data.email===""){
        throw new Error('Email inválido!');
    }
    if (!checkEmail(data.email)){
        throw new Error('Email inválido!');
    }

    for (let i=0; i<userList.length; i++){
        if (id!=userList[i].id){
            if (userList[i].email.trim().toLowerCase()===data.email.trim().toLowerCase()){
                throw new Error('Email já existe!');
            }
            if (userList[i].name.trim().toLowerCase()===data.name.trim().toLowerCase()){
                throw new Error('Nome já existe!');
            }
        }    
    }

    let userExists = false;
    for (let i=0; i<userList.length; i++){
        if (!userList[i].deleted && userList[i].id===id){
            userExists = true;
            userList[i].name = data.name;
            userList[i].email = data.email;
            fs.writeFile(dbPath, JSON.stringify(userList), (err) => {
                if (err) throw err;
            });
        }
    }
    if (!userExists){
        throw new Error('Usuário não existe!');
    }    
}
