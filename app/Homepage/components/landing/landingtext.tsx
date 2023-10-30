import { TypeAnimation } from "react-type-animation"
import "../../css/landing/landingtext.css";

const LandingText = ()=>{
    return(   
     <div className="landing-content">
    <p className="landing-title">Hi, I'm Matthew </p>
  <div className="landing-typewriter">
    <div className="texttitle">
    <TypeAnimation
      sequence={["Developer", 3000, "Programmer", 3000, "Designer", 3000]}
      wrapper="span"
      speed={10}
      repeat={Infinity}
    />
    </div>
  </div>
</div>)
}

export default LandingText;