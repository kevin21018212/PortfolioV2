"use client";
import React, {useState} from "react";
import RightCard from "./rightcard";
import LeftCard from "./leftcard";
import Line from "./line";

interface Project {
  id: number;
  title: string;
}

const Projects = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [lineHeight, setLineHeight] = useState(0);
  const topSectionHeight = 0 + lineHeight / 12;

  const handleAddProject = () => {
    const newProject: Project = {
      id: projects.length + 1,
      title: `Project ${projects.length + 1}`,
    };

    if (isAdding) {
      setProjects([...projects, newProject]);
    } else {
      setProjects([newProject, ...projects]);
    }

    setIsAdding(!isAdding); // Toggle the isAdding state
    setLineHeight(lineHeight + 180); // Increase line height by 180 each time
  };

  return (
    <div style={{height: "100vh", display: "flex", flexDirection: "column"}}>
      <div
        style={{
          height: `${topSectionHeight}%`,
          display: "flex",
          boxSizing: "border-box", // Include border in the height calculation
        }}
      >
        <div style={{width: "45%", backgroundColor: "black"}}>
          {projects.map((project, index) => {
            if (index % 2 === 0) {
              return (
                <div key={project.id} style={{marginBottom: "15vh", position: "relative"}}>
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "100%",
                      transform: "translateY(-50%)",
                      width: "11%",
                      height: "5px",
                      backgroundColor: "white",
                      zIndex: "9999", // Set a high z-index value
                    }}
                  />
                  <LeftCard title={project.title} />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div style={{width: "10%", backgroundColor: "black", position: "relative"}}>
          <Line height={lineHeight} />
        </div>
        <div style={{width: "45%", backgroundColor: "black"}}>
          {projects.map((project, index) => {
            if (index % 2 !== 0) {
              return (
                <div key={project.id} style={{marginTop: "14vh", position: "relative"}}>
                  <RightCard title={project.title} />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "100%",
                      transform: "translateY(-50%)",
                      width: "11%",
                      height: "5px",
                      backgroundColor: "white",
                    }}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <div style={{height: "20%"}}>
        <button onClick={handleAddProject}>Add</button>
      </div>
    </div>
  );
};

export default Projects;
