// ============= Import Modules =============
import styles from "./scss/PhotoCard.module.scss";
// ============= Import Components =============

type PhotoCardTypes = {
  photoUrl: string;
};

const PhotoCard: React.FC<PhotoCardTypes> = ({ photoUrl }) => {
  return (
    <div className={styles.photoCard}>
      <img src={photoUrl} alt="project photo" />
    </div>
  );
};

export default PhotoCard;
