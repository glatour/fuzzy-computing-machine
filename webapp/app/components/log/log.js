import React, { PropTypes } from 'react';

class Log extends React.Component {
  
  constructor(props) {
    super(props);
    this.timeAgo.bind(this);

    setInterval(function() {
        this.forceUpdate();
    }.bind(this), 2000);
  }

  componentDidUpdate() {
      let node = this.logContainer;
      node.scrollTop = node.scrollHeight;
  }

  timeAgo(timeStamp) {
    return moment(timeStamp).fromNow();
  }

  render() {
    var items = this.props.logEntries.map(function(item) {
        return (
            <div key={ item.timestamp } style={ styles.log }>&gt;&nbsp;<div style={ styles.time }>{ this.timeAgo(item.timestamp) }</div> <div style={ styles.command }>command '{ item.command }' was sent</div></div>
        );
    }.bind(this));

    return (
        <div style={ styles.container }
             ref={(ele) => { this.logContainer = ele; }}>
            { items }
        </div>
    );
  }
}

Log.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired
    }))
}

export default Log;

const styles = {
    'container': {
        width: '100px',
        height: '100px',
        overflow: 'scroll',        
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        color: '#aaa',
        border: 'solid 1px #666',
        boxShadow: '0px 0px 5px #000',
        position: 'absolute',
        top: '10px',
        right: '10px',
        width: '300px',
        padding: '8px',
        fontSize: '12px'
    },
    log: {
        display: 'flex'
    },
    time: {
        flex: '0 0 130px'
    },
    command: {
        color: '#fff'
    }
}