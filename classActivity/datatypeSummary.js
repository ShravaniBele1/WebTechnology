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

//Lab02-
//memory - there are 2 types of memory stack and heap
//stack - used for primitive data types 
//heap- used for non-primitive

let my_new_youtube_channel ='SSB';
let new_youtube_channel = my_new_youtube_channel;

console.log(my_new_youtube_channel);
console.log(new_youtube_channel);

new_youtube_channel = "abc";
console.log(my_new_youtube_channel,new_youtube_channel);

//primitive data type are stored in stack when we assign one varibale to another copy is made so changing one doesnot affect anotherId.

let user1  ={
    fname:"shra",
    age:21,
    id:12
}
let user2 = user1;
user2.id = 25;
console.log(user1);
console.log(user2);

//non-primitive data type and objects are stored in heap memory when we assign 1 object to another variable ref is copied not the value so if we change 1 both the values will change