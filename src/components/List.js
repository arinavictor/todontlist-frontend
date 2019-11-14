import React from 'react'
import Todo from './Todo'
import '../styles/List.css'

export default function List({name, todos, deleteList, id, toggleAddTodoForm, isAddTodoFormShowing}) {
  
    return (
        <div className='list-card'>
            <h1>{name}</h1>
            <div className='todo-items'>
               <Todo todos={todos}/>
            </div>
            <span>
                 <i className="fa fa-times-circle" onClick={() => deleteList(id)}></i>          
            </span>
            <button onClick={toggleAddTodoForm}>Add a todo</button>
            {
                isAddTodoFormShowing
                ? console.log("True")
                : console.log("false")
            }

        </div>
    )
}
