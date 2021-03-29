import React, { Component } from 'react'
import './InputForm.css'

class InputForm extends Component {
	constructor() {
		super()
		this.state = {
			input: ''
		}
	}

	handleSetState = (e) => {
		// console.log(e.target.value);
		this.setState({
			input: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		if(this.state.input === ''){
			alert("Hay nhap xau")
			return;
		}  
		this.props.handleSubmit(this.state.input)
		this.setState({
			input: ''
		})
	}

	render() {
		return (
			<div className="InputForm">
				<form method="post" onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleSetState} value={this.state.input} placeholder="Enter to add todo list" />
					<button type="submit">Add</button>
				</form>
			</div>
		)
	}
}

export default InputForm;