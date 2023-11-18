"use client";

import ResumeClasses from "./resumecluster/classes";
import ResumeWork from "./resumecluster/work";
import styles from "../css/cluster.module.css";

const ResumeCluster = () => {
  return (
    <div className={styles.clustercontainer}>
      <ResumeWork />
      <ResumeClasses />
    </div>
  );
};

export default ResumeCluster;
