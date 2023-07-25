"use client";
import React, {useState} from "react";
import "../componentcss/project.css";
import RightCard from "./rightcard";
import Crescent from "./cresent";

interface Project {
  id: number;
  title: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [lineHeight, setLineHeight] = useState(0);

  const handleAddProject = () => {
    const newProject: Project = {
      id: projects.length + 1,
      title: `Project ${projects.length + 1}`,
    };

    setProjects([...projects, newProject]);
    setLineHeight(lineHeight + 120);

  const calculateTopDivHeight = () => {
    return projects.reduce((acc, project) => acc + 120, 0);
  };

  const calculateCardPosition = (index: number) => {
    // Calculate the position of each card based on the angle of the circle
    const circleRadius = lineHeight / 3; // Adjust this value to reduce the distance between cards and the crescent
    const totalCards = projects.length;
    const angleIncrement = (Math.PI - 0.1) / (totalCards - 1); // Decrease the angle increment for a larger angle between cards
    const angle = Math.PI / 2 - index * angleIncrement; // Start from 90 degrees (bottom) and subtract the angle increment for each card
    const x = circleRadius * Math.cos(angle);
    const y = -circleRadius * Math.sin(angle); // Flip the y coordinate vertically

    // Calculate the position of the card relative to the circle
    const cardX = x + circleRadius + 0;
    const cardY = y + circleRadius + 30 * index; // Increase the offset for each card to be lower than the previous card

    return {left: cardX, top: cardY};
  };

  return (
    <div className='projects-container'>
      {/* Top Section */}
      <div className='top-section' style={{height: `${calculateTopDivHeight()}px`}}>
        {/* Left Section (Line) */}
        <div className='line-container'>
          <Crescent height={lineHeight} />
        </div>

        {/* Right Section (Card List) */}
        <div className='card-list'>
          {projects.map((project, index) => (
            <div key={project.id} className='card' style={{position: "absolute", ...calculateCardPosition(index)}}>
              <RightCard title={project.title} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className='bottom-section'>
        <button onClick={handleAddProject}>Add</button>
      </div>
    </div>
  );
};

export default Projects;
