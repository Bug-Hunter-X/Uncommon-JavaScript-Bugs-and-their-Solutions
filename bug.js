function foo(a, b) {
  return a + b;
}

function bar(a, b) {
  return a - b;
}

console.log(foo(2, 3)); // 5
console.log(bar(5, 2)); // 3

// Uncommon bug: Incorrect use of the 'this' keyword
function myFunc() {
  console.log(this);
}

myFunc(); // In non-strict mode, 'this' will likely be the global object (window in browsers, or undefined in strict mode). 

const obj = {
  name: 'myObj',
  myMethod: function() {
    console.log(this.name); // 'myObj'
  }
};

obj.myMethod(); // 'this' is correctly bound to the object

const myFuncBound = myFunc.bind(obj); // Binding the 'this' keyword
myFuncBound(); // 'this' is bound to obj, even outside the object's context

// Another uncommon bug: Implicit type coercion
let x = 5;
let y = '10';
console.log(x + y); // '510' (String concatenation instead of numerical addition)
console.log(x - y); // -5 (Automatic type conversion to numbers before subtraction)

// Uncommon bug: Forgetting to handle edge cases
function calculateAverage(arr) {
  if (arr.length === 0) {
    return 0; // Handle empty array case
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calculateAverage([1, 2, 3])); // 2
console.log(calculateAverage([])); // 0

// Uncommon bug: Problems with closures
function outerFunc() {
  let outerVar = 10;
  function innerFunc() {
    console.log(outerVar); // Accesses the outer variable
  }
  return innerFunc;
}

const myClosure = outerFunc();
myClosure(); // 10
