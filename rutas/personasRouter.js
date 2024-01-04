import express from "express";
import { registrarPersona,autenticarPersona } from "../controladores/personasController.js";

const routerPersonas = express.Router();

// Rutas de autenticación
routerPersonas.post("/registro", (req,res)=>{
    registrarPersona(req,res);
});
routerPersonas.post("/autenticar", (req,res)=>{
    autenticarPersona(req,res);
});

export { routerPersonas };