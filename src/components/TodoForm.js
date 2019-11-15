import React, { Component } from 'react'

import '../styles/AddTodoForm.css'

export default class TodoForm extends Component{

    state = {
        newTodo: {
            title: "",
            description: "",
            done: false,
            list_id: this.props.listId
        }
    }

    componentDidMount() {
        if (this.props.defaultTodo){
            this.setState({
                newTodo: this.props.defaultTodo
            })
        }
    }

    handleChange = property => event => {
        const newTodo = this.state.newTodo
        newTodo[property] = event.target.value
        this.setState({ newTodo })
    }

    handleSubmit = (event) => {
          event.preventDefault()

        this.props.handleSubmit( this.state.newTodo )

        this.setState({
            newTodo: {
              title: "", 
              description: "",
            }
           })
        //    this.props.postTodo(this.state.newTodo)
        //    this.props.toggleAddTodoForm()
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
              
                <button 
                    id='form-submit' onClick={this.handleSubmit}
                >
                    {this.props.buttonLabel || "Add Todo"}
                </button>
               </form>
        )
    }
   
}
