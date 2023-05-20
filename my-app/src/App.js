import React from "react";
import ListItems from "./ListItems";
import "./App.css";

function App() {
  return (
    <main className="App">
      <p>Hi</p>
      <ul>
        <ListItems>
          <span>Banana</span>
          <span>Orange</span>
          <span>Pineapple</span>
        </ListItems>
      </ul>
    </main>
  );
}

export default App;
