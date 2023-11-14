import React, { useRef } from "react";
import styles from "../css/skillslider.module.css";
import SkillCard from "./skillcard";
import skillsData from "@/app/skilldata";
import { motion, useMotionValue } from "framer-motion";

const SkillSlider = () => {
  const numSkills = skillsData.length;
  const initialX = -(numSkills / 2) * 25; // Center the carousel
  const x = useMotionValue(initialX);

  const ref = useRef(null);

  return (
    <motion.div ref={ref} className={styles.skillsliderContainer}>
      <motion.div drag={"x"} dragConstraints={ref} className={styles.carousel}>
        {skillsData.map((skill: any, index: number) => (
          <motion.div key={index} className={styles.skillcardContainer}>
            <SkillCard
              title={skill.title}
              skillName={skill.skillName}
              experience={skill.experience}
              backgroundImageUrl={skill.backgroundImageUrl}
            />
          </motion.div>
        ))}
      </motion.div>
      <div className={styles.navigation}></div>
    </motion.div>
  );
};

export default SkillSlider;
