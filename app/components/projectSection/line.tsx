import React from "react";
import "../../componentcss/line.css"; // Import the CSS file

interface LineProps {
  height: number;
}

const Line = ({height}: LineProps) => <div className='line' style={{height: `${height}px`}} />;

export default Line;
