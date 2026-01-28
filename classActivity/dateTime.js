let myDate = new Date();
console.log(myDate);
console.log(typeof(myDate));
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.getDate());
console.log(myDate.getMonth());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getDay());
console.log(myDate.getUTCDate());
console.log(myDate.toLocaleDateString('default',{
    weekday:'long'
}));

let a = Date.now(); 
console.log(Date.now());
console.log(Date.now()/1000);

//activity-how to get proper time


