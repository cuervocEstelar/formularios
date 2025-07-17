// App.jsx
import { useEffect, useState } from "react";
import ImageContent from "./components/Content/ImageContent";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

const App = () => {
  // Estado que determina si estamos en vista móvil
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Función que actualiza el estado 'isMobile' cuando cambia el tamaño de la ventana
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Se agrega un escuchador al evento de cambio de tamaño (resize)
    window.addEventListener("resize", handleResize);

    // Esta función se ejecuta cuando el componente se desmonta
    // Limpia el evento para evitar fugas de memoria
    return () => window.removeEventListener("resize", handleResize);
  }, []); // El array vacío asegura que esto solo se ejecuta una vez al montar

  return (
    <div className="container">
      {/* Si isMobile es true, se renderiza la vista móvil, si no, la de escritorio */}
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
};

export default App;
