//### Object declaration ###
// {} = oblect / scope
// valve = any datatype
// key_name = datatype : string

let user = {
    firstName: "Pim",
    lastName: "Kaew",
    age: 30,
    isAdmin: true,
    'like human': true,
};
console.log(user);


//### ACCESS, MODIFY, DELETE ###

// GET, POLL, READ
console.log(user.firstName === "Pim");
console.log(user.lastName);
console.log(user.age);
console.log(user.isAdmin);

// MODIFY, UPDATE
// syntax : obj.key = newValve
user.firstName = "Pimmmmm";
user.age = 25;
user.age += 2;
user.age++;
console.log(user.age);

// ADD
user.address = "bangkok";
console.log(user);

// DELETE
// syn : del obj.key
delete user.isAdmin;
console.log(user);


//### NESTED Object ###

const employee = {
    fullName: 'John Doe',
    salary: 500_000,
    address: {
        district : 'Phaya Thai',
        province: 'Bangkok',
        country: 'Thailand',
    },
};

console.log(employee.salary);
console.log(employee.address);
console.log(employee.address.province);

employee.address.province = 'Nontaburian';

// dot ใช้กับ obj เท่านั้น
// ห้ามใช้กับ undefined
// วิธีแก้ ใช้ optional chaining
console.log(employee.addr); // Undefined
// console.log(employee.addr.province); // Undefined.provonce => Error
console.log(employee.addr?.province); 
console.log(employee.address?.province); 


// ### Check key? ###

const product = {
    id: 227,
    name: 'Iphone',
    price: 50_000,
    // discount: 0.05,
    'is mobile': true,
}
console.log(product.id);
console.log(product.discount);
console.log('name' in product);
console.log('discount' in product);

console.log(product.hasOwnProperty('name'));


// ### Bracket Notation ###

console.log(product['is mobile']);
product['name'] = 'Iphone 15';
console.log(product['name']);