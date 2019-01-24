import React, { Component } from 'react'
import axios from 'axios'
import Results from '../Searchresults'

class Search extends Component {
  state = {
    results: [],
    search: ''
  }
  
  handleChange = ({ target: { name, value } }) =>
  {this.setState({ [name]: value })}

  handleSubmit = (e) => {
    e.preventDefault()
    let { search } = this.state
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=OcA9OeImWUvYzwIICTGl5yufd98dKNky`)
     .then(({ data }) => {
       this.setState({ results: data.data})
    })
  }
  render() {
      let {search, results} = this.state
      return (
      <div>
    <form onSubmit={this.handleSubmit}>
      <div className='form'>
        <input
          className='searchbox'
          type='text'
          name='search'
          onChange={this.handleChange}
          placeholder='Let The Fun Begin!'
          value={ search }
        />
        <input
          className='searchbutton'
          type='submit'
          value='Search'
         />
      </div>
    </form>
    <Results results={this.state.results} />
    </div>
  )}
}
export default Search
