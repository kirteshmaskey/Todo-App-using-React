import React, { Component, useState } from "react";
import Todo from "./todo";
import "./todoList.css";

class TodoList extends Component {
  render() {
    if (this.props.todos.length === 0) {
      return <h3>No task to be done</h3>;
    }
    return (
      <div>
        <h3>{this.props.todos.length} task ramaining</h3>
        {/* <hr /> */}
        {this.props.todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={this.props.deleteTodo}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
