import React from 'react';

import jss from 'jss'
import preset from 'jss-preset-default'

import LogsContainer from './containers/Log.js';
import CommandsContainer from './containers/Commands.js';
import Camera from './components/camera/camera.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    jss.setup(preset())
  }
  render() {
    return (
      <div style={styles.container}>
        <Camera />
        <LogsContainer />
        <CommandsContainer />
      </div>
    );
  }
}

const styles = {
  container: {
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