import React, { useState } from "react";
import "../css/project2.css";

export const Project2 = () => {
  const [selectedCircle, setSelectedCircle] = useState(null);

  const handleCircleClick = (circleId:any) => {
    setSelectedCircle(circleId);
  };

  const circles = [
    { id: "circle1", info: "Information for Circle 1" },
    { id: "circle2", info: "Information for Circle 2" },
    { id: "circle3", info: "Information for Circle 3" },
    { id: "circle4", info: "Information for Circle 4" },
    { id: "circle5", info: "Information for Circle 5" },
  ];

  return (
    <div className="projects-container">
      <div className="circles-container">
        {circles.map((circle) => (
          <div
            key={circle.id}
            className={`circle ${
              selectedCircle === circle.id ? "selected" : ""
            }`}
            id={circle.id}
            onClick={() => handleCircleClick(circle.id)}
          ></div>
        ))}
      </div>
      <div className="projects-content">

        <div className="projects-content-right">
        <div className="top-right">
          <p className="textsmall">A platform for ideas</p>
        </div>
        <div className="middle-right">
          <p className="textlarge">Project001</p>
          <p className="notop">Portfolio V2</p>
        </div>
        <div className="bottom-right">
          <p className="textsmall">KevCo</p>
          <p className="pushup">7:50 PM</p>
        </div>
        </div>


        <div className="projects-content-left">
        <div className="middle-middle">
          <p className="texttitle">Idea</p>
          <p className="textsmall">
            Anguler,Brutalist,Chaotic the centeral idea of this project was
            finding chaos in space and the serenity that sourounds it.
          </p>
        </div>
        <div className="bottom-middle">
          <div className="textsmall">Front end development</div>
          <div className="textxsmall"> focus on apis design</div>
        </div>
      </div>
      </div>

      
      <div className="project-image">
        <div className="content-card">
 
        </div>
      </div>
    </div>
  );
};
