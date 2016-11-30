import React, { PropTypes } from 'react';
import { COMMANDS } from './../../actions';

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
          <div style={ styles.command } onClick={ () => { this.sendCommand(COMMANDS.FORWARD); } }>go forward</div>
          <div style={ styles.command } onClick={ () => { this.sendCommand(COMMANDS.BRAKE); } }>brake</div>
          <div style={ styles.command } onClick={ () => { this.sendCommand(COMMANDS.TURN_LEFT); } }>turn left</div>
          <div style={ styles.command } onClick={ () => { this.sendCommand(COMMANDS.TURN_RIGHT); } }>turn right</div>
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
        width: '100px',
        minHeight: '100px',
        border: 'solid 1px #666',
        boxShadow: '0px 0px 5px #000',
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        width: '300px'
    },
    command: {
      padding: '4px',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      color: '#ddd'
    }
}