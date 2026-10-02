// object
let user = {
    name: "Ifthe",
    age: 25,
    address: "Bangladesh"
};

console.log(user);
console.log(user.name);
console.log(user["name"]); //user[`${}`]

delete user.address;
console.log(user);

delete user["age"];
console.log(user);

user.address = "Sylhet";
console.log(user);

user["age"] = 18;
console.log(user);

user.address = {
    city: "Dhaka",
    area: "Gazipur",
};
console.log(user);

console.log(Object.keys(user));
console.log(Object.entries(user));
console.log(Object.values(user));

const keyName = "age";
console.log(user[keyName]);
console.log(user.keyName); //undefined

// [`${}`] Example:
const userScores = {
    game1: 85,
    game2: 92,
    game3: 78
};

let level = 2;
console.log(userScores[`game${level}`]);