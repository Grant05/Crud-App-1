import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TodoList from './components/todoList'
import TodoForm from './components/todoForm'
import Clear from './components/clear'
import Header from './components/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar';
const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Funday', 'Friday', 'Saturday']
const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const today = new Date(Date.now())
const Month = Months[today.getMonth()]
const date = today.getDate();
const Day = Days[today.getDay()]
const Year = today.getFullYear();


class App extends React.Component {

  state = {
    items: [],
    time: '',
    toggleCH: true //true is CODESMITH, false is HOME
  }

  componentDidMount () {
    axios.get('/items')
      .then(res => {
        this.setState({ items: res.data })
      })
    this.setState({
      time: Month + ' ' + date + ', ' + Year + ' ' + Day
    })
  }

  onMessageCreate = (item) => {
    this.setState({
      items: [...this.state.items, item]
    })
  }

  onMessageDelete = (id) => {
    let newItems = this.state.items
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i]._id === id) {
        newItems.splice(i, 1)
      }
    }
    this.setState({
      items: newItems
    })
  }

  onMessageEdit = (data) => {
    let newItems = this.state.items
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i]._id === data._id) {
        newItems[i].item = data.item
      }
    }
    this.setState({
      items: newItems
    })
  }

  clearData = () => {
    if (confirm('Do you want to clear your list?')) {
      axios.delete('/items', { params: { } })
        .then(res => {
          this.setState({ items: [] })
        })
    }
  }



  render () {
    const styleContainer = {
      height: 'auto',
      width: 600,
      margin: 'auto',
      position: 'relative',
      backgroundColor: '#8DA9C4',
      borderRadius: 5
    }

    return (
      <div className='app' style={styleContainer}>
        <MuiThemeProvider>
          <Navbar />
        </MuiThemeProvider>
        <Header date={this.state.time} />
        <TodoList items={this.state.items} onMessageDelete={this.onMessageDelete} onMessageEdit={this.onMessageEdit} time={this.state.time}/>
        <TodoForm onMessageCreate={this.onMessageCreate} />
        <Clear clearData={this.clearData}/>
      </div>
    )
  }



}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


// // "data" is the data to be sent as the request body
// Only applicable for request methods 'PUT', 'POST', and 'PATCH'
// When notransformRequestis set, must be of one of the following types:
// - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
// - Browser only: FormData, File, Blob
// - Node only: Stream
//use params to delete
// data: { firstName: 'Fred' },
