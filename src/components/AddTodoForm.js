import React from 'react'

export default function AddTodoForm() {
    return (
        <form className='list-form'>
            <input 
                type='text'
                placeholder='Work, capstone project, etc...'
               
            />
            <button id='form-submit' >Create List</button>
           </form>
    )
}
