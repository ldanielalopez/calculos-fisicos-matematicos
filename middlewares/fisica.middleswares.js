
// velocidad
export const validarVelocidad = (req, res, next) => {
    const { distancia, tiempo } = req.body;

        if (tiempo === undefined || distancia === undefined) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    };

        if(typeof tiempo !== "number" || typeof distancia !== "number"){
        return res.status(400).json({
            error: "El tiempo y la distancia deben ser números"
        });
    };

        if (tiempo <= 0) {
        return res.status(400).json({
            error: "El valor de tiempo no puede ser negativo"
        });
    };
    next();
}

//distancia
export const validarDistancia = (req, res, next) => {
    const { velocidad, tiempo} = req.body;

    if (velocidad === undefined || tiempo === undefined) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    };
    
    if (typeof velocidad !== "number" || typeof tiempo !== "number"){
        return res.status(400).json({
            error: "El tiempo y la velocidad deben ser números"
        });
    }
    
    if (velocidad <= 0 || tiempo <= 0){
        return res.status(400).json({
            error: "El tiempo y la velocidad no pueden ser negativos"
        });
    }
    next();
};

//tiempo
export const validarTiempo = (req, res, next) => {
    const { distancia, velocidad} = req.body;

    if (distancia === undefined || velocidad === undefined) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    };

    if (typeof distancia !== "number" || typeof velocidad !== "number"){
        return res.status(400).json({
            error: "La distancia y la velocidad deben ser números"
        });
    }

    if (distancia <= 0 || velocidad <= 0) {
        return res.status(400).json({
            error: "El valor de velocidad y la distancia deben ser mayor a cero"
        });
    };
    next();
};


//fuerza
export const validarFuerza = (req, res, next) => {
    const { masa, aceleracion} = req.body;

    if (masa === undefined || aceleracion === undefined) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    };

    if (typeof masa !== "number" || typeof aceleracion !== "number"){
        return res.status(400).json({
            error: "La masa y la aceleración deben ser números"
        });
    }

    if (masa < 0 || aceleracion < 0){
        return res.status(400).json({
            error: "La masa y la aceleración no pueden ser negativas"
        });
    }
    next();
};

//peso
export const validarPeso = (req, res, next) => {
    const { masa, gravedad} = req.body;

    if (masa === undefined || gravedad === undefined) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    };

    if (typeof masa !== "number" || typeof gravedad !== "number"){
        return res.status(400).json({
            error: "La masa debe ser número"
        });
    }    

    if (masa < 0 || gravedad < 0){
        return res.status(400).json({
            error: "La masa no puede ser negativa"
        });
    }
    next();
};

//energia cinetica
export const validarEnergia = (req, res, next) => {
    const {masa, velocidad} = req.body;

    if (masa === undefined || velocidad === undefined) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    };

    if (typeof masa !== "number" || typeof velocidad !== "number") {
        return res.status(400).json({
            error: "La masa y la velocidad deben ser numeros"
        });
    }

    if (masa < 0 || velocidad < 0){
        return res.status(400).json({
            error: "La masa y la velocidad no pueden ser negativas"
        });
    }
    next();
};