
const split = new Date().toString().split(" ");
const timeZone = split.slice(-3).join(' ')
console.log(timeZone)

console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);

/*
let offset = new Date().getTimezoneOffset();
console.log(`Date().getTimezoneOffset() ${offset} in minutes`);
console.log(`Date().getTimezoneOffset() ${offset/60} in hours`);
*/

console.log( Number(new Date(2023, 2, 6, 7, 50)).toString());