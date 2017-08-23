import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class Clear extends React.Component {


  render () {
    const styleClear = {
      position: 'absolute',
      bottom: 0,
      right: 0,
      backgroundColor: '#8DA9C4',
      borderRadius: 5
    }

    return (
      <button onClick={this.props.clearData} style={styleClear}><img src='https://image.flaticon.com/icons/svg/137/137749.svg' style={{ width: 35, height: 35}}/></button>
    )
  }

}





export default Clear
