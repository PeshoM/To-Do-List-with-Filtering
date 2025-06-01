import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilteringButtons from "./components/FilteringButtons";
import { Todo } from "./models/todo.interface";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
      <FilteringButtons />
    </div>
  );
}

export default App;