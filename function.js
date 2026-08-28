// functions are reusable code blocks to perform a particular task.

function total(price, quantity) {
    const grandTotal = price * quantity;
    // console.log(grandTotal);
    return grandTotal;
}

const price = 10;
const quantity = 12;
const spend = total(price, quantity);
console.log(spend);

const save = 200 - spend;
console.log(save);

function total2(price = 10, quantity = 12) {
    const grandTotal = price * quantity;
    return grandTotal;
}

const spend2 = total2()
console.log(spend2);

function total3(price, quantity = 12) {
    const grandTotal = price * quantity;
    return grandTotal;
}

const spend3 = total3(10)
console.log(spend3);

// void function
function sayHello(name) {
    console.log(`Hello ${name}!`);
}

sayHello("Ifthe");