let calculator = {
    read() {
        this.x = +prompt('Enter number 1');
        this.y = +prompt('Enter number 2');
    },
    sum() {
        return this.x + this.y;
    },
    mul() {
        return this.x * this.y;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());