import React, { Component } from 'react'
import Hero from "./Hero.js"

export class Heros extends Component {
  render() {
    return (
        this.props.characters.map((hero)=>{
            return(
                <Hero key={hero.id} hero={hero} />
            )
        })
    )
  }
}

export default Heros
