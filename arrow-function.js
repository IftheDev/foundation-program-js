const total = (price, quantity = 12) => {
    const grandTotal = price * quantity;
    return grandTotal;
}

const price = 12;
const spend = total(price);
console.log(spend);

const add = (a, b) => a + b;
const sum = add(5, 10);
console.log(sum);
