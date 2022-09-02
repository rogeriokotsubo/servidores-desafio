
import fs from "fs";
import { userList, dbPath } from './index.mjs';

export default function del (_id)
{
    for (let i=0; i<userList.length; i++){
        if (userList[i].id===_id){
            userList[i].deleted = true;
            fs.writeFile(dbPath, JSON.stringify(userList), (err) => {
                if (err) throw err;
            });
            return;
        }
    }
    throw new Error('Usuário não existe!');
}
