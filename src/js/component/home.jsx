import React, { useState } from "react";

//create your first component
const Home = () => {
  const [input, setInput] = useState("");
  const [tasklist, setTaskList] = useState(["jorge", "judit"]);

  const text = (event) => {
    setInput(event.target.value);
  };

  const addTask = () => {
    if (input.trim()) {
      setTaskList([...tasklist, input]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
		const newArr = []
		for (let i = 0; i < taskLitss.length; i++) {
			if (i !== index) {
				newArr.push(taskLitss[i])
			}
		}
		console.log(newArr)
		setTaskLitss(newArr)
	}

  return (
    <div>
      <input type="text" value={input} onChange={text} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasklist.map((item, index) => (
          <React.Fragment key={index}>
            <button onClick={() => handleDelete(index)}>{item}x</button>
            <li>{item}</li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Home;
