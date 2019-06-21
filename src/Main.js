import React from 'react';

import Item from './Item';

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
        }
      ],

    }

  };

  handleChange = async (event) => {
    const { name, value, type, checked } = event.target

    await this.setState({
      currentToDo: value
    });
    console.log(value);
  }

  handleKeyPress = async (event) => {
    if (event.which === 13) {
      event.preventDefault();
      let key = require("randomstring");
      key = key.generate({
        length: 5,
        charset: 'alphabetic'
      });
      console.log(key);
      const initToDo = [...this.state.todos, {
        id: key,
        text: this.state.currentToDo,
        completed: false
      }]
      await this.setState({
        todos: initToDo,
        currentToDo: ""
        
      });
      // console.log(this.state.currentToDo);
      console.log(this.state.todos);
    };
  }

  handleChangeStatus = async (event) => {
    console.log(event.target.id);
    // const todos = this.state.todos.map(el => {
    //   if  (el.id === event.target.id) {
    //     if (!el.completed){
    //       el.completed = true;
    //     } else {
    //       el.completed = false;
    //     }
    //   }
    //   return el;
    // });
    const todos = [...this.state.todos];
    todos[event.target.id]['completed'] = event.target.checked;
    await this.setState({
      todos: todos
    })
    console.log(todos);
  }

  

  render() {

    return (
      <div className="todos">
        <input
          type="text"
          value={this.state.currentToDo}
          placeholder="What need to be done?"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <div className="todo-list">
          <ul>
            {this.state.todos.map((elem, i) => (
              <Item 
                id={elem.id}
                text={elem.text}
                checked={elem.completed}
                onChange={this.handleChangeStatus}
                i={i}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Main;