// ============= Import Modules =============
import { useContext } from "react";
import { NavigationScrollContext } from "@/context/NavigationScroll";
import styles from "./AboutMe.module.scss";
import ThemeStore from "@/store/ThemeStore";
import useLanguageStore from "@/store/LanguageStore";
import enLang from "@/languages/en.json";
import plLang from "@/languages/pl.json";
// ============= Import Components =============
import Pin from "/assets/icons/pin.webp";

const AboutMe = () => {
  const theme = ThemeStore((state) => state.theme);
  const { lang } = useLanguageStore();
  const translation = lang === "en" ? enLang : plLang;
  const curvedText =
    theme === "light"
      ? "/assets/img/curved-fullstack-text.webp"
      : "/assets/img/curved-fullstack-text-white.webp";
  const { aboutMe } = useContext(NavigationScrollContext);
  return (
    <section ref={aboutMe} className={styles.section}>
      <div className={`${styles.sectionWrapper} container`}>
        <div className={styles.photoSection}>
          <img
            src="/assets/img/about-me-desk.webp"
            alt="view at desk with laptop"
          />
          <div className={styles.circleContainer}>
            <img src={curvedText} alt="curved text - fullstack web developer" />
          </div>
        </div>
        <div className={styles.textSection}>
          <h2>{translation.about.h2}</h2>
          <h3>
            {translation.about.h3}
            <img src={Pin} alt="pin" />
          </h3>
          <p>{translation.about.intro}</p>
          <p>{translation.about.stack}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
