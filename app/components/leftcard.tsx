import React from "react";

interface CardProps {
  title: string;
}

const LeftCard: React.FC<CardProps> = ({title}) => (
  <div style={{backgroundColor: "white", padding: "1rem", marginLeft: "30%"}}>
    <h3>{title}</h3>
    {/* Left card content */}
  </div>
);

export default LeftCard;
