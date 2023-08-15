function Calculator() {
    this.read = function() {
        this.x = +prompt('Enter number 1');
        this.y = +prompt('Enter number 2');
    };
    this.sum = function() {
        return this.x + this.y;
    };
    this.mul = function() {
        return this.x * this.y;
    };
}

let cal = new Calculator();

cal.read();
alert(cal.sum());
alert(cal.mul());