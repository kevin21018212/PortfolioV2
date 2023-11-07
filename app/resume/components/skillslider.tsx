"use client";
import React, { useRef } from "react";
import styles from "../css/skillslider.module.css";
import SkillCard from "./skillcard";
import skillsData from "@/app/skilldata";
import { motion, useMotionValue } from "framer-motion";

const SkillSlider = () => {
  const numSkills = skillsData.length;
  const initialX = -(numSkills / 2) * 25; // Center the carousel
  const x = useMotionValue(initialX);

  return (
    <motion.div className={styles.skillsliderContainer}>
      <motion.ul
        drag={"x"}
        dragConstraints={{
          left: -60 * numSkills,
          right: 60 * numSkills,
        }}
        style={{ x }} // Set the x value here
        className={styles.carousel}
      >
        {skillsData.map((skill: any, index: number) => (
          <li key={index} className={styles.skillcardContainer}>
            <SkillCard
              title={skill.title}
              skillName={skill.skillName}
              experience={skill.experience}
              backgroundImageUrl={skill.backgroundImageUrl}
            />
          </li>
        ))}
      </motion.ul>
      <div className={styles.navigation}></div>
    </motion.div>
  );
};

export default SkillSlider;
