"use client";
import styles from "./page.module.css";

import {useEffect, useState} from "react";
import LoadingAnimation from "./Homepage/components/loading";
import Landing from "./Homepage/components/landing/landing";
import Project from "./Homepage/components/projects/project";

export default function Home() {



  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>



          <div className={styles.maincontent}>
           <div className={styles.landingcontainer}>
            <Landing />
            </div>
            <div className={styles.projectcontainer}>
            <Project/>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
