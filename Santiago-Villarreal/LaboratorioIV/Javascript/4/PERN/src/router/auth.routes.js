import Router from "express-promise-router";
import { singin, singup, logout, profile } from "../controllers/auth.controllers.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post('/singin', singin);

router.post('/singup', singup);

router.post('/loguot', logout);

router.get('/profile', isAuth, profile);

export default router;
