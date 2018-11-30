import React, { Component } from 'react';
import '../App.css';

const names = ["Srinivas", "Natraj", "Rajkumar", "Dileep"];

class TodoList extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.todos.map((todo,i) => {
              return <li key={i}>{todo}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
