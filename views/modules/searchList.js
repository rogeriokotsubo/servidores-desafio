export default function getList(_id) {
    return new Promise((resolve, reject) => {
        let url = '/users';
        if (_id>0){
            url = url+'/'+_id;
        }    
        fetch(url, { method: 'GET' })               
        .then(response => {
            if (response.status===200) {
                return response.json();  
            } else {
                return Promise.reject(`${response.status} - ${response.statusText}`);
            }
        })
        .then(function(data) {
            const userList = [];
            for (let i=0; i<data.length; i++) {
                const user = {
                    id: data[i].id,
                    name: data[i].name,
                    email: data[i].email
                };
                userList.push(user);
            }
            resolve(userList);     
        })
        .catch(err => {
            reject(err);
        });
    });   
}