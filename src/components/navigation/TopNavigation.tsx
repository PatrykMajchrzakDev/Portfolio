// ============= Import Modules =============
import { useState, useContext } from "react";
import styles from "./scss/TopNavigation.module.scss";
import { NavigationScrollContext } from "@/context/NavigationScroll";

// ============= Import Components =============
import ThemeToggler from "../UI/themeToggler/ThemeToggler";
import hamburgerMenu from "/assets/icons/bars-solid.svg";
import xMark from "/assets/icons/xmark-solid.svg";

const TopNavigation = () => {
  localStorage.setItem("theme", "light");
  const { contact, aboutMe, projects } = useContext(NavigationScrollContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.container}>
      {/* MOBILE NAVIGATION */}
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
                closeMenu();
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                projects?.current?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                contact?.current?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
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
      <div className={styles.hamburgerContainer}>
        <div className={styles.hamburgerWrapper}>
          <ThemeToggler id="1" />
          <div className={styles.hamburger}>
            {isMenuOpen ? (
              <img src={xMark} alt="close menu" onClick={toggleMenu} />
            ) : (
              <img
                src={hamburgerMenu}
                alt="hamburger menu"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      </div>

      {/* DESKTOP VIEWPORT - Right navigation section */}
      <div className={styles.list}>
        <ThemeToggler id="2" />
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
