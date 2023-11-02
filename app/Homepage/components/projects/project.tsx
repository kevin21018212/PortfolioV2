import React, { useState, useEffect } from "react";
import { animate, motion } from "framer-motion"
import "../css/project2.css";
import { projects } from "@/app/projectdata";
import ProjectInfo from "./projectinfo";
interface circles {
  id: string;
  info: string;
}

interface projects {
  id: string;
  topRight: string;
  middleRight: string;
  bottomRight: string;
  middleMiddle: string;
  bottomMiddle: string;
}

const circles = [
  { id: "circle1", info: "Information for Circle 1" },
  { id: "circle2", info: "Information for Circle 2" },
  { id: "circle3", info: "Information for Circle 3" },
  { id: "circle4", info: "Information for Circle 4" },
  { id: "circle5", info: "Information for Circle 5" },
];


const Project2: React.FC = () => {
  const [selectedCircle, setSelectedCircle] = useState<string | null>(null);
  const [projectData, setProjectData] = useState<projects | null>(null);

  useEffect(() => {
    if (selectedCircle) {
      const timer = setTimeout(() => {
        const selectedProject = projects.find((project) => project.id === selectedCircle);
        setProjectData(selectedProject || null);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setProjectData(null);
    }
  }, [selectedCircle]);

  const handleCircleClick = (circleId: string) => {
    if (selectedCircle === circleId) {
      setSelectedCircle(null);
    } else {
      setSelectedCircle(circleId);
    }
  };


 const handleOpen = ()=>{
  animate(".projects-container", { height: "65vh", opacity: 1 })
 animate(".projects-component", { transform:"translateY(-65vh)" })
  }
const handleClose = () =>{
  animate(".projects-container", { height: "0vh", opacity: 1 })
  animate(".projects-component", { transform:"translateY(0vh)" })
}

  return (
    <div className="projects-component">
      <div className="spacer-container">
      <p className="texttitle">New Projects </p>
      <button onClick={()=> handleOpen()} ></button>
      <button onClick={() =>   handleClose()}></button>
    </div><motion.div className="projects-container">
        <div className="circles-container">
          {circles.map((circle) => (
            <div
              key={circle.id}
              className={`circle ${selectedCircle === circle.id ? "selected" : ""}`}
              id={circle.id}
              onClick={() => handleCircleClick(circle.id)}
            ></div>
          ))}
        </div>
      <ProjectInfo projectData={projectData}/> 
      </motion.div>
      </div>
  );
};

export default Project2;