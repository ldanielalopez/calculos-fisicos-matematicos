function Sidebar({ cambiarSeccion, seccionActiva }) {
    const itemsFisicos = [
        { id: "velocidad", label: "Velocidad" },
        { id: "distancia", label: "Distancia" },
        { id: "tiempo", label: "Tiempo" },
        { id: "fuerza", label: "Fuerza" },
        { id: "peso", label: "Peso" },
        { id: "energiacinetica", label: "Energía cinética" },
    ];

    const itemsMatematicos = [
        { id: "areaRectangulo", label: "Área de rectángulo" },
        { id: "areaTriangulo", label: "Área de triángulo" },
        { id: "areaCirculo", label: "Área de círculo" },
        { id: "hipotenusa", label: "Hipotenusa" },
        { id: "angulo", label: "Ángulo" }
    ];
return (
        <div className="w-64 min-h-screen bg-[#004A6F] text-white flex flex-col p-6 shadow-xl overflow-y-auto">
            {/* Sección Física */}
            <h1 className="text-xl font-bold mb-4 tracking-wide text-cyan-200">Cálculos Físicos</h1>
            <nav className="flex flex-col gap-2 mb-6">
                {itemsFisicos.map((item) => {
                    const isActive = seccionActiva === item.id;
                    return (
                        <button 
                            key={item.id}
                            onClick={() => cambiarSeccion(item.id)} 
                            className={`text-left py-2 px-3 rounded-lg transition-all duration-200 ${
                                isActive 
                                    ? "bg-[#003853] font-semibold shadow-inner border-l-4 border-cyan-400 pl-2.5" 
                                    : "hover:bg-[#003853]/60 text-slate-200"
                            }`}
                        >
                            {item.label}
                        </button>
                    );
                })}
            </nav>

            <hr className="border-cyan-700/50 my-2" />

            {/* Sección Matemática debajo */}
            <h2 className="text-xl font-bold my-4 tracking-wide text-cyan-200">Cálculos Matemáticos</h2>
            <nav className="flex flex-col gap-2">
                {itemsMatematicos.map((item) => {
                    const isActive = seccionActiva === item.id;
                    return (
                        <button 
                            key={item.id}
                            onClick={() => cambiarSeccion(item.id)} 
                            className={`text-left py-2 px-3 rounded-lg transition-all duration-200 ${
                                isActive 
                                    ? "bg-[#003853] font-semibold shadow-inner border-l-4 border-cyan-400 pl-2.5" 
                                    : "hover:bg-[#003853]/60 text-slate-200"
                            }`}
                        >
                            {item.label}
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}

export default Sidebar;