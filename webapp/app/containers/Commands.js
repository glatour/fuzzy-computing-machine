import { connect } from 'react-redux'
import { sendCommand } from '../actions'
import Commands from '../components/commands/commands'

const mapStateToProps = (state) => {
  return { }
}

const mapDispatchToProps = (dispatch) => {
  return { 
      sendCommand: (command) => {
        console.log(command);
          dispatch(sendCommand(command));
      }
  }
}

const CommandsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Commands)

export default CommandsContainer