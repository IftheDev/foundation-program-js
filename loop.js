// for loop

for (let i = 0; i < 5; i++) {
    console.log(`count: ${i}`);
}

for (let i = 4; i >= 0; i--) {
    console.log(`count: ${i}`);
}


let fruits = ["Mango", "Durian", "Apple", "Orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`khabo: ${fruits[i]}`);
}

// while loop
let i = 0;
while (i < fruits.length) {
    console.log("khabo:", fruits[i]);
    i++;
}

let num = 1;
while (num <= 10) {
    if (num % 2 === 0) {
        console.log(`Even: ${num}`);
    }
    num++;
}

let n = 1;
while (n <= 10) {
    switch (true) {
        case n % 2 === 1:
            console.log("Odd:", n);
            break;
    };
    n++;

}

// do while loop
let a = 0;
do {
    console.log(a);
    a++;
}
while (a <= 5);

let b = 0;
do {
    console.log(b);
    b += 2;
}
while (b < 5);

let c = 10;
do {
    console.log(c);
    c++;
}
while (c < 5);

// for of loop
const numbers = [10, 20, 30, 40, 50];
for (const num of numbers) {
    console.log(num);
}

// for in loop
const student = {
    name: "Shahinur",
    roll: 33157,
    address: {
        city: "Sylhet",
        country: "Bangladesh",
    },
    subject: ["Physics", "Math", "Chemistry"],
};

for (const prop in student) {
    console.log(prop);
    console.log(student[prop]);
}