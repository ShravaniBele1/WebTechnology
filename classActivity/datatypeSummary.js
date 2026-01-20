//symbol-> used in the case of unique id 

const anotherId = Symbol ("12");
console.log(anotherId);
console.log(typeof(anotherId));

const Id = 123
console.log(Id === anotherId);

// q.javascript is static or dynamic

// array
const arr1 = ["ABC","DEF","ACH"];
const arr2 = [1,2,3,4,5];

//objects-key value pair

 const obj = {
    Fname : "js",
    age : 24
 }
 console.log(obj.age);

//functions - 
//what is function declaration and definition 
//function call

const myFunction = function()
{
    console.log("Shravani");
}
myFunction();

//activity 01 - study functions 