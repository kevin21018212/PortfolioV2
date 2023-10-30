import React, { useState, useEffect } from "react";
import { animate, motion } from "framer-motion"
import "../css/project2.css";

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

const projects = [
  {
    id: "circle1",
    topRight: "Project 001",
    middleRight: "Portfolio V2",
    bottomRight: "Showcase of self",
    middleMiddle: "a compelling showcase of creativity and craftsmanship...",
    bottomMiddle: "API NEXTJS CSS FIREBASE DESIGN",
  },
  {
    id: "circle2",
    topRight: "Project 002",
    middleRight: "Code Bounties",
    bottomRight: "Fun",
    middleMiddle: "Emboding creativity, collaboration, and innovation...",
    bottomMiddle: "DATABASE PRISMA NEXTJS CSS API",
  },
  {
    id: "circle3",
    topRight: "Project 003",
    middleRight: "Goal Tracker",
    bottomRight: "Vizualize, Focus, and Balance",
    middleMiddle: "Immerse yourself in a fusion of data and art, where music becomes a sensory journey...",
    bottomMiddle: "DATABASE OKTA NEXTJS AWS",
  },
  {
    id: "circle4",
    topRight: "Project 004",
    middleRight: "Kev.FM",
    bottomRight: "Data Into Art",
    middleMiddle: "Middle Middle Text for Project 4",
    bottomMiddle: "API ROUTING SSF NEXTJS HOOKS",
  },
  {
    id: "circle5",
    topRight: "Project 005",
    middleRight: "D.REW",
    bottomRight: "Gateway to identity",
    middleMiddle: "a sensory journey through emotive melodies and evocative stories...",
    bottomMiddle: "ART",
  },
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

  return (
    <div className="projects-component">
      <div className="spacer-container">
      <p className="texttitle">New Projects </p>
      <button onClick={() => animate(".projects-container", { height: "65vh", opacity: 1 })}></button>
      <button onClick={() => animate(".projects-container", { height: "0vh", opacity: 1 })}></button>
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
        <div className="projects-content">
          {projectData && (
            <>
              <div className="projects-content-right">
                <p className={`textsmall  ${projectData ? "active" : ""}`}>{projectData.topRight}</p>
                <p className={`textlarge ${projectData ? "active" : ""}`}>{projectData.middleRight}</p>
                <p className={`textsmall  ${projectData ? "active" : ""}`}>{projectData.bottomRight}</p>
              </div>
              <div className="projects-content-left">
                <div className={`${projectData ? "active" : ""}`}>
                  <p className="texttitle">Idea</p>
                  <p className="textsmall">{projectData.middleMiddle}</p>
                </div>
                <div className="bottom-middle">
                  <p className={`textxsmall  ${projectData ? "active" : ""}`}>{projectData.bottomMiddle}</p>
                </div>
              </div>
            </>
          )}
        </div>
       
      </motion.div>
      </div>
  );
};

export default Project2;