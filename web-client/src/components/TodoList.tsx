import { Todo, TodoListProps } from "../models/todo.interface";
import TodoItem from "./TodoItem";
import styles from "../styles/todoList.module.css";

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return (
    <div className={styles.list}>
      {todos.map((todo: Todo) => {
        console.log(todo.text, todo.completed, todo.id);
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
