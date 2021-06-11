import React, { useState } from "react";

const NewTask = (props) => {
  const [userInput, setUserInput] = useState("");

  return (
    <div>
      <input
        placeholder="New Task"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      ></input>
      <button onClick={() => props.addToDo(userInput)}>Add</button>
    </div>
  );
};

export default NewTask;
