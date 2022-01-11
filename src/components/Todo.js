import React from "react";

class Todo extends React.Component {
  render() {
    return <div>{this.props.task.task}</div>;
  }
}

export default Todo;
