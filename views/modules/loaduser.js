import getList from "./searchList.js";
import { newUser } from "../index.js";

export default async function loadUser(_id) {
    const msg = document.querySelector("#msg-p");
    try {
        const res = await getList(_id);
        if (res.length > 0) {
            document.querySelector('#name').value=res[0].name;
            document.querySelector('#email').value=res[0].email;
            newUser.state=_id;
        };
    }    
    catch(err){
        msg.innerHTML=`[ERRO]: ${err}`;
    };
}
