import React from "react";
import Spacer from "@/app/Global/spacer";
import styles from "../../css/resumecluster/work.module.css";

const ResumeWork = () => {
  return (
    <>
      <div className={styles.workcontainer}>
        <div className={styles.workimg}>
          <div className={styles.worktext}>
            <p className="t1">Work</p>
          </div>
        </div>
        <div className={styles.workbox}>
          <div className={styles.workdisplay}>
            <p>John Deere 2022-Current</p>
            <p>Year round developer intership at John Deere</p>
            <p>
              Working with fullstack development on multiple company apps.
              Working with:AWS,APIs,Databases,Next js
            </p>
            <p>Acacia Frateniry Web Dev 2023-Current</p>
            <p>
              Web developement and general matience. Working with: Next
              js,Tailwind,Framer,Firebase Hositng
            </p>
            <p>Cabot Corporation 2021-2022</p>
            <p>
              General intership mainly focusing on analyizing large
              datasets,loss/spill prevention and action,VBA integration
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeWork;
