// ============= Import Modules =============
import { useContext } from "react";
import { NavigationScrollContext } from "@/context/NavigationScroll";
import styles from "./AboutMe.module.scss";
import ThemeStore from "@/store/ThemeStore";
// ============= Import Components =============
import Pin from "/assets/icons/pin.webp";
const AboutMe = () => {
  const theme = ThemeStore((state) => state.theme);
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
          <h4>About Me</h4>
          <h3>
            Full-Stack Web Developer located in Leszno, Poland
            <img src={Pin} alt="pin" />
          </h3>
          <p>
            Hi, I'm Patryk, a Full-Stack Web Developer. I specialize in crafting
            web applications using the latest technologies, with a focus on
            delivering clean and user-friendly UI/UX.
          </p>
          <p>
            My current tech stack includes React, Node.js, and various
            databases. However, I am adaptable and open to exploring and
            integrating other technologies as well.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
