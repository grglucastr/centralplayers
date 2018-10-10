import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    qtyGames: 0,
    showQuantity: false,
    users: [
      {
        firstName: 'George',
        lastName: 'Bentes',
        username: '@grglucastr',
        qtyGames: 8,
        showQuantity: false
      },
      {
        firstName: 'Anthony',
        lastName: 'Gabriel',
        username: '@zAnthony~',
        qtyGames: 12,
        showQuantity: false
      },
    ]
  }

  handleFirstNameChange = (event) => {
    this.setState({firstName: event.target.value});
  }

  handleLastNameChange = (event) => {
    this.setState({lastName: event.target.value});
  }

  handleUserNameChange = (event) => {
    this.setState({username: event.target.value});
  }


  handleQtyGamesPlayedChange = (event) => {
    this.setState({qtyGames: event.target.value});
  }

  handelFormSubmit = (event) => {
    event.preventDefault();

    const {username} = this.state;
    
    if(this.isUsernameAvailable(username)){
      this.addNewUser();
    }
  }

  isUsernameAvailable = (username) => {
    const {users} = this.state;
    for(let user of users){
      if(user.username === username){
        return false;
      }
    }
    return true;
  }

  addNewUser = () => {
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      qtyGames: this.state.qtyGames,
      showQuantity: this.state.qtyGames
    }

    const users = this.state.users;
    users.push(user);
    this.setState({users});
    this.clearFields();
  }

  clearFields = () => {
    this.setState({
      firstName: '',
      lastName: '',
      username: '',
      qtyGames: '',
      showQuantity: false
    });
  }
  
  handleShowQty = (event, pUser) => {
    const {users} = this.state;

    for(let user of users){
      if(user.username === pUser.username){
        user.showQuantity = event.target.checked;
      }
    }
    
    this.setState({users});
        
  }

  render() {

    let {firstName, lastName, username, qtyGames, users} = this.state;

    const rows = users.map((user) => (
      <tr key={user.username}>
        <td>{user.username}</td>
        <td>
          {
            user.showQuantity ? `${user.username} has played ${user.qtyGames}` : 
            `${user.username} has played * games` 
          }
        </td>
        <td><input type="checkbox" onChange={(event) => this.handleShowQty(event, user)} /></td>
      </tr>
    ));


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="centralPlayers">
          <div className="centralPlayersForm">
            <h3>Add New Player</h3>
            <form onSubmit={(event) => this.handelFormSubmit(event)}>
              <input 
                placeholder="First Name" 
                value={firstName}
                onChange={(event) => this.handleFirstNameChange(event)} />

              <input  
                placeholder="Last Name" 
                value={lastName}
                onChange={(event) => this.handleLastNameChange(event)} />

              <input
                placeholder="Unique @username"
                value={username}
                onChange={(event) => this.handleUserNameChange(event)} />

              <input 
                type="number" 
                placeholder="Quantity games played" 
                value={qtyGames}
                onChange={(event) => this.handleQtyGamesPlayedChange(event)} />

              <button type="submit" disabled={username.length === 0 || !this.isUsernameAvailable(this.state.username) }>
                Add
              </button>
            </form>
            
            {this.isUsernameAvailable(this.state.username) ? '' :
            <p style={{color:'red'}}>Username not available.</p>
            }
          </div>

          <hr/>
          
          <h3>Users Worldwide</h3>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Games Played</th>
                <th>Show Games Played</th>
              </tr>
            </thead>
            
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
