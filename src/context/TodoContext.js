import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { todosData } from "../data/todos";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  // Get todos from localStorage or use default data if none exist
  const getStoredTodos = () => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      return JSON.parse(storedTodos);
    }
    return todosData;
  };

  const [todos, setTodos] = useState(getStoredTodos);

  const [filterText, setFilterText] = useState("pending");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("alphabetically");

  // Set the value stored inside the localStorage todos when there's a change

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "all":
        setFilterText("pending");
        return todos;
      case "completed":
        setFilterText("completed");
        return todos.filter((todo) => todo.done);
      case "active":
        setFilterText("active");
        return todos.filter((todo) => !todo.done);
      default:
        return todos;
    }
  }, [todos, filter]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    return;
  };

  const changeFilter = (value) => {
    setFilter(value);
    return;
  };

  const changeSort = (value) => {
    setSort(value);
  };
  // Remove todo from list
  const deleteTodo = (todo) => {
    setTodos(
      todos.filter((current) => {
        return current.id !== todo.id;
      })
    );
  };

  // Itemtodo onClick: mark a todo item as done
  const markAsDone = (todo) => {
    setTodos(
      todos.map((current) => {
        return current.id === todo.id
          ? { ...current, done: !todo.done }
          : current;
      })
    );
    return;
  };

  // Sort todos based on current sort method
  const sortedTodos = useMemo(() => {
    switch (sort) {
      case "dateAsc":
        return [...filteredTodos].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
      case "dateDesc":
        return [...filteredTodos].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      case "alphabetically":
        return [...filteredTodos].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      default:
        return filteredTodos;
    }
  }, [filteredTodos, sort]);

  const value = {
    todos,
    addTodo,
    deleteTodo,
    markAsDone,
    filter,
    filterText,
    filteredTodos,
    changeFilter,
    changeSort,
    sort,
    sortedTodos,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  return useContext(TodoContext);
};
