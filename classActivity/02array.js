const Hero = ["bhib","doremon","shktiman"];
const fruit = ["apple","orange","mango"];

Hero.push(fruit);
console.log(Hero);

console.log(Hero[3]);
console.log(Hero[3][2]);

//array concate
const arr1 = [1,2,3,4,5];
const arr2 = [9,8,7,6,4];
console.log(arr1.concat(arr2));

const arr3 = [1,2,3,[4,5,6],7,[6,7],[4,5]];
console.log(arr3);

const arr4 = arr3.flat(Infinity);//faltens all levels no matter how deep
console.log(arr4);

const arr5 = arr4.flat(1); //how deep should be  a nested array specifies should be default value is 1
console.log(arr5);

//flat does not change original array it returns new array useful when working with nested data.

//datascripting using methods
console.log(Array.isArray("Shravani"));//check given values is given or not
console.log(Array.isArray(arr1));

console.log(Array.from("Shravani"));//converts an        objects like string ,map,sink into an array
console.log(Array.from({Name : "Shravani"}));

console.log(Object.keys({Name:"Shravani"}));
console.log(Object.values({Name : "Shravani"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));//create new array from given value no matters how many 

//Q] differnce between use of Array.of  and Array.from
