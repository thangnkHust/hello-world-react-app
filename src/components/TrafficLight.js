import React, { Component } from 'react'
import classNames from 'classnames'
import './TrafficLight.css'
import Button from './Button';

const RED = 0
const ORANGE = 1
const GREEN = 2

class TrafficLight extends Component {
  constructor() {
    super()
    this.state = {
      currentColor: RED,
      test: 0
    }
    // this.handleClickNextColor = this.handleClickNextColor.bind(this)
    // this.buttonSendToTrafficLight = this.buttonSendToTrafficLight.bind(this)
  }


  getNextColor(color) {
    switch (color) {
      case RED:
        return ORANGE
      case ORANGE:
        return GREEN
      default:
        return RED
    }
  }

  buttonSendToTrafficLight = (dataFromButton) => {
    this.setState({ currentColor: this.getNextColor(dataFromButton) })
  }

  render() {
    const { currentColor } = this.state
    return (
      <div className="TrafficLight">
        <div className={classNames('buld', 'red', {
          active: currentColor === RED
        })}></div>
        <div className={classNames('buld', 'orange', {
          active: currentColor === ORANGE
        })}></div>
        <div className={classNames('buld', 'green', {
          active: currentColor === GREEN
        })}></div>
        {/* <div>
          <button onClick={ this.handleClickNextColor }>Click</button>
        </div> */}
        <Button
          dataFromTrafficLight={{ currentColor: currentColor }}
          buttonSendToTrafficLight={this.buttonSendToTrafficLight}
        />
      </div>
    )
  }
}

// setInterval(() => {
//   console.log(currentColor);
//   currentColor = getNextColor(currentColor)
// }, 1000)

export default TrafficLight;