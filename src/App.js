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
      isCreateListShowing: false, 
      
  }

  componentDidMount(){
    fetch(`${BASE_URL}/users`)
        .then(response => response.json())
        .then(this.setThisState)
  }

    setThisState = (userObject) => {
      const currentUser = userObject.data[0].attributes
      const lists = userObject.data[0].attributes.list_with_todos.data

      this.setState({
          currentUser: {
              id: currentUser.id,
              username: currentUser.username,
          },
          lists
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
        this.setState({
          lists: [...this.state.lists, list]
        })
    })
  }
  

    toggleCreateList = () => {
    const {isCreateListShowing} = this.state
      this.setState({isCreateListShowing: !isCreateListShowing})
     }



  render() {
    return (
      <div className="App">
        <header className='nav-bar'>
           <Nav />
        </header>

        <main>
          <section className='list-container'>
            <ListContainer lists={this.state.lists}/>
          </section>

          <div className='button-wrapper'>
              <button className='new-list-button' onClick={this.toggleCreateList}>
                  <span>
                    {
                      this.state.isCreateListShowing
                          ? null
                          : "CREATE A NEW LIST"
                    }
                  </span>
              </button>
          </div>
          {
            this.state.isCreateListShowing
            ? <ListForm handleSubmit={this.postList} />
            : null
          }
        </main>
  
       
      </div>
    );
  }
  
}

