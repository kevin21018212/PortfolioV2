"use client";
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/navbar";
import Contact from "./components/contact";
import Landing from "./components/landing";
import {useEffect, useState} from "react";
import LoadingAnimation from "./components/loading";
import Projects from "./components/projectSection/project";
import { Project2 } from "./components/project2";

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
            <NavBar />
            <Landing />
            <Project2/>
            <Contact />
          </div>
        </>
      )}
    </div>
  );
}
