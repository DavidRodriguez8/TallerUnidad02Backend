import Sequelize  from "sequelize";
import {db} from "../database/conexion.js";

const solicitudes_adopcion = db.define("solicitudes_adopcions",{
    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_solicitante:{
        type: Sequelize.STRING,
        allowNull: false
    },
    id_mascota:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'mascotas',
            key: 'id'
        }
    },
    estado:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Pendiente'
    }
});

export {solicitudes_adopcion}