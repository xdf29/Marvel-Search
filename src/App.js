import React, { Component } from 'react';
import './App.css';
import timestamp from 'timestamp'
import md5 from 'md5'
import Header from './components/Header.js'
import Search from './components/Search.js'
import Heros from './components/Heros.js' 

class App extends Component {

  constructor(){
    super()
    this.state = {
      title: "Captain",
      characters: [],
      loading: false
    }
    this.privateKey = "ccf461143d7c425daed907aa529acf0fb9ce0c4e"
    this.publicKey = "46e67042df3f38b1c885570a9f511e83"
    this.ts = timestamp()
    this.hash = md5(this.ts + this.privateKey + this.publicKey)
  }

  UNSAFE_componentWillMount(){
    this.setState({
      loading: true
    })
    this.url = "https://gateway.marvel.com/v1/public/characters?nameStartsWith="+this.state.title+"&ts="+this.ts+"&apikey="+this.publicKey+"&hash="+this.hash
    console.log(this.url)
    fetch(this.url)
      .then(response => response.json())
      .then(data => {
        data.data.results.map((result) => {
          const character = {
            id: "",
            name: "",
            description: "",
            poster_path: "",
            details_url: "",
            comics_url: ""
          }
          character.id = result.id
          character.name = result.name
          character.description = result.description
          character.poster_path = result.thumbnail.path + "/portrait_xlarge.jpg"
          character.details_url = result.urls.filter((url) => {
            if(url.type === "detail"){
              return(
                url.url
              )
            }
          })
          character.comics_url = result.urls.filter((url) => {
            if(url.type === "comiclink"){
              return(
                url.url
              )
            }
          })
          this.setState({
            loading: false,
            characters: [...this.state.characters,character]
          })
        })
      })
  }

  updateTitle = (title) => {
    this.setState({
      title: title?title:"Captain",
      characters: []
    }, () => {
      console.log(this.state.title)
      this.UNSAFE_componentWillMount()
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <Search searchTitle={this.updateTitle}/>\
        <hr />
        {this.state.loading? 
            <img src="https://loading.io/spinners/ellipsis/lg.discuss-ellipsis-preloader.gif" width="100px"/>
            :<div className="row"><Heros characters={this.state.characters} /></div>}
      </div>
    );
  }
}

// const privateKey = "ccf461143d7c425daed907aa529acf0fb9ce0c4e"
// const publicKey = "46e67042df3f38b1c885570a9f511e83"
// const ts = timestamp()
// const hash = md5(ts + privateKey + publicKey)
// const url = "https://gateway.marvel.com/v1/public/characters?nameStartsWith="+"Captain"+"&ts="+ts+"&apikey="+publicKey+"&hash="+hash


export default App;
