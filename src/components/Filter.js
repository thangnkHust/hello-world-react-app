import classNames from 'classnames';
import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <ul className="nav nav-pills todo-nav">
        <li className="nav-item all-task active">
          <a href="#" className="nav-link">All</a>
        </li>
        <li className="nav-item active-task">
          <a href="#" 
            className={classNames('nav-link')} 
            onClick={this.props.filterActive}
          >
            Active
          </a>
        </li>
        <li className="nav-item completed-task">
          <a href="#" 
            className="nav-link"
            onClick={this.props.filterUnactive}
          >Completed</a>
        </li>
      </ul>
    )
  }
}

export default Filter