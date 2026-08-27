// string
let firstName = "Habibur";
let lastName = "Rahman";

let fullName = firstName + lastName;
console.log(fullName);

fullName = firstName + " " + lastName;
console.log(fullName);

fullName = `firstName + " " + lastName`;
console.log(fullName);

fullName = `${firstName} ${lastName}`;
console.log(fullName);

fullName = `${firstName} ${lastName} Sylhet`;
console.log(fullName);

fullName = `${firstName} ${lastName} \nSylhet`;
console.log(fullName);

fullName = firstName.concat(lastName);
console.log(fullName);

fullName = firstName.concat(" ").concat(lastName);
console.log(fullName);

let randomStr = "I am a \"student\"";
console.log(randomStr);

randomStr = "I am a 'student'";
console.log(randomStr);

randomStr = 'I am a "student"';
console.log(randomStr);

console.log(randomStr.includes("student"));

console.log(randomStr.length);

let address = "sylhet";
console.log(address.toUpperCase());