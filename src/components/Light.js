import React from 'react';
import classNames from 'classnames'

import {RED, GREEN, ORANGE} from '../contants/constants'
import { connect } from 'react-redux';
class Light extends React.Component {
  constructor(props) {
    super(props);
  }

  // buttonSendToTrafficLight = (dataFromButton) => {
  //   this.setState({ currentColor: this.getNextColor(dataFromButton) })
  // }

  render() {
    const {currentColor} = this.props;
    return (
      <React.Fragment>
        <div className={classNames('buld', 'red', {
          active: currentColor === RED
        })}></div>
        <div className={classNames('buld', 'orange', {
          active: currentColor === ORANGE
        })}></div>
        <div className={classNames('buld', 'green', {
          active: currentColor === GREEN
        })}></div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentColor: state.trafficLightReducer.color
  }
}

export default connect(mapStateToProps, null)(Light);