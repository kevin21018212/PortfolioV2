"use client";
import React, { useState } from "react";
import styles from "../css/skillslider.module.css";
import SkillCard from "./skillcard";
import skillsData from "@/app/skilldata";

const SkillSlider = () => {
  const skillsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(skillsData.length / skillsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * skillsPerPage;
  const endIndex = startIndex + skillsPerPage;
  const visibleSkills = skillsData.slice(startIndex, endIndex);

  return (
    <div className={styles.skillsliderContainer}>
      <div className={styles.carousel}>
        {visibleSkills.map((skill: any, index: number) => (
          <SkillCard
            key={index}
            title={skill.title}
            skillName={skill.skillName}
            experience={skill.experience}
            backgroundImageUrl={skill.backgroundImageUrl}
          />
        ))}
      </div>
      <div className={styles.navigation}>
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default SkillSlider;
