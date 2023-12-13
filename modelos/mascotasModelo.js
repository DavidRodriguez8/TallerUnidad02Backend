import Sequelize  from "sequelize";
import {db} from "../database/conexion.js";

const mascotas = db.define("mascotas",{
    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull: false
    },
    especie:{
        type: Sequelize.STRING,
        allowNull: false
    },
    edad:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    disponible:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});

export {mascotas}