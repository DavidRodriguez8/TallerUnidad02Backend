import {mascotas} from "../modelos/mascotasModelo.js";

//Crear un recurso 
const crear = (req,res)=>{

    if(!req.body.nombre){
        res.status(400).json({
            mensaje: "El nombre no puede estar vacío."
        }) ;
        return;
    }else if(!req.body.especie){
        res.status(400).json({
            mensaje: "La especie no puede estar vacía."
        }) ;
        return;
    }else if(!req.body.edad){
        res.status(400).json({
            mensaje: "La edad no puede estar vacía."
        }) ;
        return;
    }
    const dataset={
        nombre: req.body.nombre,
        especie: req.body.especie,
        edad: req.body.edad,
        disponible: req.body.disponible
    };

    //Usar Sequelize para crear el recurso
    mascotas.create(dataset).then((resultado)=>{
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
const buscarId = (req,res) =>{
    const id = req.params.id;
    if(id == null){
        res.status(203).json({
            mensaje: "El ID no puede estar vacío"
        });
        return;
    }

    mascotas.findByPk(id).then((resultado) => {
        res.status(200).json(resultado);
    }).catch((err) => {
        res.status(500).json({
            mensaje: `Registro no encontrado ::: ${err}`
        })
    });

};

//Buscar
const buscar = (req,res) =>{
    mascotas.findByPk().then((resultado) => {
        res.status(200).json(resultado);
    }).catch((err) => {
        res.status(500).json({
            mensaje: `Registro no encontrado ::: ${err}`
        })
    });

};

//Actualizar un recurso
const actualizar = (req,res) => {
    const id = req.params.id;
    if(!req.body.nombre && !req.body.especie && !req.body.edad && !req.body.disponible){
        res.status(400).json({
            mensaje: `No se encontraron datos para actualizar`
        });
        return;
    }else{
        const nombre = req.body.nombre;
        const especie = req.body.especie;
        const edad = req.body.edad;
        const disponible = req.body.disponible;
        mascotas.update({nombre,especie,edad,disponible},{where:{id}})
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
const eliminar=(req,res)=>{
    const id= req.params.id;
    if(id == null){
        res.status(203).json({
            mensaje: `El id no puede estar vacio`
        });
        return;
    }
    mascotas.destroy({where:{id}})
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


export {crear,buscarId,buscar,actualizar,eliminar}