import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import "../../css/projects/projectinfo.css";

// Define a type for project data
type ProjectData = {
  id: string;
  topRight: string;
  middleRight: string;
  bottomRight: string;
  middleMiddle: string;
  bottomMiddle: string;
};

const textanimation = {
  inactive: {
    opacity: 0,
    translateX: "-5vh", // Change to -5vh for left, 5vh for middle
  },
  active: {
    opacity: 1,
    translateX: "0vh", // Change to 0vh for left, 5vh for middle
  },
};

const staggerChildrenAnimation = {
  active: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2, // Adjust the stagger delay as needed.
    },
  },
};

const ProjectInfo = ({ projectData }: { projectData: ProjectData }) => {
  const [animationState, setAnimationState] = useState("inactive");

  useEffect(() => {
    setAnimationState("inactive");

    setTimeout(() => {
      setAnimationState("active");
    }, 150);
  }, [projectData]);

  return (
    <div className="projects-content">
      {projectData && (
        <>
          <motion.div
            variants={staggerChildrenAnimation}
            initial="inactive"
            animate={animationState}
            exit="inactive"
            className="projects-content-left"
          >
            <motion.p className={"s"} variants={textanimation}>
              {projectData.topRight}
            </motion.p>
            <motion.div className={`middleleft t1`} variants={textanimation}>
              {projectData.middleRight}
            </motion.div>
            <motion.p className={"bottom m"} variants={textanimation}>
              {projectData.bottomRight}
            </motion.p>
          </motion.div>
          <motion.div
            variants={staggerChildrenAnimation}
            initial="inactive"
            animate={animationState}
            exit="inactive"
            className="projects-content-middle"
          >
            <motion.div className=" idea" variants={textanimation}>
              <motion.p className="t3 ideatop">IDEA</motion.p>
              <motion.p className="s ideabody">
                {projectData.middleMiddle}
              </motion.p>
            </motion.div>
            <motion.p className={"bottommiddle m"} variants={textanimation}>
              {projectData.bottomMiddle}
            </motion.p>
          </motion.div>
          <div className="projects-content-right"></div>
        </>
      )}
    </div>
  );
};

export default ProjectInfo;
