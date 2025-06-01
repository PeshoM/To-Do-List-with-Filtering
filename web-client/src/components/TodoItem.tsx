import { TodoItemProps } from "../models/todo.interface";

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div>
      <div>{todo.text}</div>
      <div>{todo.completed ? "Completed" : "Not Completed"}</div>
    </div>
  );
};

export default TodoItem;
