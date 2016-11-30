import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import Log from '../components/log/log'

const mapStateToProps = (state) => {
  return {
    logEntries: state.logs,
    items: [
        {text: '1', key: 1},
        {text: '2', key: 2},
        {text: '3', key: 3},
        {text: '4', key: 4},
        {text: '5', key: 5},
    ]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {  }
}

const LogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Log)

export default LogsContainer