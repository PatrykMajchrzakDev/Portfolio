// ============= Import Modules =============
import { useContext } from "react";
import { NavigationScrollContext } from "@/context/NavigationScroll";
import styles from "./scss/Projects.module.scss";
// ============= Import Components =============
import PhotoCard from "./PhotoCard";
import DescriptionCard from "./DescriptionCard";

const Projects = () => {
  const { projects } = useContext(NavigationScrollContext);

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
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis delectus doloremque fugiat reprehenderit? Vel culpa sint nostrum accusantium. Aspernatur quam aperiam molestiae autem eveniet amet adipisci voluptatibus facilis assumenda, neque ipsa, dolores nulla corrupti cupiditate distinctio at velit laborum. Magni?"
            />
          </div>
          <div className={`${styles.cardPhotoItem} ${styles.rightPhoto}`}>
            <PhotoCard photoUrl="assets/img/bike-shop-project.webp" />
          </div>
        </div>

        {/* 2nd project */}
        <div className={styles.cardItemWrapper}>
          <div className={`${styles.cardDescriptionItem} ${styles.rightDesc}`}>
            <DescriptionCard
              projectUrl="https://feedshare.netlify.app/login"
              projectName="FeedShare"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis delectus doloremque fugiat reprehenderit? Vel culpa sint nostrum accusantium. Aspernatur quam aperiam molestiae autem eveniet amet adipisci voluptatibus facilis assumenda, neque ipsa, dolores nulla corrupti cupiditate distinctio at velit laborum. Magni?"
            />
          </div>
          <div className={`${styles.cardPhotoItem} ${styles.leftPhoto}`}>
            <PhotoCard photoUrl="assets/img/bike-shop-project.webp" />
          </div>
        </div>

        {/* 3rd project */}
        <div className={styles.cardItemWrapper}>
          <div className={`${styles.cardDescriptionItem} ${styles.leftDesc}`}>
            <DescriptionCard
              projectUrl="https://bike-shop-manager.onrender.com/"
              projectName="BikeShopManager"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis delectus doloremque fugiat reprehenderit? Vel culpa sint nostrum accusantium. Aspernatur quam aperiam molestiae autem eveniet amet adipisci voluptatibus facilis assumenda, neque ipsa, dolores nulla corrupti cupiditate distinctio at velit laborum. Magni?"
              note="The Back-End of this application is hosted on a free server, it takes about 20 seconds to respond to initial request."
            />
          </div>
          <div className={`${styles.cardPhotoItem} ${styles.rightPhoto}`}>
            <PhotoCard photoUrl="assets/img/bike-shop-project.webp" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
