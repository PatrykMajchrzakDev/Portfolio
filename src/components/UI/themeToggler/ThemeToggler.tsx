// ============= Import Modules =============
import ThemeStore from "@/store/ThemeStore";
// ============= Import Components =============
import styles from "./ThemeToggler.module.scss";

type ThemeTogglerType = {
  id: string;
};

const ThemeToggler: React.FC<ThemeTogglerType> = ({ id }) => {
  const toggleTheme = ThemeStore((state) => state.toggleTheme);
  const theme = ThemeStore((state) => state.theme);
  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <div className={styles.togglerWrapper}>
      <button
        onClick={handleToggle}
        id={id}
        className={`${
          theme === "light" ? `${styles.lightMode}` : `${styles.darkMode}`
        }`}
      >
        <svg
          className={styles.moon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 480"
          enableBackground="new 0 0 480 480"
          xmlSpace="preserve"
        >
          <path d="M459.782 347.328c-4.288-5.28-11.488-7.232-17.824-4.96-17.76 6.368-37.024 9.632-57.312 9.632-97.056 0-176-78.976-176-176 0-58.4 28.832-112.768 77.12-145.472 5.472-3.712 8.096-10.4 6.624-16.832S285.638 2.4 279.078 1.44C271.59.352 264.134 0 256.646 0c-132.352 0-240 107.648-240 240s107.648 240 240 240c84 0 160.416-42.688 204.352-114.176 3.552-5.792 3.04-13.184-1.216-18.496z" />
        </svg>
        <img
          className={styles.sun}
          aria-hidden="true"
          src="/assets/icons/sun.svg"
          decoding="async"
          alt="sun"
        />
      </button>
    </div>
  );
};

export default ThemeToggler;
