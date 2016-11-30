export const sendCommand = (command) => {
  return {
    type: 'SENDING_COMMAND',
    command: command
  };
}

export const COMMANDS = {
  FORWARD: 'F',
  BRAKE: 'B',
  TURN_LEFT: 'L',
  TURN_RIGHT: 'R'
}