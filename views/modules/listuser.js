import getList from './searchList.js';
import deleteUser from './deluser.js';
import loadUser from './loaduser.js';

export default async function listUser() {
    try {
        const res = await getList(0);
        const tbl = document.querySelector('#tbl-users');
        tbl.innerHTML = `<tr> 
                            <th width="10%">#ID</th>
                            <th width="40%">NOME</th>
                            <th width="40%">E-MAIL</th>
                            <th width="5%">EDITAR</th>
                            <th width="5%">EXCLUIR</th>
                        </tr>`
        if (res.length > 0) {
            for (let i = 0; i < res.length; i++){     
                const newRow = tbl.insertRow(i+1);

                const newCell1 = newRow.insertCell(0);
                const newCell2 = newRow.insertCell(1);
                const newCell3 = newRow.insertCell(2);
                const newCell4 = newRow.insertCell(3);
                const newCell5 = newRow.insertCell(4);

                newCell1.innerHTML = `${_pad(res[i].id,4)}`;
                newCell2.innerHTML = `${res[i].name}`;
                newCell3.innerHTML = `${res[i].email}`;
                newCell4.innerHTML = `<span class="material-icons">edit</span>`;
                newCell5.innerHTML = `<span class="material-icons">clear</span>`;
            
                if (i%2===0){
                    newCell1.classList.add('row-even');
                    newCell2.classList.add('row-even');
                    newCell3.classList.add('row-even');
                    newCell4.classList.add('row-even');
                    newCell5.classList.add('row-even');
                } else {
                    newCell1.classList.add('row-odd');
                    newCell2.classList.add('row-odd');
                    newCell3.classList.add('row-odd');
                    newCell4.classList.add('row-odd');
                    newCell5.classList.add('row-odd');
                };

                newCell4.addEventListener('click', function() {loadUser(res[i].id)});
                newCell5.addEventListener('click', function() {deleteUser(res[i].id)});
            };
        };
    }    
    catch(err){
        const msg = document.querySelector('#msg-p');
        msg.innerHTML=`[ERRO]: ${err}`;
    };
}


function _pad(num, size) { 
    let s = "000000000" + num; 
    return s.substring(s.length-size); 
} 