import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const users = [
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


class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    qtyGames: 0,
    showQuantity: false
  }

  handleTextChange = (property, value) => {
    this.setState({property: value});
    
  }
  

  render() {

    let {firstName, lastName, username, qtyGames} = this.state;

    const rows = users.map((user) => (
      <tr key={user.username}>
        <td>{user.username}</td>
        <td>{user.qtyGames}</td>
        <td><input type="checkbox" /></td>
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
            <form>
              <input 
                placeholder="First Name" 
                value={firstName}
                onChange={(event) => this.handleTextChange('firstName', event)} />

              <input 
                placeholder="Last Name" 
                value={lastName}
                onChange={(event) => this.handleTextChange('lastName', event)} />

              <input placeholder="Unique @username" value={username} />
              <input type="number" placeholder="Quantity games played" value={qtyGames} />
              <button type="submit">Add</button>
            </form>
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
