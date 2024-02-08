/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

const { of, interval } = require('rxjs');
const { concatMapTo, take } = require('rxjs/operators');

interval(1000)
    .pipe(
        take(2),
        concatMapTo(of('a', 'b'))
    )
    .subscribe(x => console.log(x));
//Output:
// a
// b
// a
// b
