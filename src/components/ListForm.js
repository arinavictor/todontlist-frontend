import React, { Component } from 'react'

export default class ListForm extends Component {

    state = {
        newList: {
            name: "",
            user_id: 3,
        }
    }


    handleChange = property => event => {
        const newList = this.state.newList
        newList[property] = event.target.value 
        this.setState({ newList })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { name, user_id } = this.state.newList
        
        this.props.handleSubmit({ name, user_id })

        this.setState({
            newList: {
                name: "",
                user_id: 3,
            }
        })
    }
    render() {
        return (
           <form className='list-form' onSubmit={this.handleSubmit}>
            <input 
                type='text'
                placeholder='Work, capstone project, etc...'
                value={this.state.newList.name}
                onChange={this.handleChange("name")}
            />
            <input type="submit" value="Create List" />

           </form>
        )
    }
}
