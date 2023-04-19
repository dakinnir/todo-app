import React from "react";
import CountTracker from "./components/CountTracker";
import FilterDropdown from "./components/FilterDropdown";
import NewTodoForm from "./components/NewTodoForm";
import SortDropdown from "./components/SortDropdown";

import TodoList from "./components/TodoList";
import { TodoContextProvider } from "./context/TodoContext";

const App = () => {

  return (
    <TodoContextProvider>
      <div className='flex justify-center h-screen px-10 overflow-hidden relative'>
        <div className='w-[600px]'>
          <div className='sticky top-0 bg-[#2a2a2a] z-10 gap-10 pt-5 pb-2 items-center'>
            <h2 className='text-lg text-slate-100'>Enter Todo Item</h2>
            <NewTodoForm />
            {/* Todo list header & Options */}
            <div className='flex justify-between items-center mt-4'>
              <h1 className='text-3xl font-bold'>Todo List</h1>
              <div className='flex text-sm gap-2 flex-col justify-end items-end'>
                <div className='flex gap-2 relative items-center'>
                  <label htmlFor='filter'>Filter</label>
                  <FilterDropdown />
                </div>
                <div className='flex gap-2 relative items-center'>
                  <label htmlFor='filter'>Sort by</label>
                  <SortDropdown />
                </div>
              </div>
            </div>
          </div>
          {/* Todo list */}
          <div className='max-h-[460px] mt-5 bg-gray-800 text-white p-5 rounded-md overflow-scroll'>
            <TodoList />
          </div>
          {/* Active & completed todo count tracker */}
          <CountTracker />
        </div>
      </div>
    </TodoContextProvider>
  );
};

export default App;
