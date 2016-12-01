import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import { SEND_JOYSTICK_MOVING, SEND_JOYSTICK_STOP, SEND_CAMERA_PAN } from '../actions'

const logs = (state = [], action) => {
  switch (action.type) {
    case 'SENDING_COMMAND':
      return state.concat({
        timestamp: Date.now(),
        command: action.command
      })
    case SEND_JOYSTICK_MOVING:
      return state.concat({
        timestamp: Date.now(),
        command: `move dist:${action.data.degree} deg:${action.data.distance}`        
      })
    case SEND_JOYSTICK_STOP:
      return state.concat({
        timestamp: Date.now(),
        command: `stop`        
      })
    case SEND_CAMERA_PAN:
      return state.concat({
        timestamp: Date.now(),
        command: `pan [${action.data.deltaX},${action.data.deltaY}]`        
      })
    default:
      return state
  }
}

const app = combineReducers({
  logs,
  visibilityFilter
})

export default app