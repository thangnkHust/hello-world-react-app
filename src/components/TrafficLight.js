import './TrafficLight.css'
import classNames from 'classnames'

const RED = 0
const ORANGE = 1
const GREEN = 2

var currentColor = GREEN

function getNextColor(color){
  switch(color){
    case RED:
      return ORANGE
    case ORANGE:
      return GREEN
    default:
      return RED
  }
}

function TrafficLight(props) { 
  console.log(currentColor);
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
    </div>
  )
}

setInterval(() => {
  currentColor = getNextColor(currentColor)
}, 1000)

export default TrafficLight;