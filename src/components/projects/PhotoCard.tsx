// ============= Import Modules =============
import { useEffect, useRef } from "react";
import styles from "./scss/PhotoCard.module.scss";
// ============= Import Components =============

type PhotoCardTypes = {
  photoUrl?: string;
  vidUrl?: string;
};

const PhotoCard: React.FC<PhotoCardTypes> = ({ photoUrl, vidUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Reducing speed by 50%
    }
  }, []);
  return (
    <div className={styles.photoCard}>
      {photoUrl && <img loading="lazy" src={photoUrl} alt="project photo" />}
      {vidUrl && (
        <div className={styles.vidContainer}>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            className={styles.vid}
            src={vidUrl}
          ></video>
        </div>
      )}
    </div>
  );
};

export default PhotoCard;
