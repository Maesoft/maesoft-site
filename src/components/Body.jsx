import "./Body.css";
import { TypeAnimation } from "react-type-animation";


function Body() {
  return (
    <div className="body">
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
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
          style={{ fontSize: '2em', color: '#61dafb' }}
        />
      </div>
    </div>
  )
}
export default Body;