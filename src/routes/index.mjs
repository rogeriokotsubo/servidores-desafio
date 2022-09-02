import {Router} from "express";
import {addUser, listUser, listUserbyId, updateUser, deleteUser} from "../controllers/index.mjs";

const route = Router();

route.post("/", addUser);
route.get("/", listUser);
route.get("/:id", listUserbyId);
route.put("/", updateUser);
route.delete("/:id", deleteUser);

export { route };