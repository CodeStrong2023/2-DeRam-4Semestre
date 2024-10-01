import { pool } from "../db.js";

export const listarTareas = (req, res) => res.send('obteniendo tareas');

export const listarTareaUnica = (req, res) => res.send('obteniendo tarea unica');

export const crearTarea = async(req, res, next) => {
    const {titulo, descripcion} = req.body;
    
    try {
        const resultado = await pool.query('INSERT INTO tareas (titulo, descripcion) VALUES ($1, $2) RETURNING *', [titulo, descripcion]);
        res.json(resultado.rows[0]);
        console.log(resultado.rows[0]);
    } catch (error) {
        if(error.code === '23505'){
            return res.send("Ya existe una tarea con ese titulo");
        }
        console.log(error);
        next(error);
    } 
}

export const actualizarTarea = (req, res) => res.send('actualizando tarea');

export const eliminarTarea = (req,res) => res.send('eliminando tarea única');