import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8000;

import express from "express";
import { route } from "./routes/index.mjs";
import path from "path";

const app = express();

const dirViews = path.resolve( "views" );

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/users", route);
app.use(express.static(dirViews));

app.listen(PORT, () => {console.log(`Servidor criado: http://192.168.15.34:${PORT}`)})