//activity01- different between arrow function and simple function
//what is use of this keyword ? why we not use this keyword in arrow function ?
//write code for arrow function with 3 examples
//write code for switch case in js
//how to use truthy and faulsy values in js with examples
//how to use ternary operators in js
//write code for how to use  loops in array with examples
//what is difference in for-of and for-in with ex.
//how to use filter and map function in js with 3 ex.


//difference between arrow function and simple function?
// | Feature          | Simple Function | Arrow Function            |
// | ---------------- | --------------- | ------------------------- |
// | Syntax           | Longer          | Short                     |
// | `this`           | Own `this`      | Inherits from parent      |
// | arguments object | Available       | Not available             |
// | Constructor      | Can use `new`   | Cannot use `new`          |
// | Hoisting         | Hoisted         | Not hoisted               |
// | Return           | Needs `return`  | Auto return (single line) |

//1.difference between array function and simple function
// | Aspect                | Simple Function                                                 | Array Function                                        |
// | --------------------- | --------------------------------------------------------------- | ----------------------------------------------------- |
// | **Definition**        | A function that works with single values (number, string, etc.) | A function that works with arrays as input            |
// | **Data Handling**     | Handles **one value at a time**                                 | Handles **multiple values** stored in an array        |
// | **Parameters**        | Uses normal variables as parameters                             | Uses an array as a parameter                          |
// | **Data Modification** | Primitive values are **not changed outside** the function       | Array changes **reflect outside** the function        |
// | **Complexity**        | Easy and straightforward                                        | Slightly complex due to looping                       |
// | **Use Case**          | Simple calculations or tasks                                    | Processing lists of data (marks, prices, names, etc.) |

//Simple function
function sum(a,b){
    return a+b;
}
let add = sum(1,2);
console.log(`Addition : ${add}`);

//Array Function
function sum1(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
let num = [1,2,3,4,5];
sum1(num);

//2.what is use of this keyword use in array and simple function
// In JavaScript, this refers to the object that is currently calling the function.
// Its value depends on how the function is called, not where it is written.

//in simple function
function show() {
    console.log(this);
}
show();

let student = {
    name: "Shravani",
    showName: function () {
        console.log(this.name);
    }
};
student.showName();


//Arrow function



//4.write code for arrow function with 3 examples
//1.
const even = (n) => {
    if(n%2==0){
        console.log(`${n} is even`);
    }
    else{
        console.log(`${n} is odd number`);
    }
}
even(8);

//2.
const fact = (n) =>{
    let fact =1;
    while(n>0){
        fact = fact * n ;
        n--
    }
    console.log(fact);
}
fact(5);

//3.
const math = (a,b) => {
    console.log(`Addition : ${a+b}`);
    console.log(`substraction : ${a-b}`);
    console.log(`Multiplication : ${a*b}`);
    console.log(`Division : ${a/b}`);
    console.log(`Modulus : ${a%b}`);

}
math(7,8);


//5.write a code for switch case in js
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid Day");
}


//6.how to use truthy and falsy value in js withn ex
//false, 0, "", null, undefined, NaN -----> falsy value
let name = "";

if (name) {
  console.log("Valid Name");
} else {
  console.log("Empty Name");
}


//7.write a code for how to use loops in array withn ex
let arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


//8.what is difference bet for-of and for-in
//for-of
let arr1 = [10, 20, 30];
for (let val of arr1) {
  console.log(val);
}

//for-in
for (let i in arr) {
  console.log(i);
}

// | for-of          | for-in           |
// | --------------- | ---------------- |
// | Gives values    | Gives index      |
// | Used for arrays | Used for objects |


//9.how to use map and filter in js with 3.examples
//map()
let nums = [1, 2, 3];
let square = nums.map(n => n * n);
console.log(square); 

//filter()
let nums1 = [1, 2, 3];
let square1 = nums1.map(n => n * n);
console.log(square1); 

let nums2 = [2, 4, 6, 8];
let result = nums2
  .filter(n => n > 4)
  .map(n => n * 2);
console.log(result); // [12,16]

//10.ternary operator
let age = 18;
let msg = (age >= 18) ? "Adult" : "Minor";
console.log(msg); 