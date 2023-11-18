import styles from "../../css/resumecluster/classes.module.css";
import ClassesCard from "./classescard";
const ResumeClasses = () => {
  return (
    <div className={styles.classescontainer}>
      <ClassesCard />
      <ClassesCard />
      <ClassesCard />
    </div>
  );
};
export default ResumeClasses;
