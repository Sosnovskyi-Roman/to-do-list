// src/components/ToDoItem.js

import React from "react";

function ToDoItem({ todo, index, removeTodo }) {
  return (
    <li>
      {todo.text}
      <button onClick={() => removeTodo(index)}>Remove</button>
    </li>
  );
}

export default ToDoItem;
