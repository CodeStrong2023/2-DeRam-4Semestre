import { pool } from "../db.js";
import bcrypt from "bcrypt";
import {createAccessToken} from "../libs/jwt.js"

export const singin = (req, res) => res.send('ingresando');

export const singup =  async(req, res) => {
    const {name, email,password} = req.body;
    try {
        const hashedPass = await bcrypt.hash(password,10);
        const resultado = await pool.query("INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3) Returning *", [name, email, hashedPass]);
        const token = await createAccessToken({id: resultado.rows[0].id});
        console.log(resultado);
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "none",
            maxAge: 60 * 60 * 24 * 1000,
        })
        return res.json(resultado.rows[0]);
    } catch (error) {
        if(error.code === "23505"){
            return res.status(400).json({message: "El correo ya está registrado"});
        }
    }
};

export const logout = (req, res) => res.send('cerrando sesion');

export const profile = (req,res) => res.send('perfil del usuario');