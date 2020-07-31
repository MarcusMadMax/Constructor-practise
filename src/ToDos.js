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
                    <div className="todo-priority">
                        {this.props.priority}
                    </div>
                    <div className="todo-content">
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
}

export default ToDos;