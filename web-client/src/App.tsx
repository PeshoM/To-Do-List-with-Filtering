import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilteringButtons from "./components/FilteringButtons";
import { Todo, Filter, FILTER_STATUS } from "./models/todo.interface";
import styles from "./styles/app.module.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    if (filter === FILTER_STATUS.ALL) {
      setFilteredTodos(todos);
    } else if (filter === FILTER_STATUS.ACTIVE) {
      setFilteredTodos(todos.filter((todo) => !todo.completed));
    } else if (filter === FILTER_STATUS.COMPLETED) {
      setFilteredTodos(todos.filter((todo) => todo.completed));
    }
  }, [filter, todos]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <FilteringButtons filter={filter} setFilter={setFilter} />
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
