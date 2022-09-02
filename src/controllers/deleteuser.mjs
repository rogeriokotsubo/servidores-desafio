import { del } from "../services/index.mjs";

export default function deleteUser (req, res)
{
    const id = parseInt(req.params.id);
    try{
        del(id);
        res.status(200).json({message:"Usuário deletado com sucesso!"});
    }
    catch(err){
        res.status(406).json({message: err.message});
    }
}
