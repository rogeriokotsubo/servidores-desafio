import { update }  from "../services/index.mjs";

export default function updateUser (req, res)
{
    const data = req.body;
    if(!data) 
    {
        res.status(406).json({message: "Sem informações!"});
        return;
    } 
    try{
        update(data);
        res.status(200).json({id: data.id,
                                name: data.name,
                                email: data.email
                            });    
    }    
    catch(err){
        res.status(406).json({message: err.message});
    }
}
