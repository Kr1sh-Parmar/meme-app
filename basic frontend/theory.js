// 1️⃣ VARIABLES & DATA TYPES
console.log("=== 1️⃣ Variables & Data Types ===");

// Declaring variables
let name = "John";  // Mutable variable
const age = 25;  // Immutable variable
var city = "New York"; // Avoid using var

// Different Data Types
let isCool = true;  // Boolean
let price = 99.99;  // Number
let fruits = ["Apple", "Banana", "Cherry"]; // Array
let person = { name: "Alice", age: 22 }; // Object

console.log(name, age, city, isCool, price, fruits, person);

// -------------------------------------------------------

// 2️⃣ FUNCTIONS
console.log("\n=== 2️⃣ Functions ===");

// Regular function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Tapan"));

// Arrow function
const greetArrow = (name) => `Hello, ${name}!`;
console.log(greetArrow("Isha"));

// -------------------------------------------------------

// 3️⃣ LOOPS
console.log("\n=== 3️⃣ Loops ===");

// For loop
for (let i = 1; i <= 3; i++) {
    console.log(`Loop iteration ${i}`);
}

// While loop
let i = 1;
while (i <= 3) {
    console.log(`While loop iteration ${i}`);
    i++;
}

// -------------------------------------------------------

// 4️⃣ OBJECTS & JSON
{
    "name": "Tapan",
    "age": 25,
    "skills": ["JavaScript", "React", "Python"]
}
// JavaScript Object
let user = { name: "Amit", age: 30 };

// Convert JavaScript Object to JSON
let jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Amit","age":30}'

// Convert JSON to JavaScript Object
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Amit


// -------------------------------------------------------

// 5️⃣ ARRAYS & METHODS
console.log("\n=== 5️⃣ Arrays & Methods ===");

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.map(num => num * 2)); // Multiply each element by 2
console.log(numbers.filter(num => num % 2 === 0)); // Get even numbers

// -------------------------------------------------------

// 6️⃣ ASYNCHRONOUS JAVASCRIPT
console.log("\n=== 6️⃣ Asynchronous JavaScript ===");

// setTimeout example
setTimeout(() => console.log("Hello after 2 seconds"), 2000);

// -------------------------------------------------------

// 7️⃣ PROMISES & ASYNC/AWAIT
let myPromise = new Promise((resolve, reject) => {
    let isFoodReady = true;
    
    setTimeout(() => {
        if (isFoodReady) {
            resolve("Your food is ready! 🍕");
        } else {
            reject("Sorry, we ran out of ingredients. ❌");
        }
    }, 2000);
});

// Consuming the Promise
myPromise
    .then(message => console.log(message)) // Runs if resolved
    .catch(error => console.log(error)); // Runs if rejected


// Async/Await example
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users"); // API call
        let data = await response.json(); // Convert response to JSON
        console.log(data);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

fetchData(); // Call the function


// -------------------------------------------------------

// 8️⃣ ES6+ FEATURES
console.log("\n=== 8️⃣ ES6+ Features ===");

// Destructuring
let user2 = { name: "Aryan", age: 28 };
let { name: userName, age: userAge } = user2;
console.log(`User: ${userName}, Age: ${userAge}`);

// Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; 
console.log("Merged Array:", arr2);

// Template Literals
console.log(`Hello, ${userName}!`);

// Default Parameters
function greetWithDefault(name = "Guest") {
    return `Hello, ${name}`;
}
console.log(greetWithDefault()); // Default value used

// Arrow Function
const add = (a, b) => a + b;
console.log("Sum:", add(2, 3));
