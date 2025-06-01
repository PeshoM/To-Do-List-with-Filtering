import { useState } from "react";
import { TodoInputProps } from "../models/todo.interface";

const TodoInput = ({ todos, setTodos }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      { id: todos.length + 1, text: inputValue, completed: false },
    ]);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
