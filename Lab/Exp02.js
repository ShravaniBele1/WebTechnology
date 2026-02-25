// //activityo1- create array ,function and object and print to console
// //reverse numb,check num palindrome,fibonacci series,find largest element in array,remove duplicate ele in array
// //find missing num in array,reverse string, count vowels in string, check palindrome in string
// //check prime number , factorial number , function to find even or odd,function to find sum of array

//activity01- create array ,function and object and print to console
console.log("Activity01");
document.writeln("Activity01<br>");

let arr = [1,2,3,4,5];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
    document.writeln(arr[i] + "<br>");
}

let myfunction = function(){
    console.log("Hello World");
    document.writeln("Hello World<br>");
}
myfunction();

let myInfo = {
    name : "Shravani",
    age : 21,
}
console.log(myInfo.name);
document.writeln(myInfo.name + "<br><br>");


//activity02 - reverse number
console.log("Activity02");
document.writeln("Activity02<br>");

let num = 1234;
let reverse = 0;

while(num > 0)
{
    let rem = num % 10;
    reverse = reverse * 10 + rem;
    num = Math.floor(num / 10);
}

console.log("Reverse number:", reverse);
document.writeln("Reverse number: " + reverse + "<br><br>");


//activity03 - check num palindrome
console.log("Activity03");
document.writeln("Activity03<br>");

let num1 = 1221;
let temp = num1;
let reverseNum = 0;

while(num1 > 0)
{
    let rem1 = num1 % 10;
    reverseNum = reverseNum * 10 + rem1;
    num1 = Math.floor(num1 / 10);
}

if(temp == reverseNum)
{
    console.log(temp," is palindrome");
    document.writeln(temp," is palindrome<br><br>");
}
else
{
    console.log(temp," is not palindrome");
    document.writeln(temp," is not palindrome<br><br>");
}


//activity04 - Fibonacci series
console.log("Activity04");
document.writeln("Activity04<br>");

let a = 0;
let b = 1;
let n = 10;

console.log(a);
console.log(b);
document.writeln(a + "<br>");
document.writeln(b + "<br>");

for(let i=2;i<n;i++)
{
    let c = a + b;
    console.log(c);
    document.writeln(c + "<br>");
    a = b;
    b = c;
}
document.writeln("<br>");


//activity05 - find largest element in array
console.log("Activity05");
document.writeln("Activity05<br>");

let arr1 = [24,56,84,33,7];
let lar = arr1[0];

for(let i=0;i<arr1.length;i++)
{
    if(arr1[i] > lar)
    {
        lar = arr1[i];
    }
}

console.log("Largest element:", lar);
document.writeln("Largest element: " + lar + "<br><br>");


//activity06 - remove duplicate element in array
console.log("Activity06");
document.writeln("Activity06<br>");

let arr2 = [12,45,23,45,23,56];

for(let i=0;i<arr2.length;i++)
{
    for(let j=i+1;j<arr2.length;j++)
    {
        if(arr2[i] === arr2[j])
        {
            arr2.splice(j,1);
            j--;
        }
    }
}

console.log(arr2);
document.writeln("Array after removing duplicates: " + arr2 + "<br><br>");


//activity07- Find missing number in array
console.log("Activity07");
document.writeln("Activity07<br>");

let arr3 = [0,4,1,3];

for(let i=0;i<=arr3.length;i++)
{
    if(!arr3.includes(i))
    {
        console.log("Missing number:", i);
        document.writeln("Missing number: " + i + "<br><br>");
    }
}


//activity08- reverse string
console.log("Activity08");
document.writeln("Activity08<br>");

let str = "Neha";
let reverseStr = "";

for(let i=str.length-1;i>=0;i--)
{
    reverseStr += str[i];
}

console.log(reverseStr);
document.writeln("Reversed string: " + reverseStr + "<br><br>");


//activity09 - count vowels in string
console.log("Activity09");
document.writeln("Activity09<br>");

let str1 = "Shravani";
let vowels = ['a','e','i','o','u','A','E','I','O','U'];
let count = 0;

for(let i=0;i<str1.length;i++)
{
    if(vowels.includes(str1[i]))
    {
        count++;
    }
}

console.log("Total vowels:", count);
document.writeln("Total vowels: " + count + "<br><br>");


//activity10 - check string palindrome
console.log("Activity10");
document.writeln("Activity10<br>");

let str2 = "ABCCBA";
let revStr = str2.split("").reverse().join("");

if(str2 === revStr)
{
    console.log("String is palindrome");
    document.writeln("String is palindrome<br><br>");
}
else
{
    console.log("String is not palindrome");
    document.writeln("String is not palindrome<br><br>");
}


//activity11 - check prime number
console.log("Activity11");
document.writeln("Activity11<br>");

let number = 12;
let isPrime = true;

if(number <= 1)
{
    isPrime = false;
}
else
{
    for(let i=2;i<=Math.sqrt(number);i++)
    {
        if(number % i === 0)
        {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? "Prime Number" : "Not Prime");
document.writeln((isPrime ? "Prime Number" : "Not Prime") + "<br><br>");


//activity12 - factorial
console.log("Activity12");
document.writeln("Activity12<br>");

let num4 = 5;
let fact = 1;

for(let i=1;i<=num4;i++)
{
    fact *= i;
}

console.log("Factorial:", fact);
document.writeln("Factorial: " + fact + "<br><br>");


//activity13 - even or odd function
console.log("Activity13");
document.writeln("Activity13<br>");

function evenOdd(num)
{
    if(num % 2 === 0)
    {
        console.log("Even number");
        document.writeln("Even number<br><br>");
    }
    else
    {
        console.log("Odd number");
        document.writeln("Odd number<br><br>");
    }
}

evenOdd(57);


//activity14 - sum of array
console.log("Activity14");
document.writeln("Activity14<br>");

let myArr = [1,2,3,46,5];
let sum = 0;

for(let i=0;i<myArr.length;i++)
{
    sum += myArr[i];
}

console.log("Sum:", sum);
document.writeln("Sum of array: " + sum + "<br>");

