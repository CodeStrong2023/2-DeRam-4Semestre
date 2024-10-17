import { pool } from "../db.js";
import bcrypt from "bcrypt";
import {createAccessToken} from "../libs/jwt.js"
import md5 from "md5";

export const singin = async(req, res) => {
    const {email, password} = req.body;
    const resultado = await pool.query("SELECT * FROM usuarios WERE email = $1", [email]);
    if(resultado.rowCount === 0){
        return res.status(400).json({message: "El correo no está registrado"});
    }
    const validPass = await bcrypt.compare(password, resultado.rows[0].password);
    if(!validPass){
        return res.status(400).json({message: "Contraseña incorrecta"});
    }
}

export const singup =  async(req, res, next) => {
    const {name, email,password} = req.body;
    try {
        const hashedPass = await bcrypt.hash(password,10);
        const gravatar = "https//gravatar.com/avatar/$(md5(email))" + md5(email);
        const resultado = await pool.query("INSERT INTO usuarios (name, email, password, gravatar) VALUES ($1, $2, $3, $4) Returning *", [name, email, hashedPass, gravatar]);
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
        next(error);
    }
};

export const logout = (req, res) => {
    res.clearCookie("token");
    return res.json({message: "Sesion cerrada"});
}

export const profile = (req,res) => {
    const resultado = pool.query("SELECT * FROM usuarios WERE id = $1", [req.usuarioId]);
    return res.json(resultado.rows[0]);
}