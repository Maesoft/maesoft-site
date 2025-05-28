import "./App.css";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import BotonWhatsapp from "./components/BotonWhatsapp";


function App() {
  return (
    <>
      <NavBar />
      <div id="home" className="scroll-mt-20 md:scroll-mt-20">
        <Inicio />
      </div>
      <div id="services" className="scroll-mt-20 md:scroll-mt-15">
        <Servicios />
      </div>
      <div id="contact" className="scroll-mt-20 md:scroll-mt-10">
        <Contacto />
      </div>
      <div id="about" className="scroll-mt-20 md:scroll-mt-10">
        {/* Aquí puedes agregar el componente de Contacto */}
      </div>
      <BotonWhatsapp numero={5492244445033} />
    </>
  );
}

export default App;
