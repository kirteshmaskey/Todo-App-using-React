import React, { Component } from "react";
import { useState } from "react";
import "./getTodo.css";

// class GetTodo extends Component {
//   render() {
function GetTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!title && !desc) {
      alert("Please enter title and description");
    } else if (!title) {
      alert("Please enter title");
    } else if (!desc) {
      alert("Please enter description");
    } else {
      props.addNewTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div>
      <div className="user-input">
        <label htmlFor="new-user-todo-title" className="">
          Add new todo task
        </label>
        <form onSubmit={addTodo}>
          <input
            type="text"
            id="new-todo-title"
            className="input input_lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Todo title"
          />
          <input
            type="text"
            id="new-todo-desc"
            className="input input_lg"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Todo description"
          />
          <button type="submit" className="input input_lg btn-success">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
}

export default GetTodo;
