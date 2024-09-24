import { Router } from "express";
import { listarTareas, actualizarTarea, crearTarea, eliminarTarea, listarTareaUnica } from "../controllers/tareas.controllers.js";

const router = Router();

router.get('/tareas/', listarTareas);

router.get('/tareas/:id', listarTareaUnica);

router.post('/tareas', crearTarea);

router.put('/tareas/:id', actualizarTarea);

router.delete('/tareas/:id' , eliminarTarea);

export default router;