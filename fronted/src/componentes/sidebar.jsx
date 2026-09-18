function Sidebar({ cambiarSeccion, seccionActiva }) {
    const menuItems = [
        { id: "velocidad", label: "Velocidad" },
        { id: "distancia", label: "Distancia" },
        { id: "tiempo", label: "Tiempo" },
        { id: "fuerza", label: "Fuerza" },
        { id: "peso", label: "Peso" },
        { id: "energiacinetica", label: "Energía cinética" },
    ];
    return (
        <div className="w-64 h-screen bg-[#004A6F] text-white flex flex-col p-6 shadow-xl">
            <h1 className="text-2xl font-bold mb-8 tracking-wide">Cálculos Físicos</h1>
            
            <nav className="flex flex-col gap-2">
                {menuItems.map((item) => {
                    const isActive = seccionActiva === item.id;
                    return (
                        <button 
                            key={item.id}
                            onClick={() => cambiarSeccion(item.id)} 
                            className={`text-left py-2.5 px-3 rounded-lg transition-all duration-200 ${
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