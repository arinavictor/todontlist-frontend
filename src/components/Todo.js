import React from 'react'
import '../styles/Todo.css'
export default function Todo(props) {

    const deleteTodo = () => {
        fetchDeleteTodo(id)
    }

    const editTodo = () => {
        fetchEditTodo()
    }
    const {title, id} = props.todo
    const {fetchDeleteTodo, fetchEditTodo} = props

    return (
        <div className='todo-info'>
            <h2 className='todo-title'>{title}</h2>
            <span className='todo-action-buttons'>
                <i className="fa fa-pencil" onClick={editTodo}></i>
                <i className="fa fa-trash" onClick={deleteTodo} ></i>
            </span>
        </div>
    )
}
