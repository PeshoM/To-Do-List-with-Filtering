import { TodoItemProps } from "../models/todo.interface";
import styles from "../styles/todoItem.module.css";
const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div className={styles.item}>
      <input type="checkbox" className={styles.checkbox} />
      <div className={styles.text}>{todo.text}</div>
      <button className={styles.deleteButton}>Delete</button>
    </div>
  );
};

export default TodoItem;
