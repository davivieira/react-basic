import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {

  constructor() {
    super();

    this.state = {
      users: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(u => this.setState({ users: u }))
  }

  render() {
    return (
      <div className="App">
        <h1>Users Rolodex</h1>
        <SearchBox onChange={(value => this.setState({ searchField: value }))} />
        <CardList users={this.state.users} searchTerm={this.state.searchField} />
      </div>
    );
  }

}

export default App;
