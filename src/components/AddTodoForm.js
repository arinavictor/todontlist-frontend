import React from 'react'

export default function AddTodoForm() {
    return (
        <form className='list-form'>
            <input 
                type='text'
                placeholder='Work, capstone project, etc...'
                value={this.state.newList.name}
                onChange={this.handleChange("name")}
            />
            <button id='form-submit' onClick={this.handleSubmit}>Create List</button>
           </form>
    )
}
