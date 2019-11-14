import React from 'react'

export default function Todo(props) {
    const {title, description} = props.todo

    return (
        <div className='todo-info'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
