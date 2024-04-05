// ============= Import Modules =============
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./scss/TopNavigation.module.scss";

// ============= Import Components =============
import hamburgerMenu from "../../assets/icons/bars-solid.svg";
import xMark from "../../assets/icons/xmark-solid.svg";

const TopNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <ul className={styles.mobileMenuList}>
          <li>
            <Link to={"#about"}>About</Link>
          </li>
          <li>
            <Link to={"#projects"}>Projects</Link>
          </li>
          <li>
            <Link to={"#contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      {/* Left logo section */}
      <div className={styles.logo}>
        <p>PatrykMajchrzak.dev</p>
      </div>

      {/* Hamburger Menu */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? (
          <img src={xMark} alt="close menu" />
        ) : (
          <img src={hamburgerMenu} alt="hamburger menu" />
        )}
      </div>

      {/* Right navigation section */}
      <div className={styles.list}>
        <ul>
          <li>
            <Link to={"#about"}>About</Link>
          </li>
          <li>
            <Link to={"#projects"}>Projects</Link>
          </li>
          <li>
            <Link to={"#contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavigation;
