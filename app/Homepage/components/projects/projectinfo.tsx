import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const ProjectInfo = ({ ProjectData }: any) => {
  // State variable to track changes in projectData


  function handleTextAnimation() {
    throw new Error('Function not implemented.');
}

  useEffect(() => {

    if (ProjectData) {
      handleTextAnimation()
    }
   
  }, [ProjectData]);

  return (
    <div className="projects-content">
      {ProjectData&& (
        <>
          <div className="projects-content-right">
            <motion.p className={`textsmall ${ProjectData ? "active" : ""}`}>{ProjectData.topRight}</motion.p>
            <motion.p className={`textlarge ${ProjectData ? "active" : ""}`}>{ProjectData.middleRight}</motion.p>
            <motion.p className={`textsmall ${ProjectData ? "active" : ""}`}>{ProjectData.bottomRight}</motion.p>
          </div>
          <div className="projects-content-left">
            <motion.p className={`texttitle ${ProjectData ? "active" : ""}`}>Idea</motion.p>
            <motion.p className={`textxmedium ${ProjectData ? "active" : ""}`}>{ProjectData.middleMiddle}</motion.p>
            <motion.p className={`textxsmall ${ProjectData ? "active" : ""}`}>{ProjectData.bottomMiddle}</motion.p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectInfo;

