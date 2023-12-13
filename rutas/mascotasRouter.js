import express from "express";
import {crear,buscarId,buscar,actualizar,eliminar} from "../controladores/mascotasController.js";
import {crearS,buscarIdS,buscarS,actualizarS,eliminarS} from "../controladores/solicitudesController.js";
const routerMascotas = express.Router();
const routerSolicitud = express.Router();


routerMascotas.get("/",(req,res)=>{
    res.send("Bienvenido a Huellas de Esperanza");
});

routerMascotas.post("/crear",(req,res)=>{
    crear(req,res);
});

routerMascotas.get("/buscar/:id",(req,res)=>{
    buscarId(req,res);
});

routerMascotas.get("/buscar/",(req,res)=>{
    buscar(req,res);
});

routerMascotas.put("/actualizar/:id",(req,res)=>{
    actualizar(req,res);
});

routerMascotas.delete("/eliminar/:id",(req,res)=>{
    eliminar(req,res);
});

//RUTAS DE SOLICITUD ADOPCION

routerSolicitud.post("/crear",(req,res)=>{
    crearS(req,res);
});

routerSolicitud.get("/buscar/:id",(req,res)=>{
    buscarIdS(req,res);
});

routerSolicitud.get("/buscar/",(req,res)=>{
    buscarS(req,res);
});

routerSolicitud.put("/actualizar/:id",(req,res)=>{
    actualizarS(req,res);
});

routerSolicitud.delete("/eliminar/:id",(req,res)=>{
    eliminarS(req,res);
});

export {routerMascotas,routerSolicitud}