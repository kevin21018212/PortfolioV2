import { useState } from "react";
import styles from "./spacer.module.css";
import { animate } from "framer-motion";

const Spacer = ({
  title,
  projectsContainerClass,
  projectsComponentClass,
  height,
}: any) => {
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  const handleOpen = () => {
    animate(`.${projectsContainerClass}`, { height: `${height}`, opacity: 1 });
  };

  const handleClose = () => {
    animate(`.${projectsContainerClass}`, { height: "0vh", opacity: 0 });
  };

  const handleToggleProject = () => {
    if (isProjectOpen) {
      handleClose();
    } else {
      handleOpen();
    }
    setIsProjectOpen(!isProjectOpen);
  };

  return (
    <div className={styles.spacercontainer}>
      <p className="t1">{title}</p>
      <button
        onClick={handleToggleProject}
        className={`${styles.toggleButton} ${
          isProjectOpen ? styles.upArrow : styles.downArrow
        }`}
      ></button>
    </div>
  );
};

export default Spacer;
