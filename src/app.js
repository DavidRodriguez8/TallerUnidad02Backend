import express from "express";
import { routerMascotas,routerSolicitud } from "../rutas/mascotasRouter.js";
import { routerPersonas } from "../rutas/personasRouter.js";
import {db} from "../database/conexion.js";
import cors from "cors";

//Crear Instancia de Express
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
//Verificar Conexion a Base de Datos
db.authenticate().then(()=>{
    console.log(`Base de Datos conectada de manera exitosa`);
}).catch(err=>{
    console.log(`Error al conectarse a la Base de Datos ::: ${err}`);
})

//Definir Rutas
app.get("/",(req,res)=>{
    res.send("Hola Backend Mysql");
});

//Rutas
app.use("/mascotas",routerMascotas);
app.use("/solicitudes",routerSolicitud);
app.use("/autenticacion",routerPersonas);

//Puerto de Servidor 
const PORT=8000;


//Verificar que pueda sincronizar con la base de datos
db.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Servidor Inicializado en puerto ${PORT}`);
    });
}).catch(err=>{
    console.log(`Error al sincronizar Base de Datos ${err}`);
});