// area de Rectangulo
export const calcularAreaRectangulo=(req,res)=>{
    const {base,altura}=req.body;
    const areaRectangulo=base*altura;

    res.json({
        base,
        altura,
        areaRectangulo,
        mensaje:`Al tener una base de ${base} mt y una altura de ${altura} mt, el área del rectángulo es ${areaRectangulo} mt²`
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
        mensaje:`Al tener una base de ${base} mt y una altura de ${altura} mt, el área del triángulo es ${areaTriangulo} mt²`
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
        mensaje: `Al tener un radio de ${radio} mt, el área del círculo es ${areaCirculo} mt²`
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
        mensaje: `Al tener un cateto A de ${catetoA} mt y un cateto B de ${catetoB}, la hipotenusa es ${hipotenusa} mt`
    });
};