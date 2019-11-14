import React, { Component } from 'react'
import Todo from './Todo'
import '../styles/List.css'
import AddTodoForm from './AddTodoForm'

export default class List extends Component{

    state = {
        isAddTodoFormShowing: false
    }
   
render() {

    const { name, todos, deleteList, listId, postTodo} = this.props
    const {isAddTodoFormShowing} = this.state

    const toggleAddTodoForm = () => {
       this.setState({isAddTodoFormShowing: !isAddTodoFormShowing})
      }

    const displayTodos = () => {
        return todos.map(todo => {
            if (todo.list_id === +listId) {
                return (<div key={todo.id}>
                    <Todo todo={todo} />
                </div>  
                )
            }
        })
      }
        return (
            <div className='list-card'>
                <h1>{name}</h1>
                <div className='todo-items'>
                  {displayTodos()}
                </div>
                <span>
                     <i className="fa fa-times-circle" onClick={() => deleteList(listId)}></i>          
                </span>
                <button onClick={toggleAddTodoForm}>Add a todo</button>
                {
                    isAddTodoFormShowing
                    ? <AddTodoForm postTodo={postTodo} listId={listId}/>
                    : false
                }
    
            </div>
        )

}
  
}
