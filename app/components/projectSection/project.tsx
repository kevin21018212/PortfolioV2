"use client";
import React, {useState} from "react";
import "../../componentcss/project.css"; // Import the CSS file
import defaultProjects from "./projectlist";
import LeftCard from "./leftcard";
import Line from "./line";
import RightCard from "./rightcard";

const Projects: React.FC = () => {
  const totalProjects = defaultProjects.length;
  const lineHeight = totalProjects * 100;

  return (
    <div className='projects-container' style={{height: `${lineHeight}px`}}>
      <div className='top-section' style={{"--topSectionHeight": `${lineHeight}px`}}>
        <div className='left-card-container'>
          {defaultProjects.map((project, index) => {
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
          {defaultProjects.map((project, index) => {
            if (index % 2 !== 0) {
              return (
                <div key={project.id} className='right-card'>
                  <RightCard key={project.id} project={project} />
                  <div className='right-card-line' />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
