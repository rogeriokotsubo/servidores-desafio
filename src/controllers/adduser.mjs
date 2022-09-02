import { add } from '../services/index.mjs';

export default function addUser (req, res) 
{
    const data = req.body;
    if(!data) 
    {
        res.status(406).json({message:"Sem informações!"});
        return;     
    } 
    try {
        add(data);
        res.status(201).json({id: data.id,
                                name: data.name,
                                email: data.email
                             });
    }    
    catch(err){
        res.status(406).json({message: err.message});
    }    
}
