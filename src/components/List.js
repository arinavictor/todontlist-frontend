import React from 'react'
import Todo from './Todo'
import '../styles/List.css'

export default function List({name, todos}) {
    
    return (
        <div className='list-card'>
            <h1>{name}</h1>
            <div className='todo-items'>
               <Todo todos={todos}/>
            </div>
        </div>
    )
}
