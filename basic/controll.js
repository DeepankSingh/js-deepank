
// Find if an object is empty
const obj1 ={}

if (Object.keys(obj1).length === 0) {
    console.log("object is empty");
} else {
    console.log("Object is not empty");
}


//to find if array is empty
let arr1 = []

if (arr1.length === 0) {
    console.log("array is empty");
}else{
    console.log("Array is not empty");
}

// Nullish Coalecing Operator: ?? null undefined
const N = null ?? undefined  ?? 10
console.log(N);