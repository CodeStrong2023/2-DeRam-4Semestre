import { pool } from "../db.js";

export const singin = (req, res) => res.send('ingresando');

export const singup =  async(req, res) => {
    const {name, email,password} = req.body;
    res.send("Registrando");
    const resultado = await pool.query("INSERT INTO usuarios (name, email, password) VALUES ( $1, $2, $3)", [name, email, password]);
    console.log(resultado);
    return res.json(resultado.rows[0]);
};

export const logout = (req, res) => res.send('cerrando sesion');

export const profile = (req,res) => res.send('perfil del usuario');