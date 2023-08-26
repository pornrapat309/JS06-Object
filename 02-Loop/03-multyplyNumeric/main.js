const multiplyNumeric = (object,num) => {
    for(let key in object) {

        let value = object[key];
        if (typeof value === 'number') {
            object[key] = object[key] * num
        }
    }
}


let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};

multiplyNumeric(menu,3)
console.log(menu);