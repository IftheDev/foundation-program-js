// array
let name = ["Shahinur", "Trisha", "Tasnim", "Momo", "Najiba"];
console.log(name);
console.log(name[0]);
console.log(name.length);
console.log(typeof name);

let number = [100, 200, 250, 300, 600];

console.log(name[1], number[3]);
console.log(name[7], number[4]);
console.log(name[3], number[6]);
console.log(name[8], number[8]);

let arr = ["Ifthe", true, 30, NaN, undefined, null, {}, [45, 3, [74, 100], 6]];
console.log(arr);
console.log(arr[7]);
console.log(arr.length);

let num = [5, 6, [45, 77, [88, 11, 100], 69], 10];
console.log(num.length);
console.log(num[2]);
console.log(num[2].length);
console.log(num[2][2]);
console.log(num[2][2].length);
console.log(num[1]);
console.log(num[1].length);

// array operations
// push()
name.push("Saky");
name.push("Suzana");
console.log(name);

// pop()
name.pop();
console.log(name);

// unshift()
name.unshift("Ifthe");
console.log(name);

// shift()
name.shift();
console.log(name);

// splice(start index, delete count, add item)
name.splice(3, 0, "Ifthe");
console.log(name);

name.splice(2, 1, "Nazia");
console.log(name);

let arr2 = [1, 2, 5];
arr2.splice(2, 0, 3, 4);
console.log(arr2);

// slice()
const pizza = [1, 2, 3, 4, 5, 6, 7, 8];
pizza.slice(2, 4);
console.log(pizza);

console.log(pizza.slice(2, 4));
console.log(pizza.slice(-4));
console.log(pizza.slice(-1));
console.log(pizza.slice(2, -1));
console.log(pizza.slice(-2, -5));


let slicedPizza = pizza.slice(2, 4);
console.log(slicedPizza);

// split()
const sentence = "I am Ifthe and I am a web developer";
console.log(sentence.split());
console.log(sentence.split(''));
console.log(sentence.split(' '));
console.log(sentence.split('a'));
console.log(sentence.split('am'));

// substring(): Doesn't work in Array
let str = "Hello world";
console.log(str.substring(0, 5));
console.log(str.substring(6));
console.log(str.substring(-6));
console.log(str.substring(6, 3));
console.log(str.substring(-6, -3));

// substr(): Doesn't work in Array
let word = "Java Script"
console.log(word.substr(1, 3));
console.log(word.substr(6));
console.log(word.substr(-6));
console.log(word.substr(6, 3));
console.log(word.substr(-6, -3));
console.log(word.substr(-6, 3)); 
