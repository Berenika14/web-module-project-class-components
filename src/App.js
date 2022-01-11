import React from "react";
import ToDoList from "./components/TodoList";
import ToDoForm from "./components/TodoForm";
const tasks = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks,
    };
  }
  handleAddTodo = (toDoName) => {
    const newToDo = {
      task: toDoName,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newToDo],
    });
  };

  handleToggleTodo = (selectedTodo) => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter((item) => {
        if (item.id === selectedTodo.id) {
          return false;
        } else {
          return true;
        }
      }),
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList tasks={this.state.tasks} />
        <ToDoForm
          handleAddTodo={this.handleAddTodo}
          handleToggleTodo={() =>
            this.state.tasks.forEach(this.handleToggleTodo)
          }
        />
      </div>
    );
  }
}

export default App;
