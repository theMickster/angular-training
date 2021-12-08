const blue = 'color:deepskyblue;';
const yellow = 'color:yellow;';
const green = 'color:green;';
const magenta = 'color:fuchsia;';
const red = 'color:salmon;';
const orange = 'color:orange';
const cyan = 'color:cyan';

function logColor(val, color) {
  console.log(`%c${val}`, color);
}

export const logYellow = (v) => logColor(v, yellow);
export const logBlue = (v) => logColor(v, blue);
export const logGreen = (v) => logColor(v, green);
export const logMagenta = (v) => logColor(v, magenta);
export const logRed = (v) => logColor(v, red);
export const logOrange = (v) => logColor(v, orange);
export const logCyan = (v) => logColor(v, cyan);

export function logNothing() {
  console.log('');
}
