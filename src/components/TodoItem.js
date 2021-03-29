import React, {Component} from 'react';
import './TodoItem.css';
import classNames from 'classnames';

class TodoItem extends Component {
  constructor(){
    super()
  }

  onHandleClickItem = () => {
    this.props.markItem(this.props.item.id)
    // console.log(this.props);
  }
  render() {
    return(
      <div className={classNames('TodoItem', {
        TodoItem_done: this.props.item.marked === true
      })} onClick={this.onHandleClickItem}>
        <p>{this.props.item.text}</p>
      </div>
    )
  }
}

export default TodoItem;