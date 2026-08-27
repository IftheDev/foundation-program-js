// falsy value: false 0 "" null undefined NaN

let age = 0;
if (age) {
    console.log("Age exists");
}
else {
    console.log("Kicchu nai");
}

console.log(age * "hello");

console.log(typeof NaN);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof false);
console.log(typeof "");