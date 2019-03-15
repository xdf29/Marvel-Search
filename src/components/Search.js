import React, { Component } from 'react'
import './Search.css';

export class Search extends Component {

  constructor(){
      super()
      this.state = {
          title: ""
      }
  }

  updateTitle = (e) => {
      this.setState({
          title: e.target.value
      })
  }
  
  submitTitle = (e) => {
      if(e.key === "Enter"){
          this.props.searchTitle(this.state.title)
      }
  }

  render() {
    return (
      <div className="container">
          <input type="text" placeholder="Search ..." name="title" onChange={this.updateTitle} onKeyPress={this.submitTitle} />
          <div className="search" />
      </div>
    )
  }
}

export default Search
