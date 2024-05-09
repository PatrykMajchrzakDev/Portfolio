// ============= Import Modules =============
import styles from "./scss/DescriptionCard.module.scss";
// ============= Import Components =============

type DescriptionTypes = {
  description: React.ReactNode;
  projectName: string;
  projectUrl: string;
  note?: string;
  demoAcc?: {
    login: string;
    password: string;
  };
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
        {demoAcc && (
          <div className={styles.demoAcc}>
            <p>Feel free to use demo account:</p>
            <div>
              <p>Username:&nbsp;</p>
              <p>{demoAcc.login}</p>
            </div>
            <div>
              <p>Password:&nbsp;</p>
              <p>{demoAcc.password}</p>
            </div>
          </div>
        )}
        {note && (
          <div className={styles.noteContainer}>
            <p className={styles.noteHeading}>
              Note: <span className={styles.noteDesc}>{note}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionCard;
