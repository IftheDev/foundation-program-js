// nested data
let user = {
    name: "Ifthe",
    age: 25,
    address: {
        city: "Dhaka",
        area: "Mirpur",
        zipcode: 6000,
    },
};

console.log(user.address.zipcode);
console.log(user["address"]["zipcode"]);
console.log(user.address["zipcode"]);
console.log(user["address"].zipcode);

let entry = Object.entries(user);
console.log(entry);
console.log(entry[0]);
console.log(entry[0][1]);
console.log(entry[2]);
console.log(entry[2][1]);
console.log(entry[2][1].city);
console.log(entry[2][1]["zipcode"]);

let students = [
    {
        name: "Rahim",
        id: 101,
    },
    {
        name: "Karim",
        id: 102,
    },
    {
        name: "Fahim",
        id: 103,
        address: {
            area: "Badda",
            thana: "Vatara",
            lane: "Embassy lane",
            option: ["Victor", "Dhaka"],
        },
    },
];

console.log(students);
console.log(students[2]);
console.log(students[2].id);
console.log(students[2]["id"]);
console.log(students[2].address);
console.log(students[2].address.lane);
console.log(students[2].address.option);
console.log(students[2].address.option[1]);

students[2]["address"]["option"][1] = "Sylhet";
console.log(students[2].address.option[1]);

students[2].address.option.pop();
console.log(students[2].address.option);

delete students[2].address;
console.log(students[2]);