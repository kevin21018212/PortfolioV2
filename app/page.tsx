import Image from "next/image";
import styles from "./page.module.css";

import Projects from "./components/project";
import NavBar from "./components/navbar";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <NavBar />
      <Projects />
      <Contact />
    </>
  );
}
