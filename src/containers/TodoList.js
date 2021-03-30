import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, markItem, deleteItem } from '../actions/TodoAction';
import InputForm from '../components/InputForm';
import Filter from '../components/Filter';
import TodoItem from '../components/TodoItem';

class TodoList extends Component {

	constructor (){
		super()
		this.state = {
			selected: 'all'
		}
	}

	handleSubmit = (text) => {
		this.props.addItem(text)
	}

	render() {
		const { todos } = this.props
		console.log(todos);
		return (
			<div className="TodoList">
				<InputForm handleSubmit={this.handleSubmit} />
				<Filter
				/>
				<div class="todo-list">
					{
						todos.data.map((item, index) => {
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
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

