import React from "react";
import Spacer from "@/app/Global/spacer";
import styles from "../../css/resumecluster/work.module.css";

const ResumeWork = () => {
  return (
    <>
      <div className={styles.workcomponent}>
        <div className={styles.workimg}></div>
        <div className={styles.workbox}>
          <div className={styles.workdisplay}></div>
        </div>
      </div>
    </>
  );
};

export default ResumeWork;
