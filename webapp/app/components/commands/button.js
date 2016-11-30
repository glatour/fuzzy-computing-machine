import React from 'react';
import Radium from 'radium';

class Button extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
            hover: false
        }
    }

    mouseOver () {
        this.setState({hover: true});
    }

    mouseOut () {
        this.setState({hover: false});
    }

  render() {
    return (
        <div key="test" style={ styles.command } onClick={ () => this.props.onClick() }>
            { this.props.children }
        </div>
    );
  }
}

export default Radium(Button);

const styles = {
    command: {
      textAlign: 'center',
      padding: '8px',
      margin: '4px',
      width: '30px',
      height: '30px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: '#ddd',
      ':active': {
        color: '#ff0',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      }
    }
}