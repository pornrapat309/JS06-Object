// Sub program-1 : Input
let name = prompt('Enter Product name');
let quantity = +prompt('Enter Quantity');
let price = +prompt('Enter Price');
let discount = +prompt('Enter Discount');

// Sub program-1 : CreateObject
// const product = {
//     name: name, // name: 'Hermes',
//     quantity: quantity,
//     price: price,
//     discount: discount,
// };
// เมื่อชื่อ key ตรงกับชื่อตัวแปรที่เก็บ valve *** สามารถยุบ syntax (property shorthand)
const products = {
    name,
    quantity,
    price,
};
if (discount != 0) {
    products['discount'] = discount;
}

// Sub program-1 : Calculate Price
// discount 10%, paid 90%
// dicount 0.1, paid 0.9
// price, quantity, discount => price
// function calcPrice () {
//     let totalPrice = price * quantity * (1 - discount);
//     //                          100*10 (1-0.1) => 1000(0.9) => 900
//     return totalPrice;
// }

// let result = calcPrice(product.price,product.quantity,product.discount);
// console.log(result);

function calcPrice(productsObj) {
    let price = productsObj.price;
    let quantity = productsObj.quantity;
    let discount = productsObj.discount ? productsObj.discount : 0;
    return (price * quantity * (1 - discount));
}
let result = calcPrice(products);

console.log(result);