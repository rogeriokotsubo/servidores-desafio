import { listbyId } from "../services/index.mjs";

export default function listUserbyId (req, res)
{
    const id = parseInt(req.params.id);
    res.status(200).json(listbyId(id));
}
