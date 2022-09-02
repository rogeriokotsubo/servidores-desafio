import fs from "fs";
import { userList, dbPath } from "./index.mjs";
import checkEmail from "./checkemail.mjs";

export default function add (data)
{
    if (data.name===undefined){
        throw new Error('Nome inválido!');
    }
    if (data.email===undefined){
        throw new Error('Email inválido!');
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

    data.id = userList.length + 1;
    data.deleted = false;
    userList.push(data);
    fs.writeFile(dbPath, JSON.stringify(userList), (err) => {
        if (err) throw err;
    });
}
