//codeno-1
// const a=10;
// a=20;
// console.log(a);

//codeno-2
var a=10;
let ab=20;
{
    var a=100;
    let ab=200;
    console.log(a);
    console.log(ab);
}
console.log(a);
console.log(ab);
//that's why we use let instead of var bcz var changes value outside scope, let doesn't change value outside the scope.