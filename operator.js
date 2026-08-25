const a = 10;
const b = 3;

const sum = a + b;
// console.log(a + b);
console.log(sum);

const division = a / b;
console.log(parseInt(division));
console.log(parseFloat(division));
console.log(division.toFixed(2));

console.log(typeof division, typeof division.toFixed(2));

const reminder = a % b;
console.log(reminder);

let sum2 = a + b;
// sum2 = sum2 + 10;
sum2 += 10;
console.log(sum2);

let c = a > b;
console.log(c);

c = a < b;
console.log(c);

let d = a > b && 10;
console.log(d);

d = a < b && 10;
console.log(d);

let e = a < b || 10;
console.log(e);

const f = !(a < b) && 10;
console.log(f);