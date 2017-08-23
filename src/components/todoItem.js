import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const editImage = 'https://image.flaticon.com/icons/svg/263/263062.svg'
const deleteImage = 'https://image.flaticon.com/icons/svg/63/63260.svg'

class TodoItem extends React.Component {

  state = {
    text: '',
    editField: false,
  }

  handleClick = (e) => {
    if (e.target.className === 'delete') {
      axios.delete(`/items/${this.props.item._id}`)
        .then(res => this.props.delete(res.data.itemID))
    }
    if (e.target.className === 'edit') {
      if (!this.state.editField) {
        this.setState({
          editField: true
        })
      }
    }
    if (e.target.className === 'save') {
      axios.patch(`/items/${this.props.item._id}`, { items: this.state.text })
        .then(res => this.props.update(res.data))
      this.setState({
        editField: false
      })
    }
  }

  handleEnter = (e) => {
    if (e.target.className = 'editField') {
      if (e.key === 'Enter') {
        console.log('ENTER SUCCESS')
        axios.patch(`/items/${this.props.item._id}`, { items: this.state.text })
          .then(res => this.props.update(res.data))
        this.setState({
          editField: false
        })
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render () {
    const styleTextField = {
      width: 'auto',
      border: '1 solid #3D484C',
      backgroundColor: '#2D3538',
      margin: '0 0 10 15',
      padding: 10,
      borderRadius: 5,
      fontSize: 12,
      paddingRight: 30,
      color: '#DDD',
      verticalAlign: 'center'
    }

    if (this.state.editField) {
      return (
        <div>
          <input type='text' className="editField" value={this.state.text} onChange={this.handleChange} style={styleTextField} onKeyPress={this.handleEnter}/>
          <img src='https://image.flaticon.com/icons/svg/159/159818.svg' onClick={this.handleClick} className="save" style={{ width: 35, height: 35, marginLeft: '1%'}}/>
        </div>
      )
    }

    const styleImage = {
      height: 30,
      width: 30,
    }

    const styleContainer = {
      display: 'flex',
      fontFamily: 'Chalkboard',
      fontSize: 20,
      fontStyle: 'bold',
      fontColor: "#eee",
      textAlign: 'middle'
    }

    return (
      <div style={styleContainer}>
        <div style={{width: '80%'}}>
          <p style={{marginLeft: '5%'}}>{this.props.item.item}</p>
          <p style={{fontSize: 12, marginLeft: '5%', marginTop: '-3%', fontFamily: 'Times New Roman', color: '#F9EDCC', fontStyle: 'italic'}}>{this.props.time}</p>
        </div>
        <div style={{position: 'absolute', right: 0, marginRight: '2.5%'}}>
          <img src={editImage} style={styleImage} onClick={this.handleClick} className="edit"/>
          <img src={deleteImage} style={styleImage} onClick={this.handleClick} className="delete"/>
        </div>
      </div>

    )
  }

}

export default TodoItem
