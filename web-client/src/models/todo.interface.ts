import { Dispatch, SetStateAction } from "react";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoInputProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

export interface TodoListProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

export interface TodoItemProps {
  todo: Todo;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

export type Filter = "all" | "active" | "completed";

export interface FilteringButtonsProps {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
}

export enum FILTER_STATUS {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}