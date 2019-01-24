import React, { Component } from 'react'
import axios from 'axios'

class Search extends Component {
  state = {
    results: [],
    search: ''
  }
  
  handleChange = ({ target: { name, value } }) =>
  {this.setState({ [name]: value })}

  handleSubmit = (e) => {
      debugger
    e.preventDefault()
    let { search } = this.state
    axios.get(`http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=OcA9OeImWUvYzwIICTGl5yufd98dKNky`)
     .then(({ data }) => {
       if (data.images.fixed_height) {
       this.setState({ advice: data.message.text, search: ""})
     } else
      this.setState({ advice: data.slips[0].advice, search: "" })
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
        />
        <input
          className='searchbutton'
          type='submit'
          value='Search'
         />
      </div>
    </form>
    </div>
  )}
}
export default Search
