import React from 'react'
import List from '../components/List'
import '../styles/ListContainer.css'


export default function ListContainer({lists}) {
    const lastElement = lists.slice(-1)[0]

    console.log(lists)

    
        const allLists = lists.map(list => {
            return (<div key={list.id} className='list-card'>
                <List 
                    name={list.attributes.name} todos={list.attributes.todos} 
                    />
            </div>)
        })
    
       

        return (
            <>
                {allLists}
            </>
        )
}
