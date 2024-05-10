// ============= Import Modules =============
import styles from "./scss/DescriptionCard.module.scss";
import useLanguageStore from "@/store/LanguageStore";
import enLang from "@/languages/en.json";
import plLang from "@/languages/pl.json";
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
  const { lang } = useLanguageStore();
  const translation = lang === "en" ? enLang : plLang;

  return (
    <div className={styles.descriptionCard}>
      <h3>{translation.projects.descCard.h3}</h3>
      <h4>{projectName}</h4>
      <a href={projectUrl}>{translation.projects.descCard.url}</a>
      <div className={styles.desc}>
        {description}
        {demoAcc && (
          <div className={styles.demoAcc}>
            <p>{translation.projects.descCard.demo}</p>
            <div>
              <p>{translation.projects.descCard.username}&nbsp;</p>
              <p>{demoAcc.login}</p>
            </div>
            <div>
              <p>{translation.projects.descCard.pass}&nbsp;</p>
              <p>{demoAcc.password}</p>
            </div>
          </div>
        )}
        {note && (
          <div className={styles.noteContainer}>
            <p className={styles.noteHeading}>
              {translation.projects.descCard.note}{" "}
              <span className={styles.noteDesc}>{note}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionCard;
