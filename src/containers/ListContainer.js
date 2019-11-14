import React from 'react'
import List from '../components/List'
import '../styles/ListContainer.css'


export default function ListContainer({lists, deleteList, currentUser, editTodo, toggleAddTodoForm, isAddTodoFormShowing, postTodo}) {

        const allLists = lists.map(list => {
            return (<div key={list.id} className='list-card'>
                <List 
                    name={list.attributes.name}
                    id={list.id}
                    todos={list.attributes.todos}
                    deleteList={deleteList}
                    editTodo={editTodo}
                    toggleAddTodoForm={toggleAddTodoForm}
                    isAddTodoFormShowing={isAddTodoFormShowing}
                    postTodo={postTodo}
                    currentUser={currentUser}
                    />
            </div>)
        })
    
        return (
            <>
                {allLists}
            </>
        )
}