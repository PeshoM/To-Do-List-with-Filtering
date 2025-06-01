export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type TodoInputProps = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

export type TodoItemProps = {
  todo: Todo;
};

export type TodoListProps = {
  todos: Todo[];
};
