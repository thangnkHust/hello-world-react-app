import React, { Component } from 'react';

class Button extends Component {
	constructor(props) {
		super(props)
		console.log(props.dataFromTrafficLight);
	}

	sendDataToTrafficLight = (data) => {
		this.props.buttonSendToTrafficLight(data)
	}

	render() {
		const { currentColor } = this.props.dataFromTrafficLight
		return (
			<div>
				<button
					onClick={
						() => this.sendDataToTrafficLight(currentColor)
					}
				>Click</button>
			</div>
		)
	}
}

export default Button;