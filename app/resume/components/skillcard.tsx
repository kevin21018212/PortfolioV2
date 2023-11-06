import React from "react";
import styles from "../css/skillcard.module.css";

interface SkillCardProps {
  title: string;
  skillName: string;
  experience: string;
  backgroundImageUrl: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  skillName,
  experience,
  backgroundImageUrl,
}: SkillCardProps) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  return (
    <div className={styles.skillcardContainer}>
      <div className={styles.text}>
        <p className="s">{title}</p>
        <p className="m">{skillName}</p>
        <p className="s">{experience}</p>
      </div>
      <div className={styles.bgContainer} style={cardStyle}></div>
    </div>
  );
};

export default SkillCard;
