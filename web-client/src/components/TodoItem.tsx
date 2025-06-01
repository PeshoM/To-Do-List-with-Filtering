import { TodoItemProps } from "../models/todo.interface";
import styles from "../styles/todoItem.module.css";

const TodoItem = ({ todo, setTodos, todos }: TodoItemProps) => {
  const handleCheckboxChange = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={todo.completed}
        onChange={() => handleCheckboxChange(todo.id)}
      />
      <div
        className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
      >
        {todo.text}
      </div>
      <button className={styles.deleteButton} onClick={() => handleDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
