"use client";
import Landing from "./homepage/components/landing/landing";
import Project from "./homepage/components/projects/project";
import styles from "./page.module.css";

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
