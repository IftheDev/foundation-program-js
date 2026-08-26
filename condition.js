//  if else, switch case, ternary
let age = 18;

if (age >= 18) {
    console.log("Voter");
}
else {
    console.log("Not a voter");
}

let marks = 80;

if (marks >= 80 && marks >= 90) {
    console.log("A+");
} else if (marks >= 70 || marks >= 75) {
    console.log("A");
} else if (marks >= 60) {
    console.log("A-");
} else {
    console.log("Need Improvement");
}

switch (true) {
    case marks >= 80:
        console.log("A+");
        break;
    case marks >= 70:
        console.log("A");
        break;
    default:
        console.log("Improvement");
        break;
}

let role = "Admin";

switch (role) {
    case "Admin":
        console.log("Welcome Admin!");
        break;
    case "Editor":
        console.log("Welcome Editor!");
        break;
    default:
        console.log("Welcome User!");
        break;
}

// ternary condition ? true: false;
age >= 18 ? console.log("Voter") : console.log("Not Voter");

let weight = 67;
weight >= 50 ? console.log("Overweight") : weight >= 40 ? console.log("Normal") : console.log("Underweight");

