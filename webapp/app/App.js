import React from 'react';

import jss from 'jss'
import preset from 'jss-preset-default'

import LogsContainer from './containers/Log.js';
import CommandsContainer from './containers/Commands.js';
import CameraContainer from './containers/Camera.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styles.container}>
        <CameraContainer />
        <LogsContainer />
        <CommandsContainer />
      </div>
    );
  }
}

const styles = {
  container: {
    overflow: 'hidden',
    'display': 'flex',
    'alignItems': 'center',
    'position': 'absolute',
    'top': '0px',
    'right': '0px',
    'bottom': '0px',
    'left': '0px',
    'backgroundColor': '#000'
  }
}