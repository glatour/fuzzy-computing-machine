import { connect } from 'react-redux'
import { sendCommand, sendJoystickMoving,  sendJoystickStop} from '../actions'
import Commands from '../components/commands/commands'

const mapStateToProps = (state) => {
  return { }
}

const mapDispatchToProps = (dispatch) => {
  return { 
      onMove: (data) => {
          dispatch(sendJoystickMoving(data));
      },
      onRelease: () => {
          dispatch(sendJoystickStop());
      }
  }
}

const CommandsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Commands)

export default CommandsContainer