import React from "react";

interface CrescentProps {
  height: number;
}

const Crescent: React.FC<CrescentProps> = ({height}) => {
  const crescentStyle: React.CSSProperties = {
    width: `${height / 2}px`,
    height: `${height}px`,
    position: "relative",
    overflow: "hidden", // To hide the bottom half
  };

  const pseudoElementStyle: React.CSSProperties = {
    content: "",
    width: `${height}px`,
    height: `${height}px`,
    borderRadius: "50%",

    border: "6px solid white",
    position: "absolute",
    top: "50%",
    left: "00%",
    transform: "translate(-50%, -50%) scaleX(-1)",
  };

  const outlineStyle: React.CSSProperties = {
    boxSizing: "border-box",
    width: `${height}px`,
    height: `${height}px`,
    borderRadius: "50%",

    position: "absolute",
    top: "50%",
    left: "0%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div style={crescentStyle}>
      <div style={pseudoElementStyle}></div>
      <div style={outlineStyle}></div>
    </div>
  );
};

export default Crescent;
