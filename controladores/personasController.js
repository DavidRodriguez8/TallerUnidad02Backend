import { personas } from "../modelos/personasModelo.js";
import bcrypt from "bcrypt";

const registrarPersona = async (req, res) => {
    try {
        const { usuario, nombre, cargo, correo, contraseña } = req.body;

        // Verificar si la persona ya existe
        const personaExistente = await personas.findOne({ where: { correo } });
        if (personaExistente) {
            return res.status(400).json({ tipo: "error", mensaje: "La persona ya existe." });
        }

        // Crear nueva persona
        const nuevaPersona = await personas.create({ usuario, nombre, cargo, correo, contraseña });

        res.status(201).json({ tipo: "success", mensaje: "Persona registrada con éxito.", persona: nuevaPersona });
    } catch (error) {
        console.error(error);
        res.status(500).json({ tipo: "error", mensaje: "Error en el servidor." });
    }
};

const autenticarPersona = async (req, res) => {
    try {
        const { correo, contraseña } = req.body;

        // Verificar si la persona existe
        const persona = await personas.findOne({ where: { correo } });
        if (!persona) {
            return res.status(401).json({ tipo: "error", mensaje: "Credenciales inválidas." });
        }

        // Verificar la contraseña
        const contraseñaValida = await bcrypt.compare(contraseña, persona.contraseña);
        if (!contraseñaValida) {
            return res.status(401).json({ tipo: "error", mensaje: "Credenciales inválidas." });
        }

        res.status(200).json({ tipo: "success", mensaje: "Autenticación exitosa." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ tipo: "error", mensaje: "Error en el servidor." });
    }
};

export { registrarPersona, autenticarPersona };