import Sequelize  from "sequelize";
import {db} from "../database/conexion.js";
import bcrypt from "bcrypt";

const personas = db.define("personas",{
    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    usuario:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cargo:{
        type: Sequelize.STRING,
        allowNull:false
    },
    correo:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    contraseña:{
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    hooks: {
        beforeCreate: async (persona) => {
            const hashedContraseña = await bcrypt.hash(persona.contraseña, 10);
            persona.contraseña = hashedContraseña;
        }
    },
    timestamps: false,
    createAt: false,
    updatedAt: false
});

export {personas}