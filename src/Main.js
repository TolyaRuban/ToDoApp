import React from 'react';

import Item from './Item';
import Footer, {COMPLETED} from './Footer';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentToDo: "",
      todos: [
        {
          id: 1,
          text: 1,
          completed: false
        },
        {
          id: 2,
          text: 2,
          completed: true
        }
      ],
      selectedFilter: "All",
      finalTodos: [],
    }

  };

  componentWillMount() {
    this.filter();
  }
  
  createNewTodo = (event) => {
    let key = require("randomstring");
    key = key.generate({
      length: 5,
      charset: 'alphabetic'
    });
    const initToDo = [...this.state.todos, {
      id: key,
      text: this.state.currentToDo,
      completed: false
    }];
    this.setState({
      todos: initToDo,
      currentToDo: ""
    }, this.filter);
    event.preventDefault();
  }

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({
      currentToDo: value
    });
  }

  handleDelete = (index) => {
    const todos = [...this.state.todos],
      upDateTodos = todos.filter((curr, i) => i !== index);
    this.setState({ todos: upDateTodos }, this.filter)
  }

  
  handleChangeStatus = (event) => {
    const todos = [...this.state.todos];
    todos[event.target.id]['completed'] = event.target.checked;
    this.setState({
      todos: todos
    })
  }
  
  filter = () => {
    let finalTodos;
    const todos = [...this.state.todos];
    console.log(todos);
    
    if (this.state.selectedFilter === "Active") {
      finalTodos = todos.filter((elem) => (elem.completed === false));
    } else if (this.state.selectedFilter === COMPLETED) {
      finalTodos = todos.filter((elem) => (elem.completed === true));
    } else {
      finalTodos = todos;
    };

    this.setState({
      finalTodos: finalTodos
    })
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
                  text={elem.text}
                  checked={elem.completed}
                  onChange={this.handleChangeStatus}
                  i={i}
                  handleDelete={this.handleDelete}
                />
              ))}
            </ul>
          </div>
          <Footer 
            selected={this.state.selectedFilter}
            length={this.state.todos.length}
            onclick={this.selectFilter}
          />
        </div>
    )
  }
}

export default Main;