import express from "express"; //importamos express desde la libreria
import fisicaRoutes from "./routes/fisica.routes.js"; //importamos las rutas de fisica desde la carpeta routes
import cors from "cors"; //importamos cors desde la libreria

const app=express(); //asignamos la funcion express a la constante app
const port=3000; //definimos le puerto por donde se ejecutara la app

app.use(express.json()); //indicamos que cruzaremos formato json en express
app.use(cors()); //indicamos que se usara cors para permitir el acceso a la app desde cualquier origen

app.use("/fisica",fisicaRoutes); //indicamos que todas las rutas que empiecen con /fisica se redirijan a fisicaRoutes

app.listen(port,()=>{ //le decimos  a la app por que puerto ser escuchado y enviamos un mensaje por consola
    console.log(`La aplicacion está corriendo en el puerto ${port}`)
});