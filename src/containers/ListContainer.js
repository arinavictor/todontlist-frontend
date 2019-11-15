import React from 'react'
import List from '../components/List'
import '../styles/ListContainer.css'


export default function ListContainer({
     lists, deleteList, currentUser,
     todos, editTodo, deleteTodo, postTodo}) {

        const allLists = () => {
           return lists.map(list => {
                return (<div key={list.id} className='list-card'>
                    <List 
                        name={list.attributes.name}
                        listId={list.id}
                        todos={todos}
                        deleteList={deleteList}
                        editTodo={editTodo}
                        postTodo={postTodo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        currentUser={currentUser}
                        />
                </div>)
        })
    }
    
        return (
            <>
                {allLists()}
            </>
        )
}
