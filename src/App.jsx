import "./App.css";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";

function App() {

  return (
    <>
      <NavBar />
      <div id="home" className="scroll-mt-20 md:scroll-mt-20">
        <Inicio />
      </div>
      <div id="services" className="scroll-mt-20 md:scroll-mt-10">
        <Servicios />
      </div>
      <div id="contact" className="scroll-mt-20 md:scroll-mt-10">
        <Contacto />
      </div>
      <div id="about" className="scroll-mt-20 md:scroll-mt-10">
        {/* Aquí puedes agregar el componente de Contacto */} 
      </div>
    </>
  );
}

export default App;
