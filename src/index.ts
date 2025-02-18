import express from "express" 
import dotenv from 'dotenv'
import { usuariosRoutes } from "../routes/index.ts";

dotenv.config({path: "/home/taller4O/Usuarios/src/.env"});

const app = express();
const port = process.env.PORT;

app.get("/",(req,res) => {
    res.send("Hola");
});

app.use('/usuarios', usuariosRoutes);

app.listen(port, () => {
    console.log(`Escuhando Puerto: ${port}`);
});