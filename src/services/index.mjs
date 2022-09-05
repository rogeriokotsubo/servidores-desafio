import fs from "fs/promises";
import fsSync from "fs";
import path from 'path';
import {fileURLToPath} from 'url';

import add from './adduserserv.mjs';
import list from './listuserserv.mjs';
import listbyId from './listuserbyidserv.mjs';
import update from './updateuserserv.mjs';
import del from './deleteuserserv.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = __dirname+"/users.json";

// function loadData ()
// {
//     if(!fs.existsSync(dbPath))
//     {
//         fs.writeFileSync(dbPath, "[]");
//     }
//     const fileText = fs.readFileSync(dbPath);
//     userList = JSON.parse(fileText);
// //    console.log(userList);
// }

async function loadData ()
{
    try {
        if(!fsSync.existsSync(dbPath))
        {
            await fs.writeFile(dbPath, "[]");
        }
        const fileText = await fs.readFile(dbPath);
        userList = JSON.parse(fileText);
    }
        catch(err){
        console.log(err);
    }        
//    console.log(userList);
}


let userList = [];

try {
    await loadData ();
}
catch(err){
    console.log(err);
}        

export { add, list, listbyId, update, del, userList, dbPath };

