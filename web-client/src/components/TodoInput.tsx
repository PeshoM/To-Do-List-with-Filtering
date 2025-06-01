import { useState } from "react";
import { TodoInputProps } from "../models/todo.interface";
import styles from "../styles/todoInput.module.css";

const TodoInput = ({ todos, setTodos }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([
      ...todos,
      { id: todos.length + 1, text: inputValue, completed: false },
    ]);
    setInputValue("");
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className={styles.input}
        placeholder="Add a new todo..."
      />
      <button onClick={handleAddTodo} className={styles.button}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
