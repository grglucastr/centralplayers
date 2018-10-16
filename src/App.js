import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser';


class App extends Component {

  state = {
    users: []
  }

  handleAddUser = newUser => {
    
    this.setState(oldState => ({
      users: [...oldState.users, newUser]
    }));
  }
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {
          JSON.stringify(this.state.users)
        }

        <AddUser users={this.state.users} OnAddUser={this.handleAddUser}/>
        
      </div>
    );
  }
}

export default App;
