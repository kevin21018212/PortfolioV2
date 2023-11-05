"use client";
import styles from "./page.module.css";
import Landing from "./Homepage/components/landing/landing";
import Project from "./Homepage/components/projects/project";

export default function Home() {
  return (
    <div className={styles.maincontent}>
      <div className={styles.landingcontainer}>
        <Landing />
      </div>
      <div className={styles.projectcontainer}>
        <Project />
      </div>
    </div>
  );
}
