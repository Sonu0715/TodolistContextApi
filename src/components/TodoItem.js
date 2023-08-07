import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoProvider";
import './todoItem.css'

const TodoItem = ({ todo }) => {
  const [toggleUpdate, setToggleUpdate] = useState(false);
  const todoContext = useContext(TodoContext);
  const [name, setName] = useState(todo.title);
  return (
    <div className="item">
      <div className="id">#{todo.id[0]}</div>
      {toggleUpdate ? (
        <input
          className="listItem"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <div className="title">{todo.title}</div>
      )}
      <div className="buttons">
        <button
          className="edit"
          onClick={() => {
            setToggleUpdate(!toggleUpdate);
            if (name !== "") {
              todoContext.updateTodo({
                id: todo.id,
                title: name,
              });
              setName("");
            }
          }}
        >
          {toggleUpdate ? "UPDATE" : "EDIT"}
        </button>
        <button
          className="delete"
          onClick={() => {
            todoContext.removeTodo(todo.id);
          }}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
