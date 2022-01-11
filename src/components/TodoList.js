import React from "react";
import Todo from "./Todo";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.tasks.map((task) => {
          return (
            <Todo
              key={task.id}
              task={task}
              handleToggleTodo={this.props.handleToggleTodo}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
