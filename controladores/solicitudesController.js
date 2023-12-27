import {solicitudes_adopcion} from "../modelos/solicitudesModelo.js";

//Crear un recurso 
const crearS = (req,res)=>{

    if(!req.body.nombre_solicitante){
        res.status(400).json({
            mensaje: "El nombre no puede estar vacío."
        }) ;
        return;
    }else if(!req.body.id_mascota){
        res.status(400).json({
            mensaje: "Debe relacionar la solicitud con alguna mascota existente."
        }) ;
        return;
    }
    const dataset={
        nombre_solicitante: req.body.nombre_solicitante,
        id_mascota: req.body.id_mascota,
        estado: req.body.estado
    };

    //Usar Sequelize para crear el recurso
    solicitudes_adopcion.create(dataset).then((resultado)=>{
        res.status(200).json({
            mensaje: "Registro creado correctamente"
        })
    }).catch((err)=>{
        res.status(500).json({
            mensaje: `Error al crear el registro ::: ${err}`
        })

    })


};

//Buscar recurso por ID
const buscarIdS = (req,res) =>{
    const id = req.params.id;
    if(id == null){
        res.status(203).json({
            mensaje: "El ID no puede estar vacío"
        });
        return;
    }

    solicitudes_adopcion.findByPk(id).then((resultado) => {
        res.status(200).json(resultado);
    }).catch((err) => {
        res.status(500).json({
            mensaje: `Registro no encontrado ::: ${err}`
        })
    });

};

//Buscar
const buscarS = (req,res) =>{
    solicitudes_adopcion.findAll().then((resultado) => {
        res.status(200).json(resultado);
    }).catch((err) => {
        res.status(500).json({
            mensaje: `Registro no encontrado ::: ${err}`
        })
    });

};

//Actualizar un recurso
const actualizarS = (req,res) => {
    const id = req.params.id;
    if(!req.body.nombre_solicitante && !req.body.id_mascota && !req.body.estado){
        res.status(400).json({
            mensaje: `No se encontraron datos para actualizar`
        });
        return;
    }else{
        const nombre_solicitante = req.body.nombre_solicitante;
        const id_mascota = req.body.id_mascota;
        const estado = req.body.estado;
        solicitudes_adopcion.update({nombre_solicitante,id_mascota,estado},{where:{id}})
        .then((resultado) => {
            res.status(200).json({
                mensaje: `Registro Actualizado`
            })
        }).catch((err) => {
            res.status(500).json({
                mensaje: `Error al actualizar registro ::: ${err}`
            })
        });
    }
    
};

//Eliminar un recurso
const eliminarS=(req,res)=>{
    const id= req.params.id;
    if(id == null){
        res.status(203).json({
            mensaje: `El id no puede estar vacio`
        });
        return;
    }
    solicitudes_adopcion.destroy({where:{id}})
    .then((resultado)=>{
        res.status(200).json({
            mensaje: `Registro Eliminado`
        });
    })
    .catch((err)=>{
        res.status(500).json({
            mensaje: `Error al eliminar Registro ::: ${err}`
        });
    })
    

};


export {crearS,buscarIdS,buscarS,actualizarS,eliminarS}