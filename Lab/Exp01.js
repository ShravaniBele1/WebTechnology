//activity-01 display student details-name,id,email,cgpa
let studentName = "Shravani Bele";
let studentId = 12;
let studentEmail ="shravanibele01@gmail.com";
let cgpa =8.20;

console.log("Name : "+ studentName);
document.writeln("Name : "+ studentName);
console.log("Id : "+studentId);
document.writeln("Id : "+studentId);
console.log("Email : "+ studentEmail);
document.writeln("Email : "+ studentEmail);
console.log("cgpa : "+ cgpa);
document.writeln("cgpa : "+ cgpa);

//activity-02 -  check number is even or odd
let num = 50;

if(num % 2 == 0)
{
    console.log(num +" is even number" );
    document.writeln(num +" is even number");
}
else{
    console.log(num +" is odd number");
    document.writeln(num +" is odd number");
}

//activity03 - check student pass or fail
let mark = 40;
if (mark >= 25)
{
    console.log("pass");
    document.writeln("pass");
}
else{
    console.log("fail");
    document.writeln("fail");
}

//activity04 - print 1 to 10
for(let i=1;i<11;i++)
{
    console.log(i);
    document.writeln(i);
}

//activity05 - 
let a = 10;
let b = a;

console.log(a,b);
document.writeln(a,b);
a=20;
console.log(a,b);
document.writeln(a,b);