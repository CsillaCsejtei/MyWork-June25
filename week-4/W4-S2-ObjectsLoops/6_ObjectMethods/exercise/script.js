// 1. Object.keys() - TODO: WHat does this method do? What is the output?
// The Object.keys() method takes the "person" object and returns the keys of the array: name, age, city.
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};
console.log("Keys:", Object.keys(person));

// 2. Object.values() - TODO: WHat does this method do? What is the output?
//prints out the values of the array: Alice, 30, New York
console.log("Values:", Object.values(person));

// 3. Array.push() - TODO: WHat does this method do? What is the output?
//Add an extra element to the end of the array. Print all 3 fruits as an array
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log("After push:", fruits); // ["apple", "banana", "orange"]

// 4. Array.pop() - TODO: WHat does this method do? What is the output?
//Deletes the last element from the array. Print the rest of the array which has 2 fruits now.
let poppedFruit = fruits.pop();
console.log("After pop:", fruits); // ["apple", "banana"]
console.log("Popped fruit:", poppedFruit); // "orange"

// 5. Array.shift() - TODO: WHat does this method do? What is the output?
//Deletes the first element of the array. Prints only one fruits because this is what left.
let shiftedFruit = fruits.shift();
console.log("After shift:", fruits); // ["banana"]
console.log("Shifted fruit:", shiftedFruit); // "apple"

// 6. Array.concat() - TODO: WHat does this method do? What is the output?
// It merges 2 arrays. Prints all elements together as 1 array.
let vegetables = ["carrot", "potato"];
let food = fruits.concat(vegetables);
console.log("After concat:", food); // ["mango", "banana", "carrot", "potato"]

// 7. Array.indexOf() - TODO: WHat does this method do? What is the output?
//returns the first index at which a given element can be found in the array, or -1 if it is not present.

let index = food.indexOf("banana");
console.log("Index of banana:", index); // 1

// 8. Array.includes() - TODO: WHat does this method do? What is the output?
// Checks if the element is in the array. If it is, returns true, otherwise false.
let hasMango = food.includes("mango");
console.log("Array contains mango:", hasMango); // true

// 9. Array.filter() - Creates a new array with all elements that pass a test
let longFoods = food.filter((item) => item.length > 5);
console.log("Foods with more than 5 letters:", longFoods); // ["banana", "carrot", "potato"]
