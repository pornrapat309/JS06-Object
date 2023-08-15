function isEmptyObj (obj) {
    let isEmpty = true;
    for(let key in obj) {
        isEmpty = false;
    }
    return isEmpty;
}

  function calSalaries (Object) {
    if(isEmptyObj(Object)) return 0;
    let sum = 0;
    for (let key in Object) {
        sum += Object[key];
    }
    return sum;
  }

  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let total = calSalaries(salaries);
console.log(total)