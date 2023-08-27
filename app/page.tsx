"use client";
import styles from "./page.module.css";
import Contact from "./components/contact";
import Landing from "./components/landing";
import {useEffect, useState} from "react";
import LoadingAnimation from "./components/loading";
import { Project2 } from "./components/project2";
import Spacer from "./components/spacer";

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
            <Contact />
          </div>
        </>
      )}
    </div>
  );
}
