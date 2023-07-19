import React from "react";

interface CardProps {
  title: string;
}

const RightCard: React.FC<CardProps> = ({title}) => (
  <div style={{backgroundColor: "white", padding: "1rem", marginRight: "30%"}}>
    <h3>{title}</h3>
    {/* Right card content */}
  </div>
);

export default RightCard;
