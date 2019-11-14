import React from 'react'

export default function Todo(props) {
    
    return (
        <div className='todo-info'>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}
