
import { userList } from './index.mjs';

export default function list ()
{
    const userData = [];
    for (let i=0; i<userList.length; i++){
        if (!userList[i].deleted){
            userData.push(userList[i]);
        }
    }
    return userData;
}
