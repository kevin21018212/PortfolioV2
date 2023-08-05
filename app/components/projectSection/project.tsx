"use client";
import React, {useState} from "react";
import RightCard from "./rightcard";
import LeftCard from "./leftcard";
import Line from "./line";
import "../../componentcss/project.css"; // Import the CSS file

interface Project {
  id: number;
  title: string;
}

const Projects: React.FC = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [lineHeight, setLineHeight] = useState<number>(0);

  const handleAddProject = () => {
    const newProject: Project = {
      id: projects.length + 1,
      title: `Project ${projects.length + 1}`,
    };
    if (isAdding) {
      setProjects([newProject, ...projects]);
    } else {
      setProjects([...projects, newProject]);
    }
    setIsAdding(!isAdding);
  };

  const handleLineExpand = () => {
    setLineHeight(lineHeight + 100); // Increase line height by 180 each time
  };

  return (
    <div className='projects-container'>
      <div className='top-section' style={{"--topSectionHeight": lineHeight}}>
        <div className='left-card-container'>
          {projects.map((project, index) => {
            if (index % 2 === 0) {
              return (
                <div key={project.id} className='left-card'>
                  <div className='left-card-line' />
                  <LeftCard title={project.title} />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className='line-container'>
          <Line height={lineHeight} />
        </div>
        <div className='right-card-container'>
          {projects.map((project, index) => {
            if (index % 2 !== 0) {
              return (
                <div key={project.id} className='right-card'>
                  <RightCard title={project.title} />
                  <div className='right-card-line' />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <div className='add-button-container'>
        <button
          className='add-button'
          onClick={() => {
            handleAddProject();
            handleLineExpand();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Projects;
