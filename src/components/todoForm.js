import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class TodoForm extends React.Component {
  state = {
    text: '',
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  handleClick = () => {
    axios.post('/items', { items: this.state.text })
      .then(res => this.props.onMessageCreate(res.data))

    this.setState({
      text: ''
    })
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') {
      console.log('pressed Enter')
      axios.post('/items', { items: this.state.text })
        .then(res => this.props.onMessageCreate(res.data))

      this.setState({
        text: ''
      })
    }
  }

  render () {
    const styleForm = {
      marginLeft: '30%'
    }

    const styleTextField = {
      width: 250,
      border: '1 solid #3D484C',
      backgroundColor: '#2D3538',
      margin: '0 0 10',
      padding: 8,
      borderRadius: 5,
      fontSize: 14,
      paddingRight: 30,
      color: '#DDD',
      verticalAlign: 'center'
    }

    return (
      <div className="form" style={styleForm}>
        <input type="text" className="input" value={this.state.text} onChange={this.handleChange} onKeyPress={this.handleEnter} style={styleTextField}/>
        <button style={{border: 'none', width: 30, height: 30, backgroundColor: '#8DA9C4'}}>
          <img src='https://image.flaticon.com/icons/svg/159/159818.svg' onClick={this.handleClick} style={{width: 35, height: 35}}/>
        </button>
      </div>
    )
  }

}




export default TodoForm
