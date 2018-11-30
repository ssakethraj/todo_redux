import React, { Component } from 'react';
import '../App.css';
import Todo from '../Components/Todo';
import TodoList from '../Components/TodoList';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/action'

const names = ["Srinivas", "Natraj", "Rajkumar", "Dileep"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // todos: [],
      value: ''
    }
  }
  handleClick = () => {
    // let arr = this.state.todos;
    // arr.push(this.state.value);
    // this.setState({
    //   todos: arr,
    // })
    this.props.dispatch(addTodo(this.state.value))
  }
  handleChange = (e) => {
    // this.state.value = e.target.value;
    this.setState({
      value: e.target.value,
    })
  }
  render() {
    return (
      <div className="App">
        <Todo click={this.handleClick} change={this.handleChange}/>
        <TodoList todos={this.props.todos}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    todos: state.todo,
  }
}

export default connect(mapStateToProps)(App);