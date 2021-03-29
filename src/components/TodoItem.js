import React, {Component} from 'react';
import './TodoItem.css';
import classNames from 'classnames';

class TodoItem extends Component {

  onHandleClickItem = () => {
    this.props.markItem(this.props.item.id)
    // console.log(this.props);
  }

  onHandleClickDelete = () => {
    // if(window.confirm("Ready?")){
      this.props.deteteItem(this.props.item.id)
      // return
    // }
  }

  render() {
    // console.log(this.props);
    return(
      <div className="item-box">
        <div 
          className={classNames('TodoItem', {
            TodoItem_done: this.props.item.marked === true
          })} 
          onClick={this.onHandleClickItem} 
        >
          <p>{this.props.item.text}</p>
        </div>
        <div 
          className="clear-box" 
          onClick={this.onHandleClickDelete}
        >
          <p>X</p>
        </div>
      </div>
    )
  }
}

export default TodoItem;