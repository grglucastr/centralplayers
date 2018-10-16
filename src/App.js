import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser';
import UserList from './UserList';


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

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <AddUser users={this.state.users} OnAddUser={this.handleAddUser}/>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              {
                (this.state.users.length > 0) ?
                (<UserList users={this.state.users} />) :
                ('')
              }
            </div>
          </div>

        </div>

        

        
                
      </div>
    );
  }
}

export default App;
