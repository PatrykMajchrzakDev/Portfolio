// ============= Import Modules =============
import { useContext } from "react";
import { NavigationScrollContext } from "@/context/NavigationScroll";
import styles from "./Contact.module.scss";
import useLanguageStore from "@/store/LanguageStore";
import enLang from "@/languages/en.json";
import plLang from "@/languages/pl.json";
// ============= Import Components =============
import MapIcon from "/assets/icons/map.svg";
import EmailIcon from "/assets/icons/email.svg";
import GithubIcon from "/assets/icons/github-blue.svg";
import LinkedInIcon from "/assets/icons/linkedin-blue.svg";

const Contact = () => {
  const { lang } = useLanguageStore();
  const translation = lang === "en" ? enLang : plLang;
  const { contact } = useContext(NavigationScrollContext);
  return (
    <section ref={contact} className={styles.contactSection}>
      <h2 className="container">{translation.contact.section}</h2>
      <ul className={`${styles.contactListItems} container`}>
        <li className={styles.contactListItemsWrapper}>
          <div className={styles.iconWrapper}>
            <img src={MapIcon} alt="map" />
          </div>
          <div className={styles.contactListInfo}>
            <p>{translation.contact.branch.loc}</p>
            <p>{translation.contact.desc.loc}</p>
          </div>
        </li>
        <li className={styles.contactListItemsWrapper}>
          <div className={styles.iconWrapper}>
            <img src={EmailIcon} alt="email" />
          </div>
          <div className={styles.contactListInfo}>
            <p>{translation.contact.branch.email}</p>
            <p>{translation.contact.desc.email}</p>
          </div>
        </li>
        <li className={styles.contactListItemsWrapper}>
          <div className={styles.iconWrapper}>
            <img src={GithubIcon} alt="github" />
          </div>
          <div className={styles.contactListInfo}>
            <p>{translation.contact.branch.github}</p>
            <a href="https://github.com/PatrykMajchrzakDev">
              {translation.contact.desc.github}
            </a>
          </div>
        </li>
        <li className={styles.contactListItemsWrapper}>
          <div className={styles.iconWrapper}>
            <img src={LinkedInIcon} alt="linkedin" />
          </div>
          <div className={styles.contactListInfo}>
            <p>{translation.contact.branch.linkedin}</p>
            <a href="https://www.linkedin.com/in/patryk-majchrzakdev/">
              {translation.contact.desc.linkedin}
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
