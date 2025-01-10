import { useState, Fragment, memo } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("raja");

  const changeName = () => {
    setName(() => {
      return parseInt(Math.random() * 10);
    });
  };
  return (
    <div>
      <button onClick={changeName}>Click me to change the name</button>
      <Header name={name}></Header>
      <Header name="Reddy" />
      <Header name="Reddy" />
      <Header name="Reddy" />
      <Header name="Reddy" />
      <Header name="Reddy" />
      <Header name="Reddy" />
    </div>
  );
}

const Header = memo(function Header({ name }) {
  return (
    <div>
      <h1>My name is {name}</h1>
    </div>
  );
});

export default App;
