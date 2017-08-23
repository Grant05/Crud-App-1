import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TodoItem from './todoItem'

class TodoList extends React.Component {

  render () {
    return (
      <div className="list">
        { this.props.items.map(item => <TodoItem
          item={item}
          key={item._id}
          delete={this.props.onMessageDelete}
          update={this.props.onMessageEdit}
          time={this.props.time}
        />) }
      </div>
    )
  }

}

export default TodoList

//map everything in this.props.items ===  which is equal to state.items to a new todoitem component
