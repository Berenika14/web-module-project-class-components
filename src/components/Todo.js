import React from "react";

class Todo extends React.Component {
  constructor() {
    super();
  }
  handleClick = () => {
    this.props.handleToggleTodo(this.props.task);
  };
  render() {
    return (
      <div
        onClick={this.handleClick}
        className={`task${this.props.task.completed ? " completed" : ""}`}
      >
        <p
          style={{
            textDecoration: this.props.task.completed ? "line-through" : "none",
          }}
        >
          {this.props.task.task}
        </p>
      </div>
    );
  }
}

export default Todo;
