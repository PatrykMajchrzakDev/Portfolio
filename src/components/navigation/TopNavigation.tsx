// ============= Import Modules =============
import { useState, useContext } from "react";
import styles from "./scss/TopNavigation.module.scss";
import { NavigationScrollContext } from "@/context/NavigationScroll";

// ============= Import Components =============
import hamburgerMenu from "/assets/icons/bars-solid.svg";
import xMark from "/assets/icons/xmark-solid.svg";

const TopNavigation = () => {
  const { contact, aboutMe, projects } = useContext(NavigationScrollContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.container}>
      <div
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <ul className={styles.mobileMenuList}>
          <li>
            <a
              onClick={() => {
                aboutMe?.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                projects?.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                contact?.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>
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
            <a
              onClick={() => {
                aboutMe?.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                projects?.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                contact?.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavigation;
