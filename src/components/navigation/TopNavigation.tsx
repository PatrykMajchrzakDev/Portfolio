// ============= Import Modules =============
import { useState, useContext } from "react";
import styles from "./scss/TopNavigation.module.scss";
import { NavigationScrollContext } from "@/context/NavigationScroll";
import useLanguageStore from "@/store/LanguageStore";
import enLang from "@/languages/en.json";
import plLang from "@/languages/pl.json";

// ============= Import Components =============
import ThemeTogglerV2 from "../UI/themeToggler/ThemeToggler";
import LanguageToggler from "@/components/UI/LanguageToggler/LanguageToggler";
import hamburgerMenu from "/assets/icons/bars-solid.svg";
import xMark from "/assets/icons/xmark-solid.svg";

const TopNavigation = () => {
  const { lang } = useLanguageStore();
  const translation = lang === "en" ? enLang : plLang;

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
              rel="nofollow"
              onClick={() => {
                aboutMe?.current?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              {translation.navigation.about}
            </a>
          </li>
          <li>
            <a
              rel="nofollow"
              onClick={() => {
                projects?.current?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              {translation.navigation.projects}
            </a>
          </li>
          <li>
            <a
              rel="nofollow"
              onClick={() => {
                contact?.current?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              {translation.navigation.contact}
            </a>
          </li>
        </ul>
      </div>
      {/* Left logo section */}
      <div className={styles.logo}>
        <p>{translation.navigation.logo}</p>
      </div>

      {/* Hamburger Menu */}
      <div className={styles.hamburgerContainer}>
        <div className={styles.hamburgerWrapper}>
          <LanguageToggler />
          <ThemeTogglerV2 id="1" />
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
        <ul>
          <li>
            <LanguageToggler />
          </li>
          <li>
            <ThemeTogglerV2 id="2" />
          </li>
          <li>
            <a
              rel="nofollow"
              onClick={() => {
                aboutMe?.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {translation.navigation.about}
            </a>
          </li>
          <li>
            <a
              rel="nofollow"
              onClick={() =>
                projects?.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {translation.navigation.projects}
            </a>
          </li>
          <li>
            <a
              rel="nofollow"
              onClick={() => {
                contact?.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {translation.navigation.contact}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavigation;
