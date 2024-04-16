// ============= Import Modules =============
import { Link } from "react-router-dom";
// ============= Import Components =============
import styles from "./Footer.module.scss";

const Footer = () => {
  const githubIcon = "/assets/icons/github-white.svg";
  const linkedInIcon = "/assets/icons/linkedin-white.svg";

  return (
    <footer className={styles.section}>
      <div className={`container ${styles.footerWrapper}`}>
        <div className={styles.description}>
          <p>Copyright © 2024. All rights are reserved</p>
        </div>
        <div>
          {/* Socials */}
          <div className={styles.footerSocials}>
            <Link to={"https://www.linkedin.com/in/patryk-majchrzakdev/"}>
              <img src={linkedInIcon} alt="linkedin" />
            </Link>
            <Link to={"https://github.com/PatrykMajchrzakDev"}>
              <img src={githubIcon} alt="github" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
