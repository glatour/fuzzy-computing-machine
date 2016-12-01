import React from 'react';
import * as hammerjs from 'hammerjs';
import * as Bacon from 'baconjs';

export default class Camera extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var that = this;

    return (
        <div style={ styles.cameraContainer } ref="videoContainer">
            {/*<video  style={styles.video} autoPlay="true"
                     ref="video"/>*/}
            <img style={ styles.image } src={ "http://i.imgur.com/VG2UvcY.jpg" } ref="video" />
        </div>
    );
  }

  componentDidMount() {

    // initialize camera
    // let that = this;
    // navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    // if (navigator.getUserMedia) {       
    //     navigator.getUserMedia({video: true}, handleVideo, videoError);
    // }
    // function handleVideo(stream) {
    //     that.refs.video.src = window.URL.createObjectURL(stream);
    // }
    // function videoError(e) {
    //     console.error(e);
    // }



    var hammertime = new Hammer(this.refs.videoContainer, {
      domEvents: true
    });
    hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    Bacon.fromBinder(function(sink) {
        hammertime.on('panmove', function(e) {
            sink(e);
        });
    })
    .throttle(100)
    .skipDuplicates(function(a, b) {
        return a.deltaX === b.deltaX && a.deltaY === b.deltaY;
    })
    .map(function(e) {
        return {
            eDeltaX: e.deltaX,
            eDeltaY: e.deltaY
        }
    })
    .scan({ eDeltaX: 0, eDeltaY: 0 }, function(a, b) {
        return {
            eDeltaX: b.eDeltaX,
            eDeltaY: b.eDeltaY,
            deltaX: b.eDeltaX - a.eDeltaX,
            deltaY: b.eDeltaY - a.eDeltaY 
        }
    })
    .filter(function(value){
        return !!value.deltaX;
    })
    .onValue(function(value) {
        console.info(`pan: deltaX: ${value.deltaX}\tdeltaY: ${value.deltaY}`);
        this.props.onPan(value);
    }.bind(this));
  }
}

const styles = {
    cameraContainer: {
      overflow: 'hidden', 
      userSelect: 'none',
      WebkitUserDrag: 'none',
      width: '100%'
    },
    image: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
      userSelect: 'none',
      WebkitUserDrag: 'none'
    },
    video: {
        width: '100%',
        height: '100%'
    }
}