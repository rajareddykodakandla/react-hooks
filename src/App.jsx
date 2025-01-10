import { useState, Fragment, memo } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "gym",
      description: "go to gym",
    },
    {
      id: 2,
      title: "eat",
      description: "eat food",
    },
  ]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos((previousTodos) => {
      return [
        ...previousTodos,
        { id: Math.random(), title: Math.random(), description: Math.random() },
      ];
    });
  };

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          ></Todo>
        );
      })}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}

export default App;
