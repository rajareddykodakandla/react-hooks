import { useState, Fragment, memo } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <CardWrapper>
        <div>
          <h1>Hi there</h1>
        </div>
      </CardWrapper>
    </div>
  );
}

function CardWrapper({ children }) {
  console.log("children", children);
  return <div style={{ border: "2px solid black" }}>{children}</div>;
}

export default App;
