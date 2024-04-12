// ============= Import Modules =============
import styles from "./Hero.module.scss";
import { Link } from "react-router-dom";
// ============= Import Components =============
import Pin from "/assets/icons/pin.webp";
const Hero = () => {
  const HTMLCSSImg = "https://skillicons.dev/icons?i=html,css";
  const JSTSImg = "https://skillicons.dev/icons?i=js,ts";
  const ReactNext = "https://skillicons.dev/icons?i=react,next";
  const NodePostgres = "https://skillicons.dev/icons?i=nodejs,postgres";
  const TailwindScss = "https://skillicons.dev/icons?i=tailwind,scss";
  return (
    <section className={styles.section}>
      {/* Hero wrapper */}
      <div className={`container ${styles.heroContainer} `}>
        <div className={styles.heroWrapper}>
          {/* Left section headings */}
          <div className={styles.heroDescription}>
            <div className={styles.mainHeading}>
              <h1>
                Full-Stack Web Developer{" "}
                <img src="/assets/icons/hello.webp" alt="wave hand" />
              </h1>
            </div>
            <h2>
              Hi, I'm Patryk Majchrzak. A passionate React Web Developer based
              in Leszno, Poland <img src={Pin} alt="pin" />
            </h2>
            {/* Socials */}
            <div className={styles.heroSocials}>
              <Link to={"https://www.linkedin.com/in/patryk-majchrzakdev/"}>
                <img src="/assets/icons/linkedin.png" alt="linkedin" />
              </Link>
              <Link to={"https://github.com/PatrykMajchrzakDev"}>
                <img src="/assets/icons/github.png" alt="github" />
              </Link>
            </div>
          </div>
          {/*Right section main image */}
          <div className={styles.heroImageSection}>
            <div className={styles.heroImage}></div>
          </div>
        </div>
        {/*Bottom section tech stack */}
        <div className={styles.techStackWrapper}>
          <div className={styles.techStackText}>
            <p>Tech Stack</p>
          </div>
          <div className={styles.techStackIconsWrapper}>
            <div className={styles.iconsGroup}>
              <img src={HTMLCSSImg} alt="HTML and CSS" />
            </div>
            <div className={styles.iconsGroup}>
              <img src={JSTSImg} alt="JavaScript and TypeScript" />
            </div>
            <div className={styles.iconsGroup}>
              <img src={ReactNext} alt="ReactJS and NextJs" />
            </div>
            <div className={styles.iconsGroup}>
              <img src={NodePostgres} alt="NodeJS and Postgres" />
            </div>
            <div className={styles.iconsGroup}>
              <img src={TailwindScss} alt="Tailwind and Scss" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
