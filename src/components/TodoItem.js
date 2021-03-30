import React, { Component } from 'react';
import classNames from 'classnames';

class TodoItem extends Component {

  onHandleClickItem = () => {
    this.props.markItem(this.props.item.id)
    // console.log(this.props);
  }

  onHandleClickDelete = () => {
    if (window.confirm("Ready?")) {
      this.props.deleteItem(this.props.item.id)
      return
    }
  }

  render() {
    var {item} = this.props
    return (
      <div className={classNames('todo-item', {
        complete: this.props.item.marked
      })}>
        <div className="checker" >
          <span className="">
            <input 
              type="checkbox"
              checked={item.marked}
              onChange={this.onHandleClickItem}
            />
          </span>
        </div>

        <span style={{
          padding: "10px 10px"
        }}>{this.props.item.text}</span>

        <a 
          className="float-right remove-todo-item" 
          
        >
          <i className="fas fa-times" onClick={this.onHandleClickDelete}></i>
        </a>
      </div>
    )
  }
}

export default TodoItem;