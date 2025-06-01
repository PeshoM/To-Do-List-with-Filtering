export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodoInputProps = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

export type TodoItemProps = {
  setTodos: (todos: Todo[]) => void;
  todos: Todo[];
  todo: Todo;
};

export type TodoListProps = {
    setTodos: (todos: Todo[]) => void;
    todos: Todo[];
};
