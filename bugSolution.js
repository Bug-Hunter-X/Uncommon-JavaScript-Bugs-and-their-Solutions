function foo(a, b) {
  return a + b;
}

function bar(a, b) {
  return a - b;
}

console.log(foo(2, 3)); // 5
console.log(bar(5, 2)); // 3

// Solution: Using strict mode and explicit binding for 'this'
'use strict'; // Use strict mode to avoid implicit global binding

function myFunc() {
  console.log(this); // 'this' will be undefined in strict mode
}

myFunc(); // undefined

const obj = {
  name: 'myObj',
  myMethod: function() {
    console.log(this.name); // 'myObj'
  }
};

obj.myMethod(); // 'myObj'

const myFuncBound = myFunc.bind(obj); // Binding the 'this' keyword
myFuncBound(); // undefined (still undefined because myFunc doesn't use this)

// Solution: Explicit type checking or conversion
let x = 5;
let y = '10';
console.log(x + parseInt(y, 10)); // 15 (Explicit conversion to number)
console.log(x - parseFloat(y)); // -5 (Explicit conversion to number)

// Solution: Robust error handling
function calculateAverage(arr) {
  if (arr.length === 0) {
    return 0; // Handle empty array case
  }
  if (!Array.isArray(arr)){
    return NaN //handle non array input
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] !== 'number'){
      return NaN // handle non-number element
    }
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calculateAverage([1, 2, 3])); // 2
console.log(calculateAverage([])); // 0
console.log(calculateAverage([1,2,'a'])); //NaN
console.log(calculateAverage('test')); //NaN

// Solution: Careful consideration of scope and closures
function outerFunc() {
  let outerVar = 10;
  function innerFunc() {
    console.log(outerVar); // Accesses the outer variable
  }
  return innerFunc; // The inner function maintains a reference to the outerVar even after outerFunc has completed
}

const myClosure = outerFunc();
myClosure(); // 10