// velocidad
export const calcularVelocidad=(req,res)=>{
    const {distancia,tiempo}=req.body;
    const velocidad=distancia/tiempo;

    res.json({
        distancia,
        tiempo,
        velocidad,
        mensaje:`para recorrer una distancia ${distancia} mt en un tiempo de ${tiempo} seg se necesita una velocidad de ${velocidad} mt/s`
    })//retorno resultado formato json
};

//distancia
export const calcularDistancia=(req,res)=>{
    const {velocidad,tiempo}=req.body;
    const distancia=velocidad*tiempo;

    res.json({
        velocidad,
        tiempo,
        distancia,
        mensaje:`para recorrer una velocidad de ${velocidad} mt/s en un tiempo de ${tiempo} seg, se necesita una distancia de ${distancia} mt`
    })//retorno resultado formato json
};

//tiempo
export const calcularTiempo=(req,res)=>{
    const {distancia,velocidad}=req.body;
    const tiempo=distancia/velocidad;

    res.json({
        distancia,
        velocidad,
        tiempo,
        mensaje:`para recorrer una distancia ${distancia} mt a una velocidad de ${velocidad} mt/s se necesita un tiempo de ${tiempo} seg`
    })//retorno resultado formato json
};

//fuerza
export const calcularFuerza=(req,res)=>{
    const {masa,aceleracion}=req.body;
    const fuerza=masa*aceleracion;

    res.json({
        masa,
        aceleracion,
        fuerza,
        mensaje:`al tener una masa de ${masa} kg con una aceleracion de ${aceleracion} m/s² se necesita una fuerza de ${fuerza} N`
    })//retorno resultado formato json
};

//peso
export const calcularPeso=(req,res)=>{
    const {masa,gravedad}=req.body;
    const peso=masa*gravedad;

    res.json({
        masa,
        gravedad,
        peso,
        mensaje:`al tener una masa de ${masa} kg con la gravedad de ${gravedad} m/s² se necesita un peso de ${peso} N`
    })//retorno resultado formato json
};

//energia
export const calcularEnergia=(req,res)=>{
    const {masa,velocidad}=req.body;
    const energia=masa*(velocidad*velocidad)/2;

    res.json({
        masa,
        velocidad,
        energia,
        mensaje:`al tener una masa de ${masa} kg con una velocidad de ${velocidad} mt/s se necesita una energia de ${energia} J`
    })//retorno resultado formato json
};