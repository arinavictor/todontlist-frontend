import React, { Component } from 'react'

export default class AddTodoForm extends Component{

    state = {
        newTodo: {
            title: "",
            description: "",
        }
    }

    handleChange = property => event => {
        const newTodo = this.state.newTodo
        newTodo[property] = event.target.value
        this.setState({ newTodo })
        console.log("state change", this.state.newTodo)
    }

    render() {
        return (
            <form className='list-form'>
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
              
                <button id='form-submit' >Create List</button>
               </form>
        )
    }
   
}
