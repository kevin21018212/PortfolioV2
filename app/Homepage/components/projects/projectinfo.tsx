import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import "../../css/projects/projectinfo.css"

// Define a type for project data
type ProjectData = {
  id: string;
  topRight: string;
  middleRight: string;
  bottomRight: string;
  middleMiddle: string;
  bottomMiddle: string;
};

const ProjectInfo: React.FC<{ projectData: ProjectData | null }> = ({ projectData }) => {
  // State variable to track changes in projectData

  function handleTextAnimation() {}

  useEffect(() => {
    if (projectData) {
      handleTextAnimation();
    }

    console.log(projectData);
  }, [projectData]);

  return (
    <div className='projects-content'>
      {projectData !== null && (
        <>
          <div className='projects-content-right'>
            <motion.p className={`textsmall`}>{projectData.topRight}</motion.p>
            <motion.p className={`textlarge`}>{projectData.middleRight}</motion.p>
            <motion.p className={`textsmall`}>{projectData.bottomRight}</motion.p>
          </div>
          <div className='projects-content-left'>
            <motion.p className={`texttitle`}>Idea</motion.p>
            <motion.p className={`textxmedium`}>{projectData.middleMiddle}</motion.p>
            <motion.p className={`textxsmall`}>{projectData.bottomMiddle}</motion.p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectInfo;
