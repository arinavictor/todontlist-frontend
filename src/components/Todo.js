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
    return (
        <>
            <h2>{todoTitle}</h2>
            <p>{todoDesc}</p>
        </>
    )
}
