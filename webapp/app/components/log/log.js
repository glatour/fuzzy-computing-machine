import React, { PropTypes } from 'react';

class Log extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var items = this.props.items.map(function(item) {
        return (
            <p key={item.text}>{ item.text }</p>
        );
    })
    return (
        <div style={ styles.container }>
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
        minHeight: '100px',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        border: 'solid 1px #666',
        boxShadow: '0px 0px 5px #000',
        position: 'absolute',
        top: '10px',
        right: '10px',
        width: '300px',
        padding: '8px'
    }
}