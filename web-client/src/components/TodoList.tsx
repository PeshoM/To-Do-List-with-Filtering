import { Todo, TodoListProps } from "../models/todo.interface";
import TodoItem from "./TodoItem";
import styles from "../styles/todoList.module.css";

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div className={styles.list}>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
