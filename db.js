
let bcrypt=require("bcryptjs");
let password="1234";

let hashedPassword=bcrypt.hashSync(password,10);
console.log("Hashed Password:", hashedPassword);