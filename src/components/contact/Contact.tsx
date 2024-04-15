// ============= Import Modules =============
// ============= Import Components =============
import MapIcon from "/assets/icons/map.svg";
import EmailIcon from "/assets/icons/email.svg";
import GithubIcon from "/assets/icons/github-blue.svg";
import LinkedInIcon from "/assets/icons/linkedin-blue.svg";

import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={`${styles.contactSection} container`}>
      <h4>Contact</h4>
      <ul className={styles.contactListItems}>
        <li className={styles.contactListItemsWrapper}>
          <div className={styles.iconWrapper}>
            <img src={MapIcon} alt="map" />
          </div>
          <div className={styles.contactListInfo}>
            <p>Location</p>
            <p>Leszno, Poland</p>
          </div>
        </li>
        <li className={styles.contactListItemsWrapper}>
          <div className={styles.iconWrapper}>
            <img src={EmailIcon} alt="email" />
          </div>
          <div className={styles.contactListInfo}>
            <p>Email</p>
            <p>patrykmajchrzakdev@gmail.com</p>
          </div>
        </li>
        <li className={styles.contactListItemsWrapper}>
          <div className={styles.iconWrapper}>
            <img src={GithubIcon} alt="github" />
          </div>
          <div className={styles.contactListInfo}>
            <p>Github</p>
            <p>PatrykMajchrzakDev</p>
          </div>
        </li>
        <li className={styles.contactListItemsWrapper}>
          <div className={styles.iconWrapper}>
            <img src={LinkedInIcon} alt="linkedin" />
          </div>
          <div className={styles.contactListInfo}>
            <p>LinkedIn</p>
            <p>PatrykMajchrzak</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
