import React from "react";
import { useTodo } from '../context/TodoContext';

const CountTracker = () => {
  const todoContext = useTodo()
  const { filteredTodos, filterText } = todoContext; // ? todoContext.filteredTodos : [];

  return (
    <p className='p-5 text-slate-400 text-sm'>
      You have{" "}
      {filterText === "pending"
        ? filteredTodos.filter((todo) => todo.done !== true).length
        : filteredTodos.length}{" "}
      {filterText} tasks.
    </p>
  );
};

export default CountTracker;
