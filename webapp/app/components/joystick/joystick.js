import React from 'react'
import * as nipplejs from 'nipplejs'

class Joystick extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'relative' }} 
                     ref="joystickContainer">
                </div>
            </div>)
    }

    componentDidMount() {
        this.joystick = nipplejs.create({
            zone: this.refs.joystickContainer,
            mode: 'static',
            position: {left: '50%', top: '50%'},
            size: 150,
            color: 'white'
        });
        this.joystick.on('move', function(target, e) {
            console.info(`joystick: degree: ${e.angle.degree}\tdistance: ${e.distance}`);
        })
        this.joystick.on('end', function(target, e) {
            console.info('joystick: released');
        })
    }
}

export default Joystick