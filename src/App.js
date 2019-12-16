import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { GitHub } from './api'
import { SearchBox, UserSummary } from './components/users'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: false,
      error: false
    }

    this.searchUser = this.searchUser.bind(this)
  }


  async searchUser(s) {
    const response = await GitHub.getUser(s)

    // If we find a valid user, show their details
    if (response.id) {

      this.setState({
        ...this.state,
        user: response,
        error: false
      })

    } else {

      // Otherwise an error has occurred
      this.setState({
        ...this.state,
        user: false,
        error: response.message
      })

    }
    
  }
  
  
  render() {
    const { user, error } = this.state

    return (
      <div className="app">
        <SearchBox error={error} searchHandler={this.searchUser} />
        
        {user ? 
          <UserSummary user={user} /> 
        : ''}

      </div>
    )
  }
}

export default App;
