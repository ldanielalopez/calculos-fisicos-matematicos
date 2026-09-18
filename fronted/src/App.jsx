import { useState } from "react";
import Sidebar from "./componentes/sidebar";
import Velocidad from "./componentes/velocidad";
import Distancia from "./componentes/distancia";
import Tiempo from "./componentes/tiempo";
import Fuerza from "./componentes/fuerza";
import Peso from "./componentes/peso";
import EnergiaCinetica from "./componentes/energiacinetica";

function App() {
  // Estado para controlar qué sección se muestra actualmente
  const [seccion, setSeccion] = useState("velocidad");

  // Función que decide qué componente renderizar según el estado
  const renderizarComponente = () => {
    switch (seccion) {
      case "velocidad":
        return <Velocidad />;
      case "distancia":
        return <Distancia />;
      case "tiempo":
        return <Tiempo />;
      case "fuerza":
        return <Fuerza />;
      case "peso":
        return <Peso />;
      case "energiacinetica":
        return <EnergiaCinetica />;
      default:
        return <Velocidad />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar cambiarSeccion={setSeccion} />
      <div className="flex-1 p-8 bg-[#E4E4E5]">
        {renderizarComponente()}
      </div>
    </div>
  );
}

export default App;