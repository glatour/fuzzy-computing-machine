import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import Log from '../components/log/log'

const mapStateToProps = (state) => {
  return {
    logEntries: state.logs
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