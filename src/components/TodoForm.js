import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddTodo(this.state.input);
  };
  handleToggle = () => {
    console.log("Toggle");
    this.props.handleToggleTodo(this.state.item);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Todo"
            onChange={this.handleChanges}
          />
          <br />
          <button>Add Todo</button>
          <br />
          <button onClick={this.handleToggle}>Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
