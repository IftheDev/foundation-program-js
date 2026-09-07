// input from terminal

const weight = process.argv[2];
const height = process.argv[3];
console.log(weight, height);

function calculateBmi(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
}

console.log(calculateBmi(weight, height));

/**
 * Problem Statement:
 * Write a JavaScript program to evaluate a person's Body Mass Index (BMI) 
 * based on WHO (World Health Organization) standards and determine whether 
 * the person is "Underweight", "Fit" (Normal Weight), or "Overweight".
 * 
 * WHO Categories:
 * - Underweight : BMI < 18.5
 * - Fit         : BMI 18.5 - 24.9
 * - Overweight  : BMI >= 25.0
 */

const bmiCalculate = (weight, height) => {
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "Underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Fit";
    }
    else {
        return "Overweight";
    }
}

const bmiStatus = bmiCalculate(weight, height);
console.log(bmiStatus);