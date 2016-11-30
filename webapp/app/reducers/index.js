import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';

const logs = (state = [], action) => {
  switch (action.type) {
    case 'SENDING_COMMAND':
      return state.concat({
        timestamp: Date.now(),
        command: action.command
      });
    default:
      return state
  }
}

const app = combineReducers({
  logs,
  visibilityFilter
})

export default app