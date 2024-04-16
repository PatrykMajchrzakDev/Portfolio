// ============= Import Modules =============
import ThemeStore from "@/store/ThemeStore";
// ============= Import Components =============
import styles from "./ThemeToggler.module.scss";

const ThemeToggler = () => {
  const toggleTheme = ThemeStore((state) => state.toggleTheme);

  const handleToggle = () => {
    console.log("Toggling theme"); // Check if this logs
    toggleTheme();
  };

  return (
    <div className={styles.togglerWrapper}>
      <input
        type="checkbox"
        className={styles.checkbox}
        id="checkbox"
        onChange={handleToggle} // Ensures handleToggle is called on change
      />
      <label htmlFor="checkbox" className={styles.checkboxLabel}>
        <span className={styles.ball}></span>
      </label>
    </div>
  );
};

export default ThemeToggler;
