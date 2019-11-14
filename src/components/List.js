import React from 'react'
import Todo from './Todo'
import '../styles/List.css'

export default function List({name, todos, deleteList, editTodo, id}) {
  
    return (
        <div className='list-card'>
            <h1>{name}</h1>
            <div className='todo-items'>
               <Todo todos={todos} editTodo={editTodo}/>
            </div>
            <span>
                 <i className="fa fa-times-circle" onClick={() => deleteList(id)}></i>          
            </span>
            <button>Add a todo</button>

        </div>
    )
}
