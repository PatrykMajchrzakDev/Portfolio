// ============= Import Modules =============
import styles from "./scss/DescriptionCard.module.scss";
// ============= Import Components =============

type DescriptionTypes = {
  description: string;
  projectName: string;
  projectUrl: string;
  note?: string;
  demoAcc?: string;
};

const DescriptionCard: React.FC<DescriptionTypes> = ({
  description,
  projectName,
  projectUrl,
  note,
  demoAcc,
}) => {
  return (
    <div className={styles.descriptionCard}>
      <h4>Featured Project</h4>
      <h3>{projectName}</h3>
      <a href={projectUrl}>Check out live version</a>
      <div className={styles.desc}>
        {description}
        {note && (
          <div className={styles.noteContainer}>
            <p className={styles.noteHeading}>
              Note:<p className={styles.noteDesc}>{note}</p>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionCard;
