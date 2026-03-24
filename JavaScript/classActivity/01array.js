//array
let myArr =[1,2,3,4,5];
console.log(`My arr is : ${myArr}`);
console.log(typeof(myArr));

const Arr = new Array(1,2,3);
console.log(Arr);

//array methods

myArr.push(6);//add values in array
console.log(`My arr is : ${myArr}`);

myArr.pop();//remove last value from array
console.log(`My arr is : ${myArr}`);

myArr.unshift(0);//it shifts all elements and added at first position
console.log(`My arr is : ${myArr}`);

myArr.shift();
console.log(`My arr is : ${myArr}`);

console.log(myArr.includes(9));//to check whether value is present or not 
console.log(myArr.includes(1));

console.log(myArr.indexOf(4));

//Activity01 - study slice and split