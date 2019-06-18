import React from 'react';

import Item from './Item';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentToDo: "",
      todos: [],
      id: 0,
    }

  };

  handleChange = async (event) => {
    const value = event.target.value;
    await this.setState({
      currentToDo: value
    });
    console.log(value);
  }

  handleKeyPress = async (event) => {
    if (event.which === 13) {
      event.preventDefault();
      // let key = Math.round(Math.random() * (100 - 1) + 1);
      console.log("enter");
      const initToDo = [...this.state.todos, {
        id: this.state.id,
        text: this.state.currentToDo,
        completed: false
      }]
      await this.setState({
        todos: initToDo,
        currentToDo: "",
        id: this.state.id + 1
      });
      // console.log(this.state.currentToDo);
      console.log(this.state.todos);
    };
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
        <div className="todos__list">
          <ul>
            {this.state.todos.map((elem) => (
              <Item 
                id={this.state.id}
                text={elem.text}
              />
              // <li key={elem.text}>{elem.text}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Main;