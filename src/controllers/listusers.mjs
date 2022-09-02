import { list }  from "../services/index.mjs";

export default function listUser (req, res)
{
    res.status(200).json(list());
}
