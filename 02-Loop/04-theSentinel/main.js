const myFriend = {};
const TERMINAL = 'stop';

let key;
let value;

do {
    key = prompt("Enter friend'name");
    value = prompt("Enter friend'age");

    if (value > 1) {
        myFriend[key] = value;
    }

} while (key != TERMINAL && value != TERMINAL);

console.log(myFriend);