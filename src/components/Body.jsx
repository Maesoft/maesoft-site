import "./Body.css";
import { TypeAnimation } from "react-type-animation";


function Body() {
  return (
    <div className="bg-gradient-to-r from-blue-950 via-slate-950 to-blue-950 text-white flex flex-col md:flex-row w-full">     
     <div className="w-full md:w-1/2 h-screen">
      <div className="content w-full md:w-3/4 text-center mt-5">
        <h1 className="text-5xl text-center">✨¡Bienvenido a MAESOFT!✨</h1>
        <TypeAnimation
          sequence={[
            "Web Developer",
            2000,
            "React Enthusiast",
            2000,
            "Open Source Contributor",
            2000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '3em', color: '#61dafb' }}
        />
      </div>
    </div>
      <div className="w-full md:w-1/2 h-screen flex items-center justify-center">

      </div>
    </div>
  )
}
export default Body;