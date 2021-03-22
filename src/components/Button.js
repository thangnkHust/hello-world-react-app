import React, {Component} from 'react';

class Button extends Component {
  constructor(props){
    super(props)
    var data = props.dataFromTrafficLight
    console.log(data.RED);
  }
  render() {
    return(
      <div>
        <button
          onClick={
            () => {
              this.props.trafficLightCallback(this.data)
            }
          }
        >Click</button>
      </div>
    )
  }
}

export default Button