import React, { Component } from 'react'

import '../styles/AddTodoForm.css'

export default class AddTodoForm extends Component{

    state = {
        newTodo: {
            title: "",
            description: "",
            done: false,
            list_id: this.props.listId
        }
    }

    handleChange = property => event => {
        const newTodo = this.state.newTodo
        newTodo[property] = event.target.value
        this.setState({ newTodo })
    }

    handleSubmit = (event) => {
        event.preventDefault()    
        this.props.postTodo(this.state.newTodo)

    }

    render() {
        return (
            <form className='add-todo-form'>
                <input 
                    type='text'
                    placeholder='Todo Title'
                    value={this.state.newTodo.title}
                    onChange={this.handleChange("title")}
                />

                <input 
                    type='text'
                    placeholder="Todo Description"
                    value={this.state.newTodo.description}
                    onChange={this.handleChange("description")}
                />
              
                <button id='form-submit' onClick={this.handleSubmit}>Create Todo</button>
               </form>
        )
    }
   
}
