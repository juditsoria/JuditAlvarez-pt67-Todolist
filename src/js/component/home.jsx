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
    <div className="container justify-content-center text-center border border-info bg-primary">
      <h1 className="text-center">Todos</h1>
      <input type="text" placeholder="What needs to be done?" value={input} onChange={text} />
      <button onClick={addTask}>Add Task</button>
      <ul className="list-unstyled text-center mt-4 me-5">
        {taskList.map((item, index) => (
          <li key={index} className="taskItem text-center me-5">
            <button className="buttonDelete  btn btn-danger "onClick={() => handleDelete(index)}>x</button>
            {item}
          </li>
        ))}
      </ul>
      {taskList.length === 0 ? (<span className="me-5">No tasks. Add a task</span>) : <span className="me-5">{taskList.length} tasks remaining</span>};
    </div>
  );
};

export default Home;
