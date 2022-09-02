
import { userList } from './index.mjs';

export default function listbyId (_id)
{
    const userData = [];
    for (let i=0; i<userList.length; i++){
        if (!userList[i].deleted && userList[i].id===_id){
            userData.push(userList[i]);
            break;
        }
    }
    return userData;
}
