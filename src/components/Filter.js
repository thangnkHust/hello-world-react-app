import classNames from 'classnames';
import React, { Component } from 'react';
import * as status from '../contants/todoList';

class Filter extends Component {
  render() {
    return (
      <ul className="nav nav-pills todo-nav">
        <li className={classNames("nav-item all-task", {
            active: this.props.filter === status.ALL
          })}
          onClick={() => {this.props.onChangeStatus(status.ALL)}}
        >
          <a href="#" className="nav-link">All</a>
        </li>
        <li className={classNames("nav-item active-task", {
            active: this.props.filter === status.ACTIVE
          })}
          onClick={() => {this.props.onChangeStatus(status.ACTIVE)}}
        >
          <a href="#" 
            className="nav-link"
          >
            Active
          </a>
        </li>
        <li className={classNames("nav-item completed-task", {
            active: this.props.filter === status.COMPLETED
          })}
          onClick={() => {this.props.onChangeStatus(status.COMPLETED)}}
        >
          <a href="#" 
            className="nav-link"
          >Completed</a>
        </li>
      </ul>
    )
  }
}

export default Filter