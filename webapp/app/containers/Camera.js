import { connect } from 'react-redux'
import { sendPan} from '../actions'
import Camera from '../components/camera/camera'

const mapStateToProps = (state) => {
  return { }
}

const mapDispatchToProps = (dispatch) => {
  return { 
      onPan: (data) => {
          dispatch(sendPan(data));
      }
  }
}

const CameraContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Camera)

export default CameraContainer