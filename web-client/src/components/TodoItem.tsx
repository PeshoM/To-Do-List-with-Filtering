export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div>
      <div>{todo.text}</div>
      <div>{todo.completed ? "Completed" : "Not Completed"}</div>
    </div>
  );
};

export default TodoItem;
