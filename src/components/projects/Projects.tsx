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
              description={
                <span>
                  LocalVibe is a dynamic web application that transforms how
                  users discover and interact with places of interest.
                  Integrated seamlessly with the <b>Google Places API</b>, the
                  app allows users to <b>search</b> for and{" "}
                  <b>find detailed information about various locations</b> ,
                  including restaurants, parks, and cultural landmarks.{" "}
                  <br></br>
                  <br></br>
                  Each listed place includes essential details such as
                  user-generated ratings, the number of reviews, and precise
                  location data. Enhancing the exploration experience, the app
                  also displays <b>real-time local weather conditions</b>,
                  providing users with all the necessary information to plan
                  their visits efficiently and effectively.
                </span>
              }
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
              description={
                <span>
                  Feedshare is a dynamic photo-sharing platform where users can
                  easily <b>log in via Google</b> to{" "}
                  <b>share, save, and download photos</b>. It encourages
                  interaction through <b>likes</b> and <b>comments</b> and
                  facilitates discovery through categorized searches. <br></br>
                  <br></br>The application features a <b>masonry grid layout</b>
                  , enhancing the visual presentation and browsing experience by
                  accommodating images of various sizes. This design choice
                  optimizes screen use and engages users effectively.
                </span>
              }
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
              description={
                <span>
                  Bike Shop Manager <b>simplifies</b> bicycle shop operations,
                  enabling users to <b>create</b> and <b>track</b> orders,{" "}
                  <b>manage</b> client data, and
                  <b>monitor</b> order statuses. It features <b>local login</b>{" "}
                  for security and provides efficient tools to edit and oversee
                  near-completion orders, optimizing administrative tasks.
                </span>
              }
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
                <span>
                  Kamieniarstwo Mariusz Paul is a meticulously crafted{" "}
                  <b>static website</b> built using HTML, CSS, and JavaScript.
                  Designed to <b>showcase</b> a stone masonry business, it
                  features dedicated sections for offers, contact information,
                  and company background.<br></br>
                  <br></br> The site <b>enhances user engagement</b> through
                  element <b>animations</b> and a <b>photo carousel</b> that
                  displays the craftsmanship and products available.
                  Additionally, an integrated map provides location details,
                  facilitating easy access for potential customers. This website
                  combines functional design with interactive elements to
                  provide a comprehensive and visually appealing online presence
                  for Kamieniarstwo Mariusz Paul.
                </span>
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
