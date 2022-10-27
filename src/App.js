import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import GetTodo from "./components/getTodo.jsx";
import TodoList from "./components/todoList.jsx";

function App() {
  const addNewTodo = (title, desc) => {
    let id;
    if (todos.length === 0) {
      id = 1;
    } else {
      id = todos[todos.length - 1] + 1;
    }
    const newTodo = {
      id: id,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (todo) => {
    // console.log("Inside: ", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <GetTodo addNewTodo={addNewTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
