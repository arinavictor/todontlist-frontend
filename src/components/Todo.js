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
            <h2 className='todo-title'>{title}</h2>
            {/* <p>{description}</p> */}
            <span className='todo-action-buttons'>
                <i className="fa fa-pencil"></i>
                <i className="fa fa-trash" onClick={deleteTodo} ></i>
            </span>
        </div>
    )
}
