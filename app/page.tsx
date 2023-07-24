import Image from "next/image";
import styles from "./page.module.css";

import Projects from "./components/project";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Projects />
    </>
  );
}
