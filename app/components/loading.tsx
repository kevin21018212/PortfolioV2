import React from "react";
import "../componentcss/loading.css"; // Import the CSS module for styling
const LoadingAnimation = () => {
  return (
    <div className='loadingContainer'>
      <div className='ball'></div>
      <div className='ball'></div>
      <div className='ball'></div>
      <div className='ball'></div>
      <div className='ball'></div>
      <div className='ball'></div>
      <div className='ball'></div>
    </div>
  );
};

export default LoadingAnimation;
