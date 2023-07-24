import React from "react";

interface LineProps {
  height: number;
}

const Line: React.FC<LineProps> = ({height}) => (
  <div
    style={{
      borderTop: "1px solid white",
      position: "absolute",

      transition: "height 0.3s ease",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 5,
      height: height,
      backgroundColor: "white",
    }}
  />
);

export default Line;
