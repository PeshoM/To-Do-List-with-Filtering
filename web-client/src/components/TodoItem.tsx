import { TodoItemProps } from "../models/todo.interface";
import styles from "../styles/todoItem.module.css";

const TodoItem = ({
  todo,
  setTodos,
  todos,
  onStatusChange,
  onDelete,
}: TodoItemProps) => {
  const handleCheckboxChange = () => {
    onStatusChange(todo.id, !todo.completed);
  };

  return (
    <div className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={todo.completed}
        onChange={handleCheckboxChange}
      />
      <div
        className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
      >
        {todo.text}
      </div>
      <button className={styles.deleteButton} onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
