import React from "react";
import ToDoneItem from "./ToDoneItem";

export default function ToDonesContainer(props) {

  return (
    <div className="todones-container">
      <h3>BACKLOG</h3>
      {props.todones.map((currentValue) => {
        return <ToDoneItem key={currentValue.id} todone={currentValue} updateTask={props.updateTask} deleteTask={props.deleteTask}/>;
      })}
    </div>
  );
}
