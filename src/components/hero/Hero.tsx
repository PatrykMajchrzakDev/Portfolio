// ============= Import Modules =============
import styles from "./Hero.module.scss";
import { Link } from "react-router-dom";
// ============= Import Components =============

const Hero = () => {
  return (
    <section className={`container ${styles.heroContainer} `}>
      {/* Hero wrapper */}
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
            Hi, I'm Patryk Majchrzak. A passionate React Web Developer based in
            Leszno, Poland <img src="/assets/icons/pin.webp" alt="pin" />
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
            <img
              src="https://skillicons.dev/icons?i=html,css"
              alt="HTML and CSS"
            />
          </div>
          <div className={styles.iconsGroup}>
            <img
              src="https://skillicons.dev/icons?i=js,ts"
              alt="JavaScript and TypeScript"
            />
          </div>
          <div className={styles.iconsGroup}>
            <img
              src="https://skillicons.dev/icons?i=react,next"
              alt="ReactJS and NextJs"
            />
          </div>
          <div className={styles.iconsGroup}>
            <img
              src="https://skillicons.dev/icons?i=nodejs,postgres"
              alt="NodeJS and Postgres"
            />
          </div>
          <div className={styles.iconsGroup}>
            <img
              src="https://skillicons.dev/icons?i=tailwind,scss"
              alt="Tailwind and Scss"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
