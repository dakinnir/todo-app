import React from "react";
import { useTodo } from "../context/TodoContext";

const SortDropdown = () => {
  const { sort, changeSort } = useTodo();

  const onSortChange = (event) => {
    changeSort(event.target.value);
  };
  console.log(sort);

  return (
    <select
      id='filter'
      value={sort}
      onChange={onSortChange}
      className='block w-fit bg-white text-black border border-gray-400 hover:border-gray-500 px-2 py-1 rounded leading-tight focus:outline-none focus:shadow-outline'
    >
      <option value='alphabetically'>Alphabetically</option>
      <option value='dateAsc'>Date Ascending</option>
      <option value='dateDesc'>Date Descending</option>
    </select>
  );
};

export default SortDropdown;
