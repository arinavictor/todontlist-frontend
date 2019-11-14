import React, { Component } from 'react';
import './App.css';
import Nav from './containers/Nav'
import ListContainer from './containers/ListContainer'
import ListForm from './components/ListForm';

const BASE_URL = "http://localhost:9000"

export default class App extends Component {

    state = {
      currentUser: {},
      lists: [],
      todos: [],
      isCreateListShowing: false, 
      isAddTodoFormShowing: false,
      
  }
  

  componentDidMount(){
    fetch(`${BASE_URL}/users`)
        .then(response => response.json())
        .then(this.setThisState)
  }

    setThisState = (userObject) => {
      const currentUser = userObject.data[0]
      const lists = userObject.data[0].attributes.list_with_todos.data
      const todos = userObject.data[0].attributes.list_with_todos.data

      this.setState({
          currentUser: {
              id: currentUser.id,
              username: currentUser.attributes.username,
          },
          lists, 
          todos
      })
    }


    postList = list => {
      fetch(`${BASE_URL}/lists`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(list)
      }).then(response => response.json())
      .then(list => {
        const {data} = list
         
        this.setState({
          lists: [...this.state.lists, data], 
          isCreateListShowing: false,
        })
        
    })
  }

  postTodo = todo => {
    console.log("post todo", todo)
    fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
  }).then(response => response.json())
  .then(todo => {
    this.setState({
      todos: [...this.state.todos, todo]
    }) 
})
  }

  deleteList = (id) => {
    fetch(`${BASE_URL}/lists/${id}`, {
      method: "DELETE", 
      header: {
        "Content-Type": "application/json"
      },
    }).then(() => {
      this.setState({
        lists: this.state.lists.filter(list => list.id !== id)
      })
    })
  }  

    toggleCreateList = () => {
      this.setState({isCreateListShowing: true})
     }

  
     toggleAddTodoForm = () => {
       console.log("We made it", this.state.isAddTodoFormShowing)
       const {isAddTodoFormShowing} = this.state
      this.setState({isAddTodoFormShowing: !isAddTodoFormShowing})
     }
    
  render() {
    return (
      <div className="App">
        <header className='nav-bar'>
           <Nav />
        </header>

        <main>
          <section className='list-container'>
            <ListContainer 
                lists={this.state.lists} 
                deleteList={this.deleteList} 
                currentUser={this.state.currentUser}
                editTodo={this.editTodo}
               toggleAddTodoForm={this.toggleAddTodoForm}
               isAddTodoFormShowing={this.state.isAddTodoFormShowing}
               postTodo={this.postTodo}
                />
          </section>

          <div className='button-wrapper'>
              <button className='new-list-button' onClick={this.toggleCreateList}>
                  <span>
                    {
                      this.state.isCreateListShowing
                          ? <ListForm className='list-form' handleSubmit={this.postList}/>
                          : "CREATE A NEW LIST"
                    }
                  </span>
              </button>
          </div>
        </main>
  
       
      </div>
    );
  }
  
}

