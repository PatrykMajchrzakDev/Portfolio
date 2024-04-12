// ============= Import Modules =============
import Pin from "/assets/icons/pin.webp";

// ============= Import Components =============
import styles from "./AboutMe.module.scss";
const AboutMe = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.sectionWrapper} container`}>
        <div className={styles.photoSection}>
          <img
            src="/assets/img/about-me-desk.webp"
            alt="view at desk with laptop"
          />
          <div className={styles.circleContainer}>
            <img src="/assets/img/curved-fullstack-text.webp" alt="" />
          </div>
        </div>
        <div className={styles.textSection}>
          <p>About Me</p>
          <h2>
            Full-Stack Web Developer located in Leszno, Poland
            <img src={Pin} alt="pin" />
          </h2>
          <h3>
            Hi, I'm Patryk, a Full-Stack Web Developer. I specialize in crafting
            web applications using the latest technologies, with a focus on
            delivering clean and user-friendly UI/UX.
          </h3>
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
