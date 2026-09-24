
// area rectangulo
export const validarAreaRectangulo = (req, res, next) => {
    const { base, altura } = req.body;

    if (base === undefined || altura === undefined) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    };

    if(typeof base !== "number" || typeof altura !== "number"){
        return res.status(400).json({
            error: "la base y la altura deben ser números"
        });
    };

    if (base <= 0 || altura <= 0) {
        return res.status(400).json({
            error: "la base y la altura no pueden ser negativos"
        });
    };
    next();
}

// area triangulo
export const validarAreaTriangulo = (req, res, next) => {
    const { base, altura } = req.body;
    if (base === undefined || altura === undefined) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    };

    if(typeof base !== "number" || typeof altura !== "number"){
        return res.status(400).json({
            error: "la base y la altura deben ser números"
        });
    };

    if (base <= 0 || altura <= 0) {
        return res.status(400).json({
            error: "la base y la altura no pueden ser negativos"
        });
    };
    next();
}

// area circulo
export const validarAreaCirculo = (req, res, next) => {
    const { radio } = req.body;

    if (radio === undefined) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    };

    if(typeof radio !== "number"){
        return res.status(400).json({
            error: "el radio debe ser número"
        });
    };

    if (radio <= 0) {
        return res.status(400).json({
            error: "el radio no puede ser negativo"
        });
    };
    next();
}

// hipotenusa
export const validarHipotenusa = (req, res, next) => {
    const { catetoA, catetoB } = req.body;

    if (catetoA === undefined || catetoB === undefined) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    };

    if(typeof catetoA !== "number" || typeof catetoB !== "number"){
        return res.status(400).json({
            error: "el cateto A y el cateto B deben ser números"
        });
    };

    if (catetoA <= 0 || catetoB <= 0) {
        return res.status(400).json({
            error: "el cateto A y el cateto B no pueden ser negativos"
        });
    };
    next();
}

// angulos
export const validarAngulo = (req, res, next) => {
    const { catetoA, catetoB } = req.body;

    if (catetoA === undefined || catetoB === undefined) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    };

    if (typeof catetoA !== "number" || typeof catetoB !== "number") {
        return res.status(400).json({
            error: "el cateto A y el cateto B deben ser números"
        });
    };

    if (catetoA <= 0 || catetoB <= 0) {
        return res.status(400).json({
            error: "el cateto A y el cateto B no pueden ser negativos"
        });
    };
    next();
}
