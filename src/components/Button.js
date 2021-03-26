import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeColor } from '../actions/Action';
import classNames from 'classnames'
import './Button.css'

class Button extends Component {
	// constructor(props) {
	// 	super(props)
	// }

	render() {
		const {currentColor, changeColor} = this.props
		// console.log(currentColor);
		// console.log(changeColor);
		return (
			<div>
				<button 
					className={classNames({
						red: this.props.currentColor === 0,
						orange: this.props.currentColor === 1,
						green: this.props.currentColor === 2
					})}
					onClick={
						() => this.props.changeColor(this.props.currentColor)
					}
				>Click</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	// console.log(state.trafficLightReducer.color, 'Button action');
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