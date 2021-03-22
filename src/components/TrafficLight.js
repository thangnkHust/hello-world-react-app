import './TrafficLight.css'
import classNames from 'classnames'
import React, {Component} from 'react'

const RED = 0
const ORANGE = 1
const GREEN = 2

class TrafficLight extends Component {
  constructor(){
    super()
    this.state = {
      currentColor: RED
    }
  }

  
  getNextColor(color) 
  {
    switch (color) {
      case RED:
        return ORANGE
      case ORANGE:
        return GREEN
      default:
        return RED
    }
  }

  handleClickNextColor(){
    this.setState({
      currentColor: this.getNextColor(this.state.currentColor)
    })
    console.log(this.state.currentColor);
  }

  render() {
    const {currentColor} = this.state
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
        <div>
          <button onClick={
            () => {
              this.handleClickNextColor()
            }
          }>Click</button>
        </div>
      </div>
    )
  }
}

// setInterval(() => {
//   console.log(currentColor);
//   currentColor = getNextColor(currentColor)
// }, 1000)

export default TrafficLight;