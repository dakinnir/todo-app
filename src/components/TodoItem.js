import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { markAsDone, deleteTodo } = useTodo();

  // marking a todo as completed
  const todoClickHandler = () => {
    markAsDone(todo);
  };

  // delete button click handler
  const deleteButtonClickHandler = (event) => {
    event.preventDefault();
    // confirm deletion
    if (window.confirm("Are you sure you want to delete this item?")) {
      deleteTodo(todo);
    }
  };

  return (
    <div
      className={`flex items-center justify-between hover:bg-gray-700 p-2 border-b-[1px] border-slate-600`}
    >
      <div
        className={`flex flex-col hover:cursor-pointer w-3/4 ${
          todo.done && "line-through text-slate-500 italic"
        }`}
        onClick={todoClickHandler}
      >
        <p className='text-[0.95rem]'>{todo.title}</p>
        <small>
          {new Date(todo.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </small>
      </div>
      <button
        className=' text-red-700 hover:text-red-800'
        onClick={deleteButtonClickHandler}
      >
        <MdOutlineCancel />
      </button>
    </div>
  );
};

export default TodoItem;
