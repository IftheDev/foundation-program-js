// scope

let age;

function sayAge() {
    age = 21;
}

sayAge();
console.log(age);

if (true) {
    let weight;
}

function sayWeight() {
    weight = 50;
}

sayWeight();
console.log(weight);

{
    let height;
}

const sayHeight = () => height = 30;

sayHeight();
console.log(height);

let age2 = 31;

{
    console.log(age2);
}

/* 
{
    let age3 = 59;
}

console.log(age3);
*/

