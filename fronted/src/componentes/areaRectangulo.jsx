import { useState } from 'react';

function AreaRectangulo() {

    const [base, SetBase] = useState(undefined);
    const [altura, SetAltura] = useState(undefined);
    const [resultado, SetResultado] = useState(null);

    const calcularAreaRectangulo = async() => {
        const respuesta = await 
        fetch ("http://localhost:3000/matematicas/areaRectangulo", {          // indicamos la ruta que vamos a consumir
            method: "POST",             // indicamos el metodo que se usa en la ruta
            headers: { "content-TYpe": "application/json" },        // headers en formato json
            body: JSON.stringify({               //formato json que lleva los valores que requiere el req.body
                base: base,
                altura: altura
            })
        })

        const datos = await respuesta.json();       // espera por la respuesta del backend
        SetResultado(datos);            // almacena la respuesta del backend en datos
        //console.log(datos)        // imprime en consola la respuesta del backend
    }

    return (
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100 w-full max-w-xl mx-auto mt-10">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Calcular Área de Rectángulo</h2>
            <hr className="border-slate-200 my-3" />
            <div className="space-y-6">
                <div>
                    <input
                        type="number"
                        placeholder="Ingrese el valor de la base"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 transition-all duration-200"
                        onChange={(e) => SetBase(Number(e.target.value))}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Ingrese el valor de la altura"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 transition-all duration-200"
                        onChange={(e) => SetAltura(Number(e.target.value))}
                    />
                </div>
            </div>
            <button
                onClick={calcularAreaRectangulo}
                className="w-full mt-8 py-4 bg-[#0085cf] hover:bg-[#0070ab] text-white font-bold text-lg rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Calcular</button>
            {resultado !== null && (
                <div className="mt-6 p-5 bg-slate-50 border border-slate-100 rounded-lg">
                    {resultado.mensaje && (
                        <p className="text-green-600 font-medium text-center text-xl">
                            {resultado.mensaje}
                        </p>
                    )}
                    {resultado.error && (
                        <p className="text-red-500 font-medium text-center">
                            {resultado.error}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default AreaRectangulo;