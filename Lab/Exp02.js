//activityo1- create array ,function and object and print to console
//reverse numb,check num palindrome,fibonacci series,find largest element in array,remove duplicate ele in array
//find missing num in array,reverse string, count vowels in string, check palindrome in string
//check prime number , factorial number , function to find even or odd,function to find sum of array

//activityo1- create array ,function and object and print to console
console.log("Activity01");
let arr = [1,2,3,4,5];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

let myfunction = function(){
    console.log("Hello World ");
}
myfunction();

let myInfo = {
    name : "Shravani",
    age : 21,
} 
console.log(myInfo.name);
console.log( );

//activity02 - reverse number

console.log("Activity02");
let num = 1234;
let reverse = 0;

while(num>0)
{
    rem = num % 10 ;//4,3
    reverse = reverse*10 + rem ;//4
    num = Math.floor(num /10) ;//123
}

console.log("Reverse number : ", reverse);
console.log( );

//activity03 - check num palindrome

console.log("Activity03");
let num1 = 1221;
let temp = num1;
let reverseNum =0;

while(num1>0)
{
    rem1 = num1 % 10 ;//4,3
    reverseNum = reverseNum*10 + rem1 ;//4
    num1 = Math.floor(num1 /10) ;//123
}

if(temp == reverseNum)
{
    console.log("num1 is palindrome");
}
else
{
    console.log("num1 is not palindrome");
}
console.log( );


//activity04 -Fibonacci series

console.log("Activity04");
let a = 0;
let b = 1;
console.log(a);
console.log(b);
let c;
let n=10;

for(let i=2;i<n;i++)
{
    c = a+b;
    console.log(c);
    a = b;
    b = c;
} 
console.log( );

//activity05 - find largest element in array

console.log("Activity05");
let arr1 = [24,56,84,33,7];
let lar = arr[0];

for(let i = 0; i < arr1.length; i++)
{
    if(arr1[i] > lar)
    {
        lar = arr1[i];
    }
}

console.log("Largest number in array is :",lar);
console.log( );

//activity06 - remove duplicate element in array

console.log("Activity06");
let arr2 = [12,45,23,45,23,56];

for(let i=0 ; i<arr2.length ;i++)
{
    console.log(arr2[i]);

    for(let j=i+1 ; j<arr2.length ; j++)
    {
        if(arr2[i] === arr2[j])
        {
            arr2.splice(j,1); 
            j--; 
        }
    }

}
console.log();

//activity07- Find missing number in array

console.log("Activity07");
let arr3 = [0,4,1,3];

for(let i=0; i<=arr3.length ;i++)
{
    if(arr3.includes(i))
    {
        continue;
    }
    else
    {
        console.log("Missing value in the array is : ",i);
    }
    
}
console.log();

//activity08- reverse string

console.log("Activity08");
let str = "Neha";
let reverseStr = "" ;

for(let i=str.length-1; i>=0 ;i--)
{
    reverseStr = reverseStr + str[i];
}

console.log(reverseStr);
console.log();
//2nd method 
// let str1 = "Neha";
// let reversed = str1.split("").reverse().join("");
// console.log(reversed);

//activity09 - count vowels in string

console.log("Activity09");
let str1 = "Shravani";
let vowels = ['a','e','i','o','u','A','E','I','O','U'];
let count = 0;

for(let i=0; i<str1.length ;i++)
{
    if(vowels.includes(str1[i]))
    {
        count++;
    }
}
console.log("Total vowels in the string : ",count);
console.log();

//activity10 - check string palindrome

console.log("Activity10");
let str2 = "ABCCBA";

let revStr = str2.split("").reverse().join("");
if(str2 == revStr)
{
    console.log("String is palindrome");
}
else
{
    console.log("String is not palindrome");
}
console.log();

//activity11 - check prime number;

console.log("Activity11");
let number = 12;
let isPrime = true;

if(number <= 1 )
{
    isPrime = false;
}
else
{
    for(let i=2; i<=Math.sqrt(number); i++)
    {
        if(number % i === 0)
        {
            isPrime =false;
            break;
        }
    }
}

if(isPrime)
{
    console.log(number," is prime number");
}
else
{
    console.log(number," is not a prime number");
}
console.log();

//activity12 - find factorial of number

console.log("Activity12");
let num4 = 5;
let fact = 1 ;

for(let i=1; i<=num4 ;i++)
{
    fact = fact*i;
}
console.log("Fcatorial of ",num4," is : ",fact);
console.log();

//activity13 - function to find even or odd

console.log("Activity13");
let num5 = 57;

let myFunction = function(num5){
    if(num5 % 2 === 0)
    {
        console.log(num5," is even number.");
    }
    else
    {
        console.log(num5," is odd number.");
    }
}  
myFunction(num5);
console.log();

//Activity14 - sum of array

console.log("Activity14");
let myArr = [1,2,3,46,5];
let sum = 0 ;

for(let i=0; i<myArr.length ;i++)
{
    sum = sum + myArr[i];
}
console.log("Sum of array is : ",sum);