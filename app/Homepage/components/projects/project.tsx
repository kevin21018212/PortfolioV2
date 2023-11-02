import React, {useState, useEffect} from "react";
import {animate, motion} from "framer-motion";
import "../../css/projects/project.css";
import {projects} from "@/app/projectdata";
import ProjectInfo from "./projectinfo";

interface circles {
  id: string;
  info: string;
}

const circles = [
  {id: "circle1", info: "Information for Circle 1"},
  {id: "circle2", info: "Information for Circle 2"},
  {id: "circle3", info: "Information for Circle 3"},
  {id: "circle4", info: "Information for Circle 4"},
  {id: "circle5", info: "Information for Circle 5"},
];

const Project = () => {
  const [selectedCircle, setSelectedCircle] = useState<string | null>(null);
  const [projectData, setProjectData] = useState<any>(null);

  const handleCircleClick = (circleId: string) => {
    const selectedProject = projects.find((project) => project.id === circleId);

    setProjectData(selectedProject || null);
  };

  const handleOpen = () => {
    animate(".projects-container", {height: "65vh", opacity: 1});
    animate(".projects-component", {transform: "translateY(-65vh)"});
  };
  const handleClose = () => {
    animate(".projects-container", {height: "0vh", opacity: 1});
    animate(".projects-component", {transform: "translateY(0vh)"});
  };

  return (
    <div className='projects-component'>
      <div className='spacer-container'>
        <p className='texttitle'>New Projects </p>
        <button onClick={() => handleOpen()}></button>
        <button onClick={() => handleClose()}></button>
      </div>
      <motion.div className='projects-container'>
        <div className='circles-container'>
          {circles.map((circle) => (
            <div key={circle.id} className={`circle ${selectedCircle === circle.id ? "selected" : ""}`} id={circle.id} onClick={() => handleCircleClick(circle.id)}></div>
          ))}
        </div>
        <ProjectInfo projectData={projectData} />
      </motion.div>
    </div>
  );
};

export default Project;
