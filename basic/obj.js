const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3:"c",
    4:"d"
}

// this will create nested objects
const obj3 = {obj1 , obj2}
console.log(obj3);

// this will concatinate two different objects
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);

// concatination using spread operator
const obj5 = {...obj1, ...obj2}
console.log(obj5);

// similarly we can concatinate an array in javaScript using spread
const arr1= [1,2,34,5,5]
const arr2 = [5,6,8,9,0]

const arr3 = [...arr1 , ...arr2]
console.log(arr3);

// hasOwnProperty function is used to check if a key exist in the object or in array
console.log(obj1.hasOwnProperty("1"));
