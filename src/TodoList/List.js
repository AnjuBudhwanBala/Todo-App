import React from "react";

const List = props => {
  console.log("list render");
  //task mapping
  return (
    <ul>
      {props.todoList.map((item, index) => (
        <li key={index} onClick={props.click.bind(this, index)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
