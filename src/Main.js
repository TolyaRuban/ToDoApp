import React from 'react';

import Item from './Item';
import Footer, { ACTIVE, COMPLETED } from './Footer';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentToDo: "",
      todos: [],
      selectedFilter: "All",
      finalTodos: [],
      counter: 0,
    }

  };

  componentWillMount() {
    const todos = JSON.parse(localStorage.getItem("allTodos")) || [];
    this.setState({ todos }, this.filter);
  }

  createNewTodo = (event) => {
    event.preventDefault();
    const key = require("randomstring").generate({
      length: 5,
      charset: 'alphabetic'
    });

    this.setState((prevState) => ({
      todos: [...prevState.todos, {
        id: key,
        text: this.state.currentToDo,
        completed: false
      }],
      currentToDo: ""
    }), this.filter);
  }

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({
      currentToDo: value
    });
  }

  handleDelete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((curr) => curr.id !== id)
    }), this.filter)
  }

  handleClickDeleteAll = (event) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(elem => elem.completed === false)
    }), this.filter)
  }

  handleChangeStatus = (ToDoItem) => {
    this.setState(prevState => {
      prevState.todos.map(item => {
        if (item.id === ToDoItem) { item.completed = !item.completed };
        return item;
      })
    }, this.filter);
  }

  counterActiveTodos = () => {
    const counter = this.state.todos.filter((elem) => (elem.completed === false)).length;
    this.setState({ counter });
  }

  filter = () => {
    let finalTodos;

    if (this.state.selectedFilter === ACTIVE) {
      finalTodos = this.state.todos.filter((elem) => (elem.completed === false));
    } else if (this.state.selectedFilter === COMPLETED) {
      finalTodos = this.state.todos.filter((elem) => (elem.completed === true));
    } else {
      finalTodos = this.state.todos;
    };

    this.counterActiveTodos();
    localStorage.setItem('allTodos', JSON.stringify(this.state.todos));
    this.setState({ finalTodos })
  }

  selectFilter = (event) => {
    this.setState({
      selectedFilter: event.target.name
    }, this.filter);
  }

  render() {
    return (
      <div className="todos">
        <form onSubmit={this.createNewTodo}>
          <input
            className="todos__input"
            type="text"
            value={this.state.currentToDo}
            placeholder="What need to be done?"
            onChange={this.handleChange}
          />
        </form>
        <div className="todo-list">
          <ul>
            {this.state.finalTodos.map((elem, i) => (
              <Item
                id={elem.id}
                key={elem.id}
                text={elem.text}
                checked={elem.completed}
                onChange={this.handleChangeStatus}
                handleDelete={this.handleDelete}
              />
            ))}
          </ul>
        </div>
        <Footer
          selected={this.state.selectedFilter}
          length={this.state.todos.length}
          counter={this.state.counter}
          onclick={this.selectFilter}
          onDeleteClick={this.handleClickDeleteAll}
        />
      </div>
    )
  }
}

export default Main;