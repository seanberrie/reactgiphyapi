import React, { Component } from 'react'
import 'milligram'
import './App.css'
import Search from './components/Search'
import Navbar from './components/Navbar'
import Searchresults from './components/Searchresults'

class App extends Component {
  render () {
    return (
      <main className='containers'>
        <Navbar />
        <div className='header'>
          <h1 >Giphy Search</h1>
          <h4>The true source for all things giphy</h4>
        </div>
        <Search />
      </main>
    )
  }
}

export default App
