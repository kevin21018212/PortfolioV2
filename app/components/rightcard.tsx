import React, {useState} from "react";

interface CardProps {
  title: string;
}

const RightCard = ({title}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    backgroundColor: "white",
    width: isHovered ? "300px" : "20px",
    height: isHovered ? "150px" : "20px",
    borderRadius: isHovered ? "0" : "50%",
    padding: "1rem",
    marginRight: isHovered ? "calc(100% - 300px)" : "auto",
    transition: "all 1s ease",
  };

  const contentStyle = {
    display: isHovered ? "block" : "none",
    backgroundColor: "white",
    padding: "1rem",
  };

  return (
    <div style={{width: "100%"}} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <div style={cardStyle}>
        <div style={contentStyle}>{/* Right card content */}</div>
      </div>
    </div>
  );
};

export default RightCard;
