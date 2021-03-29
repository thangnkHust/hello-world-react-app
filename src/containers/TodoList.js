import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, markItem } from '../actions/TodoAction';
import InputForm from '../components/InputForm';
import TodoItem from '../components/TodoItem';
import './TodoList.css'

class TodoList extends Component {
	handleSubmit = (text) => {
		this.props.addItem(text)
	}

	render() {
		console.log(this.props, 'LIST');
		const { todos } = this.props
		return (
			<div className="TodoList">
				<InputForm handleSubmit={this.handleSubmit}/>
				<div className="list-items">
					{
						todos.map(item => {
							return <TodoItem item={item} markItem={this.props.markItem}/>
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
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

