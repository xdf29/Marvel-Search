import React, { Component } from 'react'

export class Hero extends Component {

   cardStyle = {
       color: "white",
       margin: "10px 0px",
   }

  render() {
    return (
      <div style={this.cardStyle} className="col-lg-3 col-md-4 hvr-grow">
        <a style={{textDecoration: "none", color: "white"}} href={this.props.hero.comics_url[0].url}>
          <img src={this.props.hero.poster_path} style={{borderRadius: "25px"}}/>
          <br />
          <p>{this.props.hero.name}</p>
        </a>
      </div>
    )
  }
}

export default Hero
