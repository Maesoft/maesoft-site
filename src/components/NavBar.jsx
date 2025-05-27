import { useState } from "react";
import logo from "../assets/logo.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Servicios" },
    { href: "#services", label: "Contacto" },
    { href: "#contact", label: "Nosotros" },
    { href: "#blog", label: "Proyectos" },
  ];

  return (
    <nav className="bg-gray-900 font-mono font-light shadow-lg p-4 sticky top-0 z-50 border-b-2 border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-[jaro] font-light text-3xl md:text-5xl flex flex-col items-center cursor-pointer select-none transition-transform duration-300 hover:scale-110">
          <img
            src={logo}
            alt="Logo"
            className="absolute blur h-5 md:h-20 mb-0 transition-transform duration-300 hover:scale-110"
          />
          <img src={logo} alt="Logo" className="h-10 md:h-20 mb-0  " />
          <div className="relative inline-block">
            <span className="absolute blur text-white tracking-wide transition-transform duration-300 hover:scale-110">
              maesoft
            </span>
            <span className="relative text-white tracking-wide -mt-2">
              maesoft
            </span>
          </div>
        </div>
        <button
          className="text-white text-4xl md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul className="hidden md:flex space-x-5 font-[Roboto] font-semibold text-sm md:text-2xl">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-white hover:text-gray-400 hover:underline transition-colors duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col mt-4 space-y-3 font-semibold text-sm px-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="block text-white hover:text-gray-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)} 
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
