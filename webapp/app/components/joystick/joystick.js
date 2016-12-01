import React, { PropTypes } from 'react'
import * as nipplejs from 'nipplejs'
import * as Bacon from 'baconjs';

class Joystick extends React.Component {
    constructor(props) {
        super(props);
        this.getJoystickStream = this.getJoystickStream.bind(this)
    }

    render() {
        return (
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'relative' }} 
                     ref="joystickContainer">
                </div>
            </div>)
    }

    getJoystickStream(event) {
        return Bacon.fromBinder(function(sink) {
            this.joystick.on(event, function(target, e) {
                sink(e);
            });
        }.bind(this));
    }

    componentDidMount() {
        this.joystick = nipplejs.create({
            zone: this.refs.joystickContainer,
            mode: 'static',
            position: {left: '50%', top: '50%'},
            size: 150,
            color: 'white'
        });

        this.getJoystickStream('end')
            .throttle(100)
            .onValue(function(value) {
                console.info('joystick: released');
                this.props.onRelease();
            }.bind(this))
            
        this.getJoystickStream('move')
            .throttle(100)
            .map(function(e) {
                return {
                    degree: e.angle.degree,
                    distance: e.distance
                }
            })
            .onValue(function(value) {
                console.info(`joystick: degree: ${value.degree}\tdistance: ${value.distance}`);
                this.props.onMove(value)
            }.bind(this))
    }
}

Joystick.propTypes = {
    onMove: PropTypes.func.isRequired,
    onRelease: PropTypes.func.isRequired
}

export default Joystick