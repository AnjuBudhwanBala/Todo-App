import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  //change Input
  const changeHandler = event => {
    setTask(event.target.value);
  };

  //Add Task
  const addTaskHandler = () => {
    if (task.trim() !== "") {
      setTodoList(todoList.concat(task));
      //to clear Input field
      setTask("");
    }
  };

  //remove Tasks
  const removeHandler = index => {
    const newArr = todoList.filter((item, itemIndex) => {
      return itemIndex !== index;
    });

    setTodoList(newArr);
  };

  //task mapping
  const taskList = todoList.map((item, index) => {
    return (
      <li key={index} onClick={removeHandler.bind(this, index)}>
        {item}
      </li>
    );
  });

  return (
    <div className="Todo">
      <input
        type="text"
        id="mainInput"
        placeholder="Add Task"
        onChange={changeHandler}
        value={task}
      />
      <button onClick={addTaskHandler}>Add </button>
      <ul>{taskList}</ul>
    </div>
  );
};

export default Todo;
