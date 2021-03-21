import './TrafficLight.css'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

const RED = 0
const ORANGE = 1
const GREEN = 2

function TrafficLight(props) { 
  const [currentColor, setCurrentColor] = useState(GREEN);
  const [flag, setFlag] = useState(false);
  const getNextColor = () => {
    switch(currentColor){
      case RED:
        setCurrentColor(ORANGE);
        break;
      case ORANGE:
        setCurrentColor(GREEN);
        break;
      default:
        setCurrentColor(RED);
        break;
    }
  }
  useEffect(() => {
    getNextColor();
  }, [flag]);


  setTimeout(() => {
    setFlag(!flag);
  }, 1000);
  
  return (
    <div>      
    <button>click</button>

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
    </div>
  )
}

export default TrafficLight;