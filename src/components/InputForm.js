import React, { Component } from 'react'

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
		if (this.state.input === '') {
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
				<form onSubmit={this.handleSubmit}>
					<input 
						type="text" 
						class="form-control add-task" 
						placeholder="New Task..." 
						onChange={this.handleSetState} 
						value={this.state.input}
					/>
        </form>
			</div>
		)
	}
}

export default InputForm;