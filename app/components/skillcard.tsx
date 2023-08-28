import "../componentcss/skillcard.css";
const SkillCard = () => {
    return(
        <div className="skill-card">
            <div>
           <p className="textlarge">Front-End</p>
           </div>
           <div><p className="textmedium">Internship, John Deere 1yr</p></div>
           <div className="card-middle">
             <div className="image"></div>
            <div className="text"><p className="textsmall">JavaScript,HTML,Css,TypeScript,NextJS 13</p></div>
           </div>
       </div>
    )
}
export default SkillCard;