"use strict";


// this is an object
let car = {
    name: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "black",
};


let fruits = [];
fruits.push("apple", "banana", "orange", "mango");
console.log(fruits);

//pop method
fruits.pop(2, 1, "kiwi", "orange");
console.log(fruits);


//shift
fruits.shift(1);
console.log(fruits);


//unshift
fruits.unshift("kiwi", "orange");
console.log(fruits);


//conditional operators
let currentYear = 2025;
let age = 18;
let response;

if (age >= 18){
    console.log("You are eligible to vote!");
} else {
    console.log("You are not eligible to vote!");
}


//ternary operator
response = (age == 18) ? "You can vote!" : "You can't vote!";
console.log(response);

