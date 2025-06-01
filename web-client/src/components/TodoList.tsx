import { Todo, TodoListProps } from "../models/todo.interface";
import TodoItem from "./TodoItem";



const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
