const fruits = {};
const TERMINAL = 'stop';


let key;
let value;

do {
    key = prompt('Enter fruit');
    value = +prompt('Enter Quatity');
    
    if (value == 1) {
        fruits[key] = value;
    } else if (value > 1) {
        fruits[`${key}s`] = value;
    }
} while (key != TERMINAL && value != TERMINAL);

console.log(fruits);
