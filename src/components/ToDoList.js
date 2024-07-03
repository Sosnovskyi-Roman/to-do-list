// src/components/ToDoList.js

import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";

function ToDoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ToDoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
