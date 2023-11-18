import React from "react";
import { motion } from "framer-motion";
import styles from "../../css/resumecluster/classescard.module.css";

const ClassesCard = () => {
  const descriptionVariants = {
    hidden: { height: "20%" },
    visible: { height: "80%" },
  };

  return (
    <motion.div className={styles.card}>
      <motion.div
        className={styles.description}
        variants={descriptionVariants}
        initial="hidden"
        whileHover="visible"
      >
        <p>Description</p>
        <p>Extra Information</p>
      </motion.div>
    </motion.div>
  );
};

export default ClassesCard;
