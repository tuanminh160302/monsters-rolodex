import React, { Component } from 'react'

import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/searchBox/searchBox.component'

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: '',
    }

  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value}, () => {
      console.log(this)
    })
  }

  render = () => {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter((monster) => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox className='search' type='text' placeholder='search monster' handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>

      </div>
    )
  }
}

export default App;
