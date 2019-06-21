import React from 'react';

import Item from './Item';
import Footer from './Footer';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentToDo: "",
      todos: [
        // {
        //   id: 1,
        //   text: 1,
        //   completed: false
        // }
      ],
      selectedFilter: "All",
      finalTodos: [],
    }

  };

  handleChange = async (event) => {
    const { value } = event.target;

    await this.setState({
      currentToDo: value
    });
    console.log(value);
  }

  handleDelete = (index) => {
    // if (event.target === "div.list-item__delete")
    const todos = [...this.state.todos],
      upDateTodos = todos.filter((curr, i) => i !== index);
    this.setState({ todos: upDateTodos })
    // console.log(event.target);
    console.log(index);
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
  
  filter = async () => {
    let finalTodoss;
    const todos = [...this.state.todos];
    
    if (this.state.selectedFilter === "Active") {
      finalTodoss = todos.filter((elem) => (elem.completed === false));
      console.log(this.state.selectedFilter);
      console.log(todos)
    } else /* (this.selectedFilter === "Completed") */ {
      finalTodoss = todos.filter((elem) => (elem.completed === true));
      console.log(this.finalTodoss);
    } /* else {
      finalTodoss = todos;
      console.log(this.state.selectedFilter);
    }; */

    await this.setState({
      finalTodos: finalTodoss
    })
    console.log(this.state.finalTodos)
  }

  selectFilter = async (event) => {
    await this.setState({
      selectedFilter: event.target.name
    });
    this.filter();
  }


  render() {  
    return (
      <>
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
        
      </>
    )
  }
}

export default Main;