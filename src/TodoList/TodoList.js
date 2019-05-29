import React, { useState, useMemo } from "react";
import List from "./List";
import "./TodoList.css";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  //change Input
  const changeHandler = event => {
    setTask(event.target.value);
  };

  //create Task
  const addTaskHandler = e => {
    e.preventDefault();

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

  return (
    <div className="Todo">
      <form onSubmit={addTaskHandler}>
        <input
          type="text"
          placeholder="Add Task"
          onChange={changeHandler}
          value={task}
        />
        <button>Add </button>
      </form>
      {useMemo(
        () => (
          <List todoList={todoList} click={removeHandler} />
        ),
        [todoList]
      )}
    </div>
  );
};

export default TodoList;
