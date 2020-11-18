import React, { Component } from 'react'
import { addItems } from './redux/actions/addItems'
import {connect} from "react-redux"


export class AddNewTask extends Component {
    constructor(props) {
        super(PushSubscriptionOptions)
        this.state = {
            name: ''
        }
        this.onChangeTask = this.onChangeTask.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }
    
    onChangeTask(e) {
        e.preventDefault()
        this.setState({
            name: e.target.value
        })
    }
    submitHandler(e) {
        e.preventDefault()
        addItems(this.state.name)
    }

    render() {
        
        return (
            <form class="form-group" onSubmit={this.submitHandler}>
                <label htmlFor="task" className="text text-info">Add New Task</label>
                <input className="form-control mb-3" type="text" onChange={this.onChangeTask}/>
                <button className="btn btn-primary">Add</button>
            </form>
        )
    }

}

export default connect()(AddNewTask)
