import React from 'react'
import '../styles/Todo.css'
export default function Todo(props) {
    const {title, description} = props.todo

    return (
        <div className='todo-info'>
            <h2>{title}</h2>
            {/* <p>{description}</p> */}
            <i className="fa fa-trash"></i>
        </div>
    )
}
