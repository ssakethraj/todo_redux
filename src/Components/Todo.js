import React, { Component } from 'react';
import '../App.css';

const names = ["Srinivas", "Natraj", "Rajkumar", "Dileep"];

class Todo extends Component {
  render() {
    return (
      <div className="App">
          <input type="text" onChange={this.props.change}/>
          <button onClick={this.props.click}>add todo</button>
      </div>
    );
  }
}

export default Todo;
