// ============= Import Modules =============
import { useContext } from "react";
import { NavigationScrollContext } from "@/context/NavigationScroll";
import styles from "./scss/Projects.module.scss";
import useLanguageStore from "@/store/LanguageStore";
import enLang from "@/languages/en.json";
import plLang from "@/languages/pl.json";
// ============= Import Components =============
import PhotoCard from "./PhotoCard";
import DescriptionCard from "./DescriptionCard";

const Projects = () => {
  const { projects } = useContext(NavigationScrollContext);
  const { lang } = useLanguageStore();
  const translation = lang === "en" ? enLang : plLang;
  return (
    <section ref={projects} className={styles.projectsSection}>
      {/* Wrapper for all projects items */}
      <div className={`${styles.projectsWrapper} container`}>
        <h2 className={styles.projectsHeading}>Some Things I've Built</h2>

        {/* 1st project */}
        <div className={styles.cardItemWrapper}>
          <div className={`${styles.cardDescriptionItem} ${styles.leftDesc}`}>
            <DescriptionCard
              projectUrl="https://local-vibe.vercel.app/"
              projectName="LocalVibe"
              description={<span>{translation.projects.desc.localvibe}</span>}
            />
          </div>

          <div className={`${styles.cardPhotoItem} ${styles.rightPhoto}`}>
            <PhotoCard photoUrl="assets/img/localvibe.webp" />
          </div>
        </div>

        {/* 2nd project */}
        <div className={styles.cardItemWrapper}>
          <div className={`${styles.cardDescriptionItem} ${styles.rightDesc}`}>
            <DescriptionCard
              projectUrl="https://feedshare.netlify.app/login"
              projectName="FeedShare"
              description={<span>{translation.projects.desc.feedshare}</span>}
            />
          </div>
          <div className={`${styles.cardPhotoItem} ${styles.leftPhoto}`}>
            <PhotoCard photoUrl="assets/img/feedshare.webp" />
          </div>
        </div>

        {/* 3rd project */}
        <div className={styles.cardItemWrapper}>
          <div className={`${styles.cardDescriptionItem} ${styles.leftDesc}`}>
            <DescriptionCard
              projectUrl="https://bike-shop-manager.onrender.com/"
              projectName="Bike Shop Manager"
              description={<span>{translation.projects.desc.bikeshop}</span>}
              note="The Back-End of this application is hosted on a free server, it takes about 20 seconds to respond to initial request."
              demoAcc={{ login: "user3@gmail.com", password: "user3123" }}
            />
          </div>
          <div className={`${styles.cardPhotoItem} ${styles.rightPhoto}`}>
            <PhotoCard photoUrl="assets/img/bike-shop-manager.webp" />
          </div>
        </div>

        {/* 4th project */}
        <div className={styles.cardItemWrapper}>
          <div className={`${styles.cardDescriptionItem} ${styles.rightDesc}`}>
            <DescriptionCard
              projectUrl="https://playful-salmiakki-ec06d2.netlify.app/"
              projectName="Kamieniarstwo Mariusz Paul"
              description={
                <span>{translation.projects.desc.kamieniarstwo}</span>
              }
            />
          </div>
          <div className={`${styles.cardPhotoItem} ${styles.leftPhoto}`}>
            <PhotoCard vidUrl="assets/vids/kamieniarstwoPaulVid-desktop.mp4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
