import React from 'react'
import Todo from './Todo'
import '../styles/List.css'
import AddTodoForm from './AddTodoForm'

export default function List({name, todos, deleteList, id, toggleAddTodoForm, isAddTodoFormShowing, postTodo}) {
  const displayTodos = () => {
    return todos.map(todo => {
        return (<div key={todo.id}>
            <Todo 
                title={todo.title}
                description={todo.description}
            />
        </div>
         
        )
    })
  }
    return (
        <div className='list-card'>
            <h1>{name}</h1>
            <div className='todo-items'>
              {displayTodos()}
            </div>
            <span>
                 <i className="fa fa-times-circle" onClick={() => deleteList(id)}></i>          
            </span>
            <button onClick={toggleAddTodoForm}>Add a todo</button>
            {
                isAddTodoFormShowing
                ? <AddTodoForm postTodo={postTodo} listId={id}/>
                : false
            }

        </div>
    )
}
