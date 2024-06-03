// Creating two objects
const obj1 = {
    1: "a", // Key-value pair with key 1 and value "a"
    2: "b"  // Key-value pair with key 2 and value "b"
};

const obj2 = {
    3: "c", // Key-value pair with key 3 and value "c"
    4: "d"  // Key-value pair with key 4 and value "d"
};

// Creating a nested object using object shorthand notation
const obj3 = { obj1, obj2 }; // obj3 contains obj1 and obj2 as properties
console.log(obj3);

// Concatenating two different objects using Object.assign()
const obj4 = Object.assign({}, obj1, obj2); // Merging obj1 and obj2 into a new object obj4
console.log(obj4);

// Concatenating using the spread operator
const obj5 = { ...obj1, ...obj2 }; // Merging obj1 and obj2 into a new object obj5 using spread operator
console.log(obj5);

// Similarly, concatenating arrays using the spread operator
const arr1 = [1, 2, 34, 5, 5];
const arr2 = [5, 6, 8, 9, 0];
const arr3 = [...arr1, ...arr2]; // Merging arr1 and arr2 into a new array arr3 using spread operator
console.log(arr3);

// Using hasOwnProperty to check if a key exists in the object or array
console.log(obj1.hasOwnProperty("1")); // true
