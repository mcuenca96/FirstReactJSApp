import React, { Component } from 'react';


class TaskForm extends Component {


    state = {
        title: '',
        description: ''
    }


    onChange = (event) => {
        console.log(event.target.name, event.target.value)
       this.setState({
           [event.target.name]: event.target.value
       })
    }

    onSubmit = (event) => {
        this.props.addTask(this.state.title, this.state.description);
        event.preventDefault();


    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    name="title" 
                    placeholder="Write a task" 
                    onChange={this.onChange} 
                    value={this.state.title}>
                </input>
                <br/>
                <br/>
                <textarea 
                    placeholder="Write a description"
                    name="description"
                    onChange={this.onChange} 
                    value={this.state.description}>

                </textarea>
                <button type="submit">
                    Save a Task
                </button>
            </form>
        )
    }

}

export default TaskForm;