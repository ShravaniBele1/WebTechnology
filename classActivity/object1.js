//2.singleton object
const user = new Object();
console.log(user);
const user1 = {
 
};//non singleton object

user1.ID = 1234;
user1.name = "Shravani";
user1.email = "shravani@gmail.com";
user1.isLogin = true;
console.log(user1);

const user2 = {
    email : "sb@gmail.com",
    username : {
        fullName : {
            Fname : "shravani",
            Lname : "bele"
        }
    }
}
console.log(user2);
console.log(user2.username.fullName);
console.log(user2.username.fullName.Fname);