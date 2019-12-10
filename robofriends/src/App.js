import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';

class App extends Component {
  state = {
    monsters: [],
    search: ''
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  filterMonsters(monsters) {
    return monsters.filter(monster =>
      monster.name.toLowerCase().includes(this.state.search.toLowerCase())
    )
  }

  handleChange = e => {
    this.setState({ search: e.target.value })
  }

  render() {
    const { monsters, search } = this.state;
    return (
      <div className='App' >
        <h1>Monster Rolodex</h1>
        <SearchBox
          search={search}
          placeholder={'search monsters'}
          onHandleChange={this.handleChange}
        />
        <CardList monsters={this.filterMonsters(monsters)} />
      </div>
    );
  }
}

export default App;
