import React from 'react'

export default function Todo(props) {

    const todoTitle = props.todos.map(todo => {
        return(
            todo.title
        )
    })

    const todoDesc = props.todos.map(todo => {
        return(
            todo.description
        )
    })

    const todoId = props.todos.map(todo => {
        return(
            todo.id
        )
    })
    return (
        <div className='todo-info'>
            <h2 onClick={() => props.editTodo(todoId)}>{todoTitle}</h2>
            <p>{todoDesc}</p>
        </div>
    )
}
