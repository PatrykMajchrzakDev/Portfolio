// ============= Import Modules =============
import styles from "./Hero.module.scss";
// ============= Import Components =============

const Hero = () => {
  return (
    <section className={`container ${styles.heroContainer} `}>
      {/* Hero wrapper */}
      <div className={styles.heroWrapper}>
        {/* Left section headings */}
        <div className={styles.heroDescription}>
          <div className={styles.mainHeading}>
            <h1>Full-Stack Web Developer</h1>
            <img src="" alt="wave hand" />
          </div>
          <h2>
            Hi, I'm Patryk Majchrzak. A passionate React Web Developer based in
            Leszno, Poland <img src="" alt="pin" />
          </h2>
          {/* Socials */}
          <div className={styles.heroSocials}>
            <img src="" alt="linkedin" />
            <img src="" alt="github" />
          </div>
        </div>
        {/*Right section main image */}
        <div className={styles.heroImageSection}>
          <div className={styles.heroImage}></div>
        </div>
      </div>
      {/*Bottom section tech stack */}
      <div>
        <div></div>
        <div>
          <div>
            <img src="" alt="HTML" />
            <img src="" alt="CSS" />
          </div>
          <div>
            <img src="" alt="JavaScript" />
            <img src="" alt="TypeScript" />
          </div>
          <div>
            <img src="" alt="ReactJS" />
            <img src="" alt="NextJs" />
          </div>
          <div>
            <img src="" alt="NodeJS" />
            <img src="" alt="Postgres" />
          </div>
          <div>
            <img src="" alt="Tailwind" />
            <img src="" alt="Scss" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
