import express from "express"; //importamos express desde la libreria
import { calcularAreaRectangulo, calcularAreaTriangulo, calcularAreaCirculo, calcularHipotenusa, calcularAngulo } from "../controllers/matematicas.controllers.js";
import { validarAreaRectangulo, validarAreaTriangulo, validarAreaCirculo, validarHipotenusa, validarAngulo } from "../middlewares/matematicas.middleswares.js";

const router=express.Router(); //asignamos la funcion Router de express a la constante router() de la libreria express

router.post("/areaRectangulo", validarAreaRectangulo, calcularAreaRectangulo); //definimos una ruta con datos de entrada y las funciones a ejecutar
router.post("/areaTriangulo", validarAreaTriangulo, calcularAreaTriangulo);
router.post("/areaCirculo", validarAreaCirculo, calcularAreaCirculo);
router.post("/hipotenusa", validarHipotenusa, calcularHipotenusa);
router.post("/angulo", validarAngulo, calcularAngulo);

export default router;