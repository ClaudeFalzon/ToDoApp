import React from "react";
import Navigation from "./components/Navigation";
import ToDonesContainer from "./components/ToDonesContainer";
import ToDosContainer from "./components/ToDosContainer";
import "./css/App.scss";
import { v4 as uuid } from "uuid";
import About from "./components/About";

class App extends React.Component {
  state = {
    todoList: [
      /*   { text: "start react prjoect", done: true },
      { text: "walk with dog", done: false },
      { text: "take breakfast", done: true },
      { text: "live coding", done: true },
      { text: "watch movie", done: false },
      { text: "take bath", done: false } */
    ],
    page: "home"
  };

  switchPageToAbout = () => {
    this.setState({ page: "about" });
  };

  switchPageToHome = () => {
    this.setState({ page: "home" });
  };

  addTask = (todotext) => {
    let task = { id: uuid(), text: todotext, done: false };
    this.setState({ todoList: [...this.state.todoList, task] });
  };

  updateTask = (id) => {
    let updatedItems = this.state.todoList.map((currentValue) => {
      if (currentValue.id === id) {
        currentValue.done = currentValue.done ? false : true;
        /* currentValue.done = !currentValue.done ; */

        return currentValue;
      } else {
        return currentValue;
      }
    });
    this.setState({ todoList: updatedItems });
  };

  deleteTask = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((item) => {
        return item.id !== id;
      })
    });
  };

  render() {
    let todos = this.state.todoList.filter((item) => {
      return item.done === false; //!item.done
    });
    let todones = this.state.todoList.filter((item) => {
      return item.done === true;
    });

    return (
      <div className="app">
        <Navigation
          switchPageToAbout={this.switchPageToAbout}
          switchPageToHome={this.switchPageToHome}
        />
        {this.state.page === "home" ? (
          <div>
            {" "}
            <ToDosContainer
              todos={todos}
              addTask={this.addTask}
              updateTask={this.updateTask}
            />
            <ToDonesContainer
              todones={todones}
              updateTask={this.updateTask}
              deleteTask={this.deleteTask}
            />
          </div>
        ) : (
          <About />
        )}
      </div>
    );
  }
}

export default App;
