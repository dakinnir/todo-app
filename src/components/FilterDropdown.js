import React from "react";
import { useTodo } from "../context/TodoContext";

const FilterDropdown = () => {
  const { filter, changeFilter } = useTodo();

  const onFilterChange = (event) => {
    changeFilter(event.target.value);
  };

  return (
    <select
      id='filter'
      value={filter}
      onChange={onFilterChange}
      className='block w-fit bg-white text-black border border-gray-400 hover:border-gray-500 px-2 py-1 rounded leading-tight focus:outline-none focus:shadow-outline'
    >
      <option value='active'>Active</option>
      <option value='completed'>Completed</option>
      <option value='all'>All</option>
    </select>
  );
};

export default FilterDropdown;
