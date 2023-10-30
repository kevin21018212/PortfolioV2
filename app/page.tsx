"use client";
import styles from "./page.module.css";

import {useEffect, useState} from "react";
import LoadingAnimation from "./Homepage/components/loading";
import  Project2  from "./Homepage/components/project2";
import Spacer from "./Global/spacer";
import Landing from "./Homepage/components/landing/landing";

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
          <div className={styles.stack}>
      
            <Landing />
            <Spacer title=" New Projects"/>
            <Project2/>
          </div>
        </>
      )}
    </div>
  );
}
