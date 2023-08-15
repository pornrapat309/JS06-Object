const user = {
    firstName: 'Codecamp',
    lastName: 'Software Pack',
    age: 15,
};

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}
