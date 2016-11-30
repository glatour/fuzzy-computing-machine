import React from 'react';

export default class Camera extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var that = this;

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    if (navigator.getUserMedia) {       
        navigator.getUserMedia({video: true}, handleVideo, videoError);
    }
    function handleVideo(stream) {
        that.video.src = window.URL.createObjectURL(stream);
    }
    function videoError(e) {
        console.error(e);
    }

    return (
        <video  style={styles.video} autoPlay="true"
                ref={(ele) => { this.video = ele; }} />
    );
  }
}

const styles = {
    "video": {
        width: '100%',
        height: '100%'
    }
}