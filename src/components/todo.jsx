import React, { Component } from "react";
import "./todo.css";

class Todo extends Component {
  render() {
    return (
      <div className="todo-container">
        {/* <h4>{this.props.todo.id}</h4> */}
        <h4 key={this.props.todo.title}>{this.props.todo.title}</h4>
        <p key={this.props.todo.desc}>{this.props.todo.desc}</p>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.props.deleteTodo(this.props.todo);
          }}
        >
          Delete
        </button>
        <hr />
      </div>
    );
  }
}

export default Todo;
