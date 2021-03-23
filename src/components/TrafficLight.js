import React, { Component } from 'react'

import './TrafficLight.css'
import Button from './Button';
import Light from './Light';

class TrafficLight extends Component {
  constructor() {
    super()
    this.state = {
      test: 0
    }
    // this.handleClickNextColor = this.handleClickNextColor.bind(this)
    // this.buttonSendToTrafficLight = this.buttonSendToTrafficLight.bind(this)
  }



  render() {
    return (
      <div className="TrafficLight">
        <Light />
        {/* <div>
          <button onClick={ this.handleClickNextColor }>Click</button>
        </div> */}
        <Button
          // dataFromTrafficLight={{ currentColor: 0 }}
          // buttonSendToTrafficLight={this.buttonSendToTrafficLight}
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