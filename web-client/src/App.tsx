import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilteringButtons from "./components/FilteringButtons";
import { Todo, Filter, FILTER_STATUS } from "./models/todo.interface";
import styles from "./styles/app.module.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === FILTER_STATUS.ALL) return true;
    if (filter === FILTER_STATUS.ACTIVE) return !todo.completed;
    if (filter === FILTER_STATUS.COMPLETED) return todo.completed;
    return true;
  });

  const handleTodoStatusChange = (id: string, completed: boolean) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <FilteringButtons filter={filter} setFilter={setFilter} />
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList
        todos={filteredTodos}
        setTodos={setTodos}
        onStatusChange={handleTodoStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
