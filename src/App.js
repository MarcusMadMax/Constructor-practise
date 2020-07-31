import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <div className="wrap">
      <div className="container">
        <div className="todos">
          <div className="todo">
            <div className="todo-body">
              <i className="far fa-times-circle todo-remove"></i>
              <div className="todo-content">
                Get milk
              </div>
              <div className="todo-priority">
                Important
              </div>
            </div>
          </div>
          <div className="todo">
            <div className="todo-body">
              <i className="far fa-times-circle todo-remove"></i>
              <div className="todo-content">
                Clean room
              </div>
              <div className="todo-priority">
                Urgent
              </div>
            </div>
          </div>
          <div className="todo">
            <div className="todo-body">
              <i className="far fa-times-circle todo-remove"></i>
              <div className="todo-content">
                Water the plants
              </div>
              <div className="todo-priority">
                <input type="text" className="form-control form-control-sm" value="Important"/>
              </div>
            </div>
          </div>
  
          <div className="todo">
            <div className="todo-body">
              <i className="far fa-times-circle todo-remove"></i>
              <div className="todo-content">
                <input type="text" className="form-control" value="Call Peter"/>
              </div>
              <div className="todo-priority">
                Important
              </div>
            </div>
          </div>
      
          <div className="todo new-todo">
            <form className="todo-body">
                <div className="form-group">
                  <label htmlFor="content-input">Content</label>
                  <input type="text" className="form-control" id="content-input"/>
                </div>
  
                <div className="form-group">
                  <label htmlFor="priority-input">Priority</label>
                  <input type="text" className="form-control" id="priority-input"/>
                </div>
          
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
      )
  }

}

export default App;
