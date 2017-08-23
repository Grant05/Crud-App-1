import React, { Component } from 'react'

class Header extends Component {

  render () {

    const styleHeader = {
      fontSize: 28,
      textAlign: 'center',
      backgroundColor: '#8DA9C4',
      color: '#F9EDCC',
      fontFamily: 'Gadget',
      borderRadius: 5
    }

    return (
      <div className="header" style={styleHeader}>
        <h1>{this.props.date}</h1>
      </div>
    )
  }

}

export default Header
