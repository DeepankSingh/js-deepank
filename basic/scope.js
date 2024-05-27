
// if (true) {
//     var a = 20;
// }
// a = 30;

// console.log(a);

// IIEF (Immediately Invoked Function) these functions are invoked as soon as they are defined

// They also help us saving from any pollution causing from global scope variables

// Declaration: they are declared inside parantesis

(function fun1(){
    console.log("Hello");
})();

// arrow function

const arrowFun = () => {
    console.log("Hellow 2");
};

((name) => {
    console.log(`Connected to ${name}`);
})("Nandini")

