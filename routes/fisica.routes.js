import express from "express"; //importamos express desde la libreria
import { calcularVelocidad, calcularDistancia, calcularTiempo, calcularFuerza, calcularPeso, calcularEnergia } from "../controllers/fisica.controllers.js"; //importamos la funcion calcularVelocidad desde el archivo fisica.controllers.js
import { validarVelocidad, validarDistancia, validarTiempo, validarFuerza, validarPeso, validarEnergia } from "../middlewares/fisica.middleswares.js"; //importamos la funcion validarVelocidad desde el archivo fisica.middleswares.js


const router=express.Router(); //asignamos la funcion Router de express a la constante router() de la libreria express

router.post("/velocidad", validarVelocidad, calcularVelocidad); //definimos una ruta con datos de entrada y las funciones a eejcutar
router.post("/distancia", validarDistancia, calcularDistancia);
router.post("/tiempo", validarTiempo, calcularTiempo);
router.post("/fuerza", validarFuerza, calcularFuerza);
router.post("/peso", validarPeso, calcularPeso);
router.post("/energia", validarEnergia, calcularEnergia);

export default router;