import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";
import Datepicker from "react-tailwindcss-datepicker";

const NewTodoForm = () => {
  const todoContext = useTodo();
  const addTodo = todoContext ? todoContext.addTodo : () => {};
  const [currentTodo, setCurrentTodo] = useState("");
  const [message, setMessage] = useState("");

  const [dateValue, setDateValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    setDateValue(newValue);
  };

  // creating new todo
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (!dateValue.startDate) {
      setMessage("Please select a valid date.");
      return;
    }
    const newTodo = {
      id: crypto.randomUUID(),
      title: currentTodo.charAt(0).toUpperCase() + currentTodo.slice(1),
      done: false,
      date: new Date(dateValue.startDate),
    };
    setMessage("");
    addTodo(newTodo);
    setCurrentTodo("");
    setDateValue({ startDate: null, endDate: null });
  };

  return (
    <form className='flex flex-col gap-2 mt-2'>
      <input
        type='text'
        value={currentTodo}
        onChange={(event) => {
          setCurrentTodo(event.target.value);
        }}
        className='bg-gray-700 border-[2px] border-gray-700 outline-none rounded-[4px] px-2 py-[4px]'
      />
      <Datepicker
        showShortcuts={true}
        asSingle={true}
        minDate={new Date()}
        value={dateValue}
        onChange={handleValueChange}
      />
      {message.length > 0 && <p className='text-sm text-red-500'>{message}</p>}
      <button
        onClick={submitTodoHandler}
        disabled={currentTodo.length < 5}
        className={`text-lg text-sky-400 border-[1px] border-sky-800 rounded-[4px] p-[2px]  ${
          currentTodo.length >= 5 &&
          "hover:text-white hover:bg-sky-800 active:bg-sky-900"
        }`}
      >
        Add
      </button>
    </form>
  );
};

export default NewTodoForm;
