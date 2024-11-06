import Router from "express-promise-router";
import { singin, singup, logout, profile } from "../controllers/auth.controllers.js";
import { isAuth } from "../middlewares/auth.middleware.js";
import {validateSchema} from "../middlewares/validate.middleware.js"
import { singupSchema, singinSchema} from "../schemas/auth.schema.js";

const router = Router();

router.post('/singin', validateSchema(singinSchema), singin);

router.post('/singup', validateSchema(singupSchema), singup);

router.post('/loguot', logout);

router.get('/profile', isAuth, profile);

export default router;
