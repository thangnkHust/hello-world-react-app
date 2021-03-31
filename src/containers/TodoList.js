import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, markItem, deleteItem, updateFilter } from '../actions/TodoAction';
import InputForm from '../components/InputForm';
import Filter from '../components/Filter';
import TodoItem from '../components/TodoItem';
import * as status from '../contants/todoList';

class TodoList extends Component {

	// constructor() {
	// 	super()
	// 	this.state = {
	// 		selected: 'all'
	// 	}
	// }

	handleSubmit = (text) => {
		this.props.addItem(text)
	}

	render() {
		const { todos } = this.props
		return (
			<div className="TodoList">
				<InputForm handleSubmit={this.handleSubmit} />
				<Filter
					filter={todos.filter}
					onChangeStatus={this.props.updateFilter}
				/>
				<div className="todo-list">
					{
						todos.data.filter((item) => {
							return todos.filter === status.ALL
								|| (todos.filter === status.ACTIVE && !item.marked)
								|| (todos.filter === status.COMPLETED && item.marked)
						}).map((item, index) => {
							return (
								<TodoItem
									key={index}
									item={item}
									markItem={this.props.markItem}
									deleteItem={this.props.deleteItem}
								/>
							)
						})
					}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todoListReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addItem: (text) => {
			dispatch(addItem(text))
		},
		markItem: (id) => {
			dispatch(markItem(id))
		},
		deleteItem: (id) => {
			dispatch(deleteItem(id))
		},
		updateFilter: status => {
			dispatch(updateFilter(status))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

