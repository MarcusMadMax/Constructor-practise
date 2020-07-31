import React, { Component } from 'react'

class NewToDoForm extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className="todo new-todo">
                <form className="todo-body">
                    <div className="form-group">
                        <label htmlFor="content-input">Content</label>
                        <input type="text" className="form-control" id="content-input" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="priority-input">Priority</label>
                        <input type="text" className="form-control" id="priority-input" />
                    </div>

                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }
}

export default NewToDoForm;