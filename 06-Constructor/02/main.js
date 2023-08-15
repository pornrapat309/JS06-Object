function Accumulator(startingValue) {
    this.currentValue = startingValue;
    this.read = function() {
        let value = +prompt('Enter number');
            if (!isNaN(value)) {
            this.currentValue += value;
        } else {
            alert('Invalid number');
        }
    };
    this.show = function() {
        alert(this.currentValue)
    };
}
// let newValue = new Accumulator(0);
let newValue2 = new Accumulator(10);

// newValue.read();
// newValue.show();

newValue2.read();
newValue2.show();
