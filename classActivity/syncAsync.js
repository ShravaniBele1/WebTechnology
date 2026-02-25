//Synchronous JS - code execute line by line
//each task wait for previous task to finish

console.log("start");
add =(a,b) => {
    return a+b ;
}
let r = add(5,3);
console.log("Result : ",+r);
console.log("End");

//Asynchronous in js -- some task takes time like api call, file read, database and timer
//js does not wait it moves to next line -- non blocking behaviour
//uses --- fetching data from server,reading files ,set time out,api calls

setTimeout(() =>{
    console.log("Inside Timout");
},2000);
console.log("End");

//set timeout is asynchronous it waits 2 sec meanwhile js print "End" after 2 sec it prints "Inside Timeout"
// activity -- 
// guess the output game 
// blocking vs nonBlocking code 2ex(sync,async)
// api fetch method 
// realtime company example
