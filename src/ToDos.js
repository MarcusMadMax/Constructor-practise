import React, { Component } from 'react'

class ToDos extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="todo">
                <div className="todo-body">
                    <i className="far fa-times-circle todo-remove"></i>
                    <div className="todo-content">
                        <input type="text" className="form-control" value="Call Peter" />
                    </div>
                    <div className="todo-priority">
                        Important
                    </div>
                </div>
            </div>
        )
    }
}

export default ToDos;