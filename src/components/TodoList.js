import React from "react";
import { useTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoContext = useTodo();
  const { filteredTodos, markAsDone, deleteTodo, sortedTodos } = todoContext; // ? todoContext.filteredTodos : [];
  return (
    <div>
      {filteredTodos.length === 0 ? (
        <p>No Todos</p>
      ) : (
        <ul>
          {sortedTodos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                markAsDone={markAsDone}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
