import { useState } from "react";
import Sidebar from "./componentes/sidebar";
import Velocidad from "./componentes/velocidad";
import Distancia from "./componentes/distancia";
import Tiempo from "./componentes/tiempo";
import Fuerza from "./componentes/fuerza";
import Peso from "./componentes/peso";
import EnergiaCinetica from "./componentes/energiacinetica";
import AreaRectangulo from "./componentes/areaRectangulo";
import AreaTriangulo from "./componentes/areaTriangulo";
import AreaCirculo from "./componentes/areaCirculo";
import Hipotenusa from "./componentes/hipotenusa";
import Angulo from "./componentes/angulo";

function App() {
  const [seccion, setSeccion] = useState("velocidad");
  const renderizarComponente = () => {
    switch (seccion) {
      // Cálculos físicos
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
      
      case "areaRectangulo":
        return <AreaRectangulo />;
      case "areaTriangulo":
        return <AreaTriangulo />;
      case "areaCirculo":
        return <AreaCirculo />;
      case "hipotenusa":
        return <Hipotenusa />;
      case "angulo":
        return <Angulo />;

      default:
        return <Velocidad />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar cambiarSeccion={setSeccion} seccionActiva={seccion} />
      
      <div className="flex-1 p-8 bg-[#E4E4E5] overflow-y-auto">
        {renderizarComponente()}
      </div>
    </div>
  );
}

export default App;