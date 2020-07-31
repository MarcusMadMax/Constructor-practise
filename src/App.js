import React, { Component } from 'react'
import NewToDoForm from './NewToDoForm';
import ToDos from './ToDos';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          id: 1,
          content: 'Warer plants',
          priority: 'Done'
        },
        {
          id: 2,
          content: 'Feed cat',
          priority: 'not so important'
        },
        {
          id: 3,
          content: 'Plant a tree',
          priority: 'Important'
        },
      ]
    }
  }


  addToDo = (data) => {
    var newToDo = {
      id:Date.now(),
      ...data
    }

    var newList = [newToDo, ...this.state.todos]
    this.setState({todos:newList})
  }

  removeToDo = () => {

  }

  updateToDo = () => {

  }


  render() {
    return (
      <div className="wrap">
        <div className="container">
          <div className="todos">
            <NewToDoForm addToDo={this.addToDo}/>
            {
              this.state.todos.map((todo) => {

                var todoProps = {
                  key: todo.id,
                  ...todo
                }

                return (
                  <ToDos {...todoProps} />
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }

}

export default App;
