import React, { PropTypes } from 'react';
import { COMMANDS } from './../../actions';

import Joystick from '../joystick/joystick.js';
import Button from './button.js';


class Commands extends React.Component {
  constructor(props) {
    super(props);
    this.sendCommand = this.sendCommand.bind(this);
  }

  sendCommand(command) {
    this.props.sendCommand(command);
  }

  render() {
    return (
        <div style={ styles.container }>
          <div style={ styles.joystick }><Joystick /></div>
          
          {/*<div style={ styles.containerTop }>
            <Button onClick={ () => { this.sendCommand(COMMANDS.FORWARD); } }>
              <i className="fa fa-angle-up fa-2x"></i>
            </Button>
          </div>
          <div style={ styles.containerBottom }>
            <Button onClick={ () => { this.sendCommand(COMMANDS.TURN_LEFT); } }>
              <i className="fa fa-angle-left fa-2x"></i>
            </Button>
            <Button onClick={ () => { this.sendCommand(COMMANDS.BRAKE); } }>
              <i className="fa fa-angle-down fa-2x"></i>
            </Button>
            <Button onClick={ () => { this.sendCommand(COMMANDS.TURN_RIGHT); } }>
              <i className="fa fa-angle-right fa-2x"></i>
            </Button>
          </div>*/}
        </div>
    );
  }
}

Commands.propTypes = {
    sendCommand: PropTypes.func.isRequired
}

export default Commands;

const styles = {
    'container': {
        boxShadow: '0px 0px 5px #000',
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    joystick: {
        position: 'relative',
        bottom: '100px',
        right: '100px'
    },
    containerTop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    containerBottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    command: {
      textAlign: 'center',
      padding: '8px',
      margin: '4px',
      width: '30px',
      height: '30px',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      color: '#ddd',
      ':hover': {
        'color': '#ff0'
      }
    }
}