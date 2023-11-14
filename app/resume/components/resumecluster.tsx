import ResumeClasses from "./resumecluster/classes";
import ResumeWork from "./resumecluster/work";
import styles from "../css/resumecluster.module.css";

const ResumeCluster = () => {
  return (
    <div className={styles.clustercontainer}>
      <ResumeWork />
      <ResumeClasses />
    </div>
  );
};

export default ResumeCluster;
