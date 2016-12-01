export const sendCommand = (command) => {
  return {
    type: 'SENDING_COMMAND',
    command: command
  };
}

export const SEND_JOYSTICK_MOVING = 'SEND_JOYSTICK_MOVING'
export const sendJoystickMoving = (data) => {
  return {
    type: SEND_JOYSTICK_MOVING,
    data: {
      degree: data.degree,
      distance: data.distance
    }
  }
}

export const SEND_JOYSTICK_STOP = 'SEND_JOYSTICK_STOP'
export const sendJoystickStop = () => {
  return {
    type: SEND_JOYSTICK_STOP
  }
}

export const SEND_CAMERA_PAN = 'SEND_CAMERA_PAN'
export const sendPan = (data) => {
  return {
    type: SEND_CAMERA_PAN,
    data: {
      deltaX: data.deltaX,
      deltaY: data.deltaY
    }
  }
}

export const COMMANDS = {
  FORWARD: 'F',
  BRAKE: 'B',
  TURN_LEFT: 'L',
  TURN_RIGHT: 'R'
}