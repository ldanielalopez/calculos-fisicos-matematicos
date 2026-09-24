// area de Rectangulo
export const calcularAreaRectangulo=(req,res)=>{
    const {base,altura}=req.body;
    const areaRectangulo=base*altura;

    res.json({
        base,
        altura,
        areaRectangulo,
        mensaje:`Al tener una base de ${base} cm y una altura de ${altura} cm, el área del rectángulo es ${areaRectangulo} cm²`
    })//retorno resultado formato json
};

//area de triangulo
export const calcularAreaTriangulo=(req,res)=>{
    const {base,altura}=req.body;
    const areaTriangulo=((base*altura)/2);

    res.json({
        base,
        altura,
        areaTriangulo,
        mensaje:`Al tener una base de ${base} cm y una altura de ${altura} cm, el área del triángulo es ${areaTriangulo} cm²`
    })//retorno resultado formato json
};

// área de círculo
export const calcularAreaCirculo = (req, res) => {
    const { radio } = req.body;
    const pi = 3.1416;
    const areaCirculo = pi * (radio * radio);

    res.json({
        radio,
        areaCirculo,
        mensaje: `Al tener un radio de ${radio} cm, el área del círculo es ${areaCirculo.toFixed(2)} cm²`
    });
};

//hipotenusa
export const calcularHipotenusa = (req, res) => {
    const { catetoA,catetoB } = req.body;
    const hipotenusa = ((catetoA * catetoA) + (catetoB * catetoB)) ** 0.5;

    res.json({
        catetoA,
        catetoB,
        hipotenusa,
        mensaje: `Al tener un cateto A de ${catetoA} cm y un cateto B de ${catetoB} cm, la hipotenusa es ${hipotenusa.toFixed(2)} cm`
    });
};

//angulo
export const calcularAngulo = (req, res ) => {
    const { catetoA, catetoB } = req.body;
    const anguloRadianes = Math.atan(catetoA / catetoB);
    const anguloGrados = Number((anguloRadianes * (180 / Math.PI)));

    res.json({
        catetoA,
        catetoB,
        anguloGrados,
        mensaje: `Al tener un cateto A de ${catetoA} cm y un cateto B de ${catetoB} cm, el ángulo es de ${anguloGrados.toFixed(2)}°`
    });
};