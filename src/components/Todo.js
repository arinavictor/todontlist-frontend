import React from 'react'
import '../styles/Todo.css'
export default function Todo(props) {

    const deleteTodo = () => {
        fetchDeleteTodo(id)
    }
    const {title, description, id} = props.todo
    const {fetchDeleteTodo} = props

    return (
        <div className='todo-info'>
            <h2>{title}</h2>
            {/* <p>{description}</p> */}
            <i className="fa fa-trash" onClick={deleteTodo} ></i>
        </div>
    )
}
