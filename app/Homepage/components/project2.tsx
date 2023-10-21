import React, { useState } from "react";
import "../css/project2.css";


export const Project2 = () => {
  const [selectedCircle, setSelectedCircle] = useState(null);

  const handleCircleHover = (circleId) => {
    setSelectedCircle(circleId);
  };

  const resetSelectedCircle = () => {
    setSelectedCircle(null);
  };

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
      middleMiddle: "a compelling showcase of creativity and craftsmanship. More than just lines of code; it's a reflection of the dedication and innovation that fuels the digital world. A dynamic canvas where skills and projects unite to tell a story,",
      bottomMiddle: "API NEXTJS CSS FIREBASE DESIGN",
    },
    {
      id: "circle2",
      topRight: "Project 002",
      middleRight: "Code Bounties",
      bottomRight: "Fun",
      middleMiddle: "Emboding creativity, collaboration, and innovation. Experience the joy of problem-solving offering a dynamic space where your ideas come to life, fostering a sense of fun and fulfillment",
      bottomMiddle: "DATABASE PRISMA NEXTJS CSS API",
    },
    {
      id: "circle3",
      topRight: "Project 003",
      middleRight: "Goal Tracker",
      bottomRight: "Vizualize,Focus,and Balance",
      middleMiddle: "Immerse yourself in a fusion of data and art, where music becomes a sensory journey. Explore the vibrant rhythms and stories that make our sound unique. Join us in unraveling the artistic possibilities through the fusion of API routing and Next.js hooks",
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
      middleMiddle: "a sensory journey through emotive melodies and evocative stories. Join us to explore the boundaries of sound and discover our unique musical identity. Let your senses groove with us",
      bottomMiddle: "ART",
    },
  ];

  // Define the content for the "projects-content" section based on the selected circle
  const getContentForSelectedCircle = () => {
    if (selectedCircle) {
      const selectedProject = projects.find((project) => project.id === selectedCircle);
      return (
        <div className="middle-middle">
          <p className="texttitle">Idea</p> 
          <p className="textsmall">{selectedProject.middleMiddle}</p>
        </div>
      );
    }
    // Default content when no circle is selected
    return (
   <></>
    );
  };

  return (
    <div className="projects-container">
      <div className="circles-container">
        {circles.map((circle) => (
          <div
            key={circle.id}
            className={`circle ${selectedCircle === circle.id ? "selected" : ""}`}
            id={circle.id}
            onMouseEnter={() => handleCircleHover(circle.id)}
            onMouseLeave={resetSelectedCircle}
          ></div>
        ))}
      </div>
      <div className="projects-content">
        <div className="projects-content-right">
          <div className="top-right">
            {selectedCircle && (
              <p className="textsmall">{projects.find((project) => project.id === selectedCircle).topRight}</p>
            )}
          </div>
          <div className="middle-right">
            {selectedCircle && (
              <p className="textlarge">{projects.find((project) => project.id === selectedCircle).middleRight}</p>
            )}
          </div>
          <div className="bottom-right">
            {selectedCircle && (
              <p className="textsmall">{projects.find((project) => project.id === selectedCircle).bottomRight}</p>
            )}
          </div>
        </div>

        <div className="projects-content-left">
          {getContentForSelectedCircle()}
          <div className="bottom-middle">
            {selectedCircle && (
              <p className="textxsmall">{projects.find((project) => project.id === selectedCircle).bottomMiddle}</p>
            )}
          </div>
        </div>
      </div>

      <div className="project-image">
        <div className="content-card"></div>
      </div>
    </div>
  );
};
