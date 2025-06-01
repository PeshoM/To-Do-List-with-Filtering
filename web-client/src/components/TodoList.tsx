import { Todo, TodoListProps } from "../models/todo.interface";
import TodoItem from "./TodoItem";
import styles from "../styles/todoList.module.css";

const TodoList = ({
  todos,
  setTodos,
  onStatusChange,
  onDelete,
}: TodoListProps) => {
  return (
    <div className={styles.list}>
      {todos.map((todo: Todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
