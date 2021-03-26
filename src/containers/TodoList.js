import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/TodoAction';
import InputForm from '../components/InputForm';
import TodoItem from '../components/TodoItem';
import './TodoList.css'

class TodoList extends Component {

	handleSubmit = (text) => {
		this.props.addItem(text)
	}

	render() {
		// console.log(this.props, "todoList");
		const { todos } = this.props
		console.log(todos, 'todos');
		return (
			<div className="TodoList">
				<InputForm handleSubmit={this.handleSubmit}/>
				<div className="list-items">
					<TodoItem todos={todos}/>
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
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

