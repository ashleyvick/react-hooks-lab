import React, { useState } from "react";
import NewTask from "./components/AddTodo";
import List from "./components/List";
import "./App.css";

function App() {
  const [todos, setToDos] = useState([]);

  function addToDo(item) {
    const newToDo = [...todos, item];
    setToDos(newToDo);
  }

  return (
    <div>
      <NewTask addToDo={addToDo} />
      <List list={todos} />
    </div>
  );
}

export default App;
