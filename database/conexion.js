import Sequelize  from "sequelize";

//const db = new Sequelize("<nombre_bd>","<usuario>","<contraseña>")
const db = new Sequelize("adopcion_mascotas","root","",{
    dialect: "mysql",
    host: "localhost"
});

export {db}