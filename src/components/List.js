import React, { Component } from 'react'
import Todo from './Todo'
import '../styles/List.css'
import AddTodoForm from './AddTodoForm'

export default class List extends Component{

    state = {
        isAddTodoFormShowing: false
    }
   
render() {

    const { name, todos, deleteList, listId, postTodo, editTodo, deleteTodo} = this.props
    const {isAddTodoFormShowing} = this.state

    const toggleAddTodoForm = () => {
       this.setState({isAddTodoFormShowing: !isAddTodoFormShowing})
      }

    const displayTodos = () => {
        return todos.map(todo => {
            if (todo.list_id === +listId) {
                return (<ol key={todo.id}>
                    <Todo todo={todo} fetchDeleteTodo={deleteTodo} fetchEditTodo={editTodo}/>
                </ol>  
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
                <div className='add-todo-container'>
                    <i className="fa fa-plus" onClick={toggleAddTodoForm}></i>
                    {
                        isAddTodoFormShowing
                        ? <AddTodoForm postTodo={postTodo} toggleAddTodoForm={toggleAddTodoForm} listId={listId}/>
                        : false
                    }
                </div>

    
            </div>
        )

}
  
}
