import SkillCard from "../Homepage/components/skillcard";
import Spacer from "../Global/spacer";
import './resume.css'


const ResumePage = () => {


  

    return (
    
      <>
        <Spacer title="Skills" /><div className="skills-section">
       <><SkillCard /><SkillCard /><SkillCard /><SkillCard /><SkillCard /></>
        </div>
        <Spacer title="Experience" />
        <div className="experince-section"></div>
        <Spacer title="Classes" />
        <div className="classes"></div>
        <Spacer title="Extra" />
        <div className="extracricular"></div>
      </>
     
    )
}
export default ResumePage;