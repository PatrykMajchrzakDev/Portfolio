// ============= Import Modules =============
import { useContext } from "react";
import { NavigationScrollContext } from "@/context/NavigationScroll";
import styles from "./Projects.module.scss";
// ============= Import Components =============

const Projects = () => {
  const { projects } = useContext(NavigationScrollContext);
  return (
    <div ref={projects} className={styles.test}>
      Projects coming soon...
    </div>
  );
};

export default Projects;
