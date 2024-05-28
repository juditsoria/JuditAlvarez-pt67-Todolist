import React, { useState } from "react";

//create your first component
const Home = () => {
  const [input, setInput] = useState("");
  const [taskList, setTaskList] = useState(["aprender Java Script", "Aprender Python"]);

  const text = (event) => {
    setInput(event.target.value);
  };

  const addTask = () => {
    if (input) {
      setTaskList([...taskList, input]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    const newArr = [];
    for (let i = 0; i < taskList.length; i++) {
      if (i !== index) {
        newArr.push(taskList[i]);
      }
    }
    setTaskList(newArr);
  };

  return (
    <div>
      <input type="text" value={input} onChange={text} />
      <button onClick={addTask}>Add Task</button>
      <ul className="list-unstyled">
        {taskList.map((item, index) => (
          <li key={index} className="d-flex align-items-center">
            <button onClick={() => handleDelete(index)}>x</button>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
