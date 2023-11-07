import React from "react";
import styles from "../css/skillcard.module.css";
import { motion } from "framer-motion";

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
    <motion.div
      // whileHover={{ scale: 1.1, zIndex: 50 }}
      className={styles.skillcardContainer}
      style={cardStyle}
    >
      <div className={styles.text}>
        <p className="s">{title}</p>
        <p className="m">{skillName}</p>
        <p className="s">{experience}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
