/*a react component with 5 cicrles that turn red when clicked and all display diffrent <information></information>
*/
import React, { useState } from "react";
import "../componentcss/project2.css";

export const Project2 = () => {
  const [selectedCircle, setSelectedCircle] = useState(null);

  const handleCircleClick = (circleId) => {
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
      <h1>Project 2</h1>
      {circles.map((circle) => (
        <div
          key={circle.id}
          className={`circle ${selectedCircle === circle.id ? "selected" : ""}`}
          id={circle.id}
          onClick={() => handleCircleClick(circle.id)}
        >
          
        </div>
      ))}
    </div>
  );
};
