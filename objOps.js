// object ops
let student = {
    name: "Shahinur",
    id: 33157,
    marks: {
        physics: 85,
        chemistry: 78,
        mathematics: 90,
    },
};

let totalMarks = 0;
let totalSubject = 0;

for (let subject in student.marks) {
    totalMarks += student.marks[subject];
    totalSubject++;
}
console.log(totalMarks, totalSubject);

let avg = (totalMarks / totalSubject).toFixed(2);
// console.log(avg.toFixed(2));

if (avg >= 80) {
    console.log("Passed with distinction. Got ", avg, "%");
}
else {
    console.log("Fail koreche porashunai focus dite hobe");
}

// task: koto gulo item kinechen and koto tk bill hoyeche shese BDT te dekhate hobe print kore

let cart = [
    { name: "Shirt", price: 1200, quantity: 2 },
    { name: "Pants", price: 1800, quantity: 1 },
    { name: "Socks", price: 150, quantity: 3 },
];

let itemQuantity = 0;
let totalPrice = 0;
for (const item of cart) {
    let totalItemPrice = item["price"] * item.quantity;
    itemQuantity += item.quantity;
    totalPrice += totalItemPrice;
}
console.log("Total Item:", itemQuantity);
console.log(`Total Price: ${totalPrice} BDT`);