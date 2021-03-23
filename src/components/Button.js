import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeColor } from '../actions/Action';

class Button extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<button
					onClick={
						() => this.props.changeColor(this.props.currentColor)
					}
				>Click</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		currentColor: state.trafficLightReducer.color
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeColor: (color) => dispatch(changeColor(color))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);