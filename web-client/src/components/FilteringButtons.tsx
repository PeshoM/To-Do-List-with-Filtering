import { FilteringButtonsProps } from "../models/todo.interface";
import styles from "../styles/filteringButtons.module.css";

const FilteringButtons = ({ filter, setFilter }: FilteringButtonsProps) => {
  return (
    <div className={styles.filteringButtons}>
      <button
        className={`${styles.button} ${filter === "all" ? styles.active : ""}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`${styles.button} ${
          filter === "active" ? styles.active : ""
        }`}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        className={`${styles.button} ${
          filter === "completed" ? styles.active : ""
        }`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default FilteringButtons;
