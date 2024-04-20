// ============= Import Modules =============
import styles from "./scss/PhotoCard.module.scss";
// ============= Import Components =============

type PhotoCardTypes = {
  photoUrl?: string;
  vidUrl?: string;
};

const PhotoCard: React.FC<PhotoCardTypes> = ({ photoUrl, vidUrl }) => {
  return (
    <div className={styles.photoCard}>
      {photoUrl && <img src={photoUrl} alt="project photo" />}
      {vidUrl && (
        <video autoPlay loop muted className={styles.vid} src={vidUrl}></video>
      )}
    </div>
  );
};

export default PhotoCard;
