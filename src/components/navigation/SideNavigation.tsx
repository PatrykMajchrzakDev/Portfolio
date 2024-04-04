// ============= Import Modules =============

import { Link } from "react-router-dom";
import styles from "./SideNavigation.module.scss";

// ============= Import Components =============
const SideNavigation = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Link to={"#about"}>1</Link>
        </li>
        <li>
          <Link to={"#projects"}>2</Link>
        </li>
        <li>
          <Link to={"#contact"}>3</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNavigation;
