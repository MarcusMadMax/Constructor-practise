import React, { Component } from 'react'
import NewToDoForm from './NewToDoForm';
import ToDos from './ToDos';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="wrap">
        <div className="container">
          <div className="todos">
            <NewToDoForm />
            <ToDos />
          </div>
        </div>
      </div>
    )
  }

}

export default App;
