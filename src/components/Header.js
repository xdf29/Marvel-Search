import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>
        <header style={headerStyle}>
            <h2><b>MAR
                <span style={{color:"#EA4335"}}>V</span>
                <span style={{color:"#4E8DF5"}}>E</span>
                <span style={{color:"#34A853"}}>L</span>
            </b></h2>
            <p>Lorem <b><span style={{color:"#34A853"}}>GOOGLE</span></b> dolor <b><span style={{color:"#4E8DF5"}}>FOR</span></b> amet, consectetur <br/> <b><span style={{color:"#EA4335"}}>MARVEL</span></b> elit.</p>
        </header>
      </div>
    )
  }
}

const headerStyle = {
    backgroundColor: "#2C3E50",
    color: "white",
    padding: "10px",
}

export default Header
