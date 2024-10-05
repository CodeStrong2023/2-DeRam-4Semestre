import Router from "express-promise-router";
import { singin, singup, logout, profile } from "../controllers/auth.controllers.js";

const router = Router();

router.post('/singin', singin);

router.post('/singup', singup);

router.post('/loguot', logout);

router.get('/profile' , profile);

export default router;
