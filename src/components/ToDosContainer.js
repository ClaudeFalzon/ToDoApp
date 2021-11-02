import React from "react";
import ToDoItem from "./ToDoItem";

export default class ToDosContainer extends React.Component {
  state = {
    inputValue: ""
  };
  getInputValue = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  addNewTask = (e) => {
    e.preventDefault();
    if (this.state.inputValue.trim() !== "") {
      this.props.addTask(this.state.inputValue);
      this.setState({ inputValue: "" });
    } else {
      alert("please write something in input field");
    }
  };

  render() {
    return (
      <div className="todos-container">
        <form className="todo-form" onSubmit={this.addNewTask}>
          <label className="input-item">
            <input
              type="text"
              name="todo"
              value={this.state.inputValue}
              onChange={this.getInputValue}
            />
          </label>

          <input type="submit" className="btn" value="ADD" />
        </form>

        <div className="todos">
          <h3>ToDo</h3>

          {this.props.todos.map((currentValue) => {
            return (
              <ToDoItem
                key={currentValue.id}
                todo={currentValue}
                updateTask={this.props.updateTask}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
